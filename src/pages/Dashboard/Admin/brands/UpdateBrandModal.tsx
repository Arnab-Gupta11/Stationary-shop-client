/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateCategoryValidationSchema } from "@/schemas/category";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import UpdateImageUploader from "@/components/form/CustomImageUplaoder/UpdateImageUploader";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useAsyncForm } from "@/hooks/useAsyncForm";
import { z } from "zod";
import CustomTextArea from "@/components/form/CustomTextArea";
import { useGetBrandDetailsQuery, useUpdateBrandMutation } from "@/redux/features/brand";
import { updateBrandValidationSchema } from "@/schemas/brand";
import { updateImageUpload } from "@/utils/updateImageUpload";
import DialogCloseBtn from "@/components/ui/core/DialogCloseBtn";

type TUpdateBrandModalProp = {
  id: string;
};
type TFormValues = z.infer<typeof updateBrandValidationSchema>;
const UpdateBrandModal = ({ id }: TUpdateBrandModalProp) => {
  const { data: brandData, isLoading } = useGetBrandDetailsQuery({ id });
  const defaultImages = [brandData?.data?.logo];
  const [open, setOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [updateBrand] = useUpdateBrandMutation(undefined);
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
    asyncData: brandData?.data,
  });

  const onSubmit = async (data: TFormValues) => {
    try {
      setUploading(true);
      const finalImages = await updateImageUpload(data.images.newImages, data.images.removedExisting, defaultImages, form, setUploading);

      if (!finalImages || finalImages.length === 0) {
        return;
      }
      const payload = {
        name: data.name,
        description: data.description,
        logo: finalImages[0],
      };

      const res = await updateBrand({ id: brandData?.data?._id, data: payload }).unwrap();
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
      <DialogContent className="h-96 md:h-[450px] overflow-hidden p-0">
        <DialogCloseBtn />
        <div className="p-6 overflow-y-auto w-full h-full">
          <DialogHeader>
            <DialogTitle className="text-xl text-light-primary-text dark:text-dark-primary-txt font-semibold font-Aclonica">
              Update Product Brand
            </DialogTitle>
          </DialogHeader>
          {isLoading && <Loader2 className="animate-spin mx-auto mt-8" />}
          {!isLoading && (
            <CustomForm form={form} onSubmit={onSubmit}>
              <CustomInput fieldName="name" label="Brand Name" placeholder="Enter brand name" inputType="text" form={form} />
              <CustomTextArea fieldName="description" label="Brand Description" placeholder="Enter brand description" inputType="text" form={form} />
              <UpdateImageUploader
                control={form.control}
                name="images"
                label="Brand Image"
                maxFiles={1}
                maxFileSize={4}
                existingImages={defaultImages}
              />
              <Button variant="default" type="submit" className="w-full mt-8" disabled={uploading}>
                {uploading ? (
                  <div className="flex items-center gap-2">
                    <Loader2 className="animate-spin" />
                    Updating Brand...
                  </div>
                ) : (
                  "Update Brand"
                )}
              </Button>
            </CustomForm>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBrandModal;
