/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateCategoryValidationSchema } from "@/schemas/category";
import { useGetCategoryDetailsQuery, useUpdateCategoryMutation } from "@/redux/features/categories/categories.api";

import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import UpdateImageUploader from "@/components/form/CustomImageUplaoder/UpdateImageUploader";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { uploadFile } from "@/utils/uploadFile";
import { useAsyncForm } from "@/hooks/useAsyncForm";
import { z } from "zod";
import CustomTextArea from "@/components/form/CustomTextArea";

type TCategoryModalProp = {
  id: string;
};
type TFormValues = z.infer<typeof updateCategoryValidationSchema>;
const UpdateCategoryModal = ({ id }: TCategoryModalProp) => {
  const { data: categoryData, isLoading } = useGetCategoryDetailsQuery({ id });
  const defaultImages = [categoryData?.data?.icon];
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [updateCategory] = useUpdateCategoryMutation(undefined);
  const form = useAsyncForm<TFormValues>({
    resolver: zodResolver(updateCategoryValidationSchema),
    defaultValues: {
      name: "",
      description: "",
      images: {
        newImages: [],
        removedExisting: [],
      },
    },
    asyncData: categoryData?.data,
  });

  const onSubmit = async (data: TFormValues) => {
    try {
      setUploading(true);
      const totalImages = data.images.newImages.length + (defaultImages.length - data.images.removedExisting.length);
      if (totalImages < 1) {
        form.trigger("images");
        toast.error("At least one image is required.");
        setUploading(false);
        return;
      }

      const newImageUrls = await uploadFile(data.images.newImages);
      if (newImageUrls.length !== data.images.newImages.length) {
        toast.error("Some images failed to upload.");
        setUploading(false);
        return;
      }

      const finalImages = defaultImages.filter((url: string) => !data.images.removedExisting.includes(url)).concat(newImageUrls);

      const payload = {
        name: data.name,
        description: data.description,
        icon: finalImages[0],
      };

      const res = await updateCategory({ id: categoryData?.data?._id, data: payload }).unwrap();
      if (res?.success === true) {
        toast.success(res?.message);
        form.reset();
        setOpen(false);
      } else {
        toast.error(res?.data?.message || "Something went wrong. Try again later.");
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3">
          Update
        </span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Product Category</DialogTitle>
        </DialogHeader>
        {isLoading && <Loader2 className="animate-spin mx-auto mt-8" />}
        {!isLoading && (
          <CustomForm form={form} onSubmit={onSubmit}>
            <CustomInput fieldName="name" label="Category Name" placeholder="Enter category name" inputType="text" form={form} />
            <CustomTextArea
              fieldName="description"
              label="Category Description"
              placeholder="Enter category description"
              inputType="text"
              form={form}
            />
            <UpdateImageUploader
              control={form.control}
              name="images"
              label="Category Image"
              maxFiles={1}
              maxFileSize={4}
              existingImages={defaultImages}
            />
            <Button variant="default" type="submit" className="w-full mt-8" disabled={uploading}>
              {uploading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  Updating Category...
                </div>
              ) : (
                "Update Category"
              )}
            </Button>
          </CustomForm>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCategoryModal;
