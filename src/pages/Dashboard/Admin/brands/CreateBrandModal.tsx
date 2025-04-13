/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomInput from "@/components/form/CustomInput";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import CreateImageUploader from "@/components/form/CustomImageUplaoder/CreateImageUploader";
import toast from "react-hot-toast";
import CustomForm from "@/components/form/CustomForm";
import { uploadFile } from "@/utils/uploadFile";
import CustomTextArea from "@/components/form/CustomTextArea";
import { useAddNewBrandMutation } from "@/redux/features/brand";
import { createBrandValidationSchema } from "@/schemas/brand";

type TFormValues = z.infer<typeof createBrandValidationSchema>;

const createBrandDefaultValue = {
  name: "",
  description: "",
  logo: [],
};

const CreateBrandModal = () => {
  const [open, setOpen] = useState(false);
  const [addNewBrand] = useAddNewBrandMutation(undefined);
  const form = useForm<TFormValues>({
    resolver: zodResolver(createBrandValidationSchema),
    defaultValues: createBrandDefaultValue,
    mode: "onChange",
  });
  const [uploading, setUploading] = useState(false);

  const onSubmit = async (data: TFormValues) => {
    try {
      setUploading(true);

      // Validate icon field
      if (data.logo.length === 0) {
        form.trigger("logo");
        setUploading(false);
        return;
      }

      const imageUrls = await uploadFile(data.logo);
      if (imageUrls.length !== data.logo.length) {
        toast("Some images failed to upload. Try again later.");
        setUploading(false);
        return;
      }

      const payload = {
        name: data.name,
        description: data.description,
        logo: imageUrls[0],
      };

      const res = await addNewBrand(payload).unwrap();
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
          <span>Add Brand</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-96 md:h-[450px] overflow-hidden p-0">
        <div className="p-6 overflow-y-auto w-full h-full">
          <DialogHeader>
            <DialogTitle>Create Product Brand</DialogTitle>
          </DialogHeader>

          <CustomForm form={form} onSubmit={onSubmit}>
            <CustomInput fieldName="name" label="Brand Name" placeholder="Enter brand name" inputType="text" form={form} />
            <CustomTextArea fieldName="description" label="Brand Description" placeholder="Enter brand description" inputType="text" form={form} />
            <CreateImageUploader control={form.control} name="logo" label="Brand logo image" maxFiles={1} />
            <Button variant="default" type="submit" className="w-full mt-8" disabled={uploading}>
              {uploading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  Adding Brand...
                </div>
              ) : (
                "Add Brand"
              )}
            </Button>
          </CustomForm>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBrandModal;
