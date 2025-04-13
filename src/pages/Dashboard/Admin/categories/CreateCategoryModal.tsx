/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomInput from "@/components/form/CustomInput";
import CustomSelect from "@/components/form/CustomSelect";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SelectItem } from "@/components/ui/select";
import { Plus, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import CreateImageUploader from "@/components/form/CustomImageUplaoder/CreateImageUploader";
import { TCategoryOptions } from "@/types/category.types";
import { createCategoryValidationSchema } from "@/schemas/category";
import toast from "react-hot-toast";
import CustomForm from "@/components/form/CustomForm";
import { uploadFile } from "@/utils/uploadFile";
import { useAddNewCategoryMutation } from "@/redux/features/categories/categories.api";
import CustomTextArea from "@/components/form/CustomTextArea";

type TFormValues = z.infer<typeof createCategoryValidationSchema>;
type TCategoryModalProp = {
  categoryOption: TCategoryOptions[];
  isLoading: boolean;
};

const createCategoryDefaultValue = {
  name: "",
  description: "",
  parent: "",
  icon: [],
};

const CreateCategoryModal = ({ categoryOption, isLoading }: TCategoryModalProp) => {
  const [open, setOpen] = useState(false);
  const [addNewCategory] = useAddNewCategoryMutation(undefined);
  const form = useForm<TFormValues>({
    resolver: zodResolver(createCategoryValidationSchema),
    defaultValues: createCategoryDefaultValue,
    mode: "onChange",
  });
  const [uploading, setUploading] = useState(false);

  const onSubmit = async (data: TFormValues) => {
    try {
      setUploading(true);

      // Validate icon field
      if (data.icon.length === 0) {
        form.trigger("icon");
        setUploading(false);
        return;
      }

      const imageUrls = await uploadFile(data.icon);
      if (imageUrls.length !== data.icon.length) {
        toast("Some images failed to upload. Try again later.");
        setUploading(false);
        return;
      }

      const payload = {
        name: data.name,
        description: data.description,
        parent: data.parent || null,
        icon: imageUrls[0],
      };

      const res = await addNewCategory(payload).unwrap();
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
        <Button variant="primary">
          <Plus />
          <span>Add Category</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Product Category</DialogTitle>
        </DialogHeader>

        <CustomForm form={form} onSubmit={onSubmit}>
          <CustomInput fieldName="name" label="Category Name" placeholder="Enter category name" inputType="text" form={form} />
          <CustomTextArea
            fieldName="description"
            label="Category Description"
            placeholder="Enter category description"
            inputType="text"
            form={form}
          />
          <CustomSelect form={form} fieldName="parent" label="Parent Category (Optional)" placeholder="Select parent category (if sub-category)">
            {isLoading && (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin" />
              </div>
            )}
            {!isLoading &&
              categoryOption?.length > 0 &&
              categoryOption?.map((option) => (
                <SelectItem key={option._id} value={option._id}>
                  {option.name}
                </SelectItem>
              ))}
          </CustomSelect>
          <CreateImageUploader control={form.control} name="icon" label="Category Icon image" maxFiles={1} />
          <Button variant="default" type="submit" className="w-full mt-8" disabled={uploading}>
            {uploading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin" />
                Adding Category...
              </div>
            ) : (
              "Add Category"
            )}
          </Button>
        </CustomForm>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryModal;
