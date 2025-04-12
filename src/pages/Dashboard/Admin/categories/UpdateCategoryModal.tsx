import CustomInput from "@/components/form/CustomInput";
import CustomSelect from "@/components/form/CustomSelect";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { SelectItem } from "@/components/ui/select";
import { Pencil, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import imageUpload from "@/utils/imageUpload";
import { useState, useEffect } from "react";
import UpdateImageUploader from "@/components/form/CustomImageUplaoder/UpdateImageUploader";

// Mock database data
const defaultData = {
  name: {
    firstName: "Rahim",
    lastName: "Monjur",
  },
  email: "rahim@gmail.com",
  fruits: "banana",
  images: [
    "https://res.cloudinary.com/dgxvtrpmh/image/upload/v1744396456/vks7qebzpevnqlihit2i.png",
    "https://res.cloudinary.com/dgxvtrpmh/image/upload/v1744396455/laws74lflhqmi0auoswd.jpg",
  ],
};

// Zod schema for update
const formSchema = z.object({
  name: z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
  }),
  email: z.string().email("Invalid email address"),
  fruits: z.string().min(1, "Please select a fruit"),
  image: z.object({
    newImages: z.array(z.instanceof(File)).max(3, "Cannot upload more than 3 images"),
    removedExisting: z.array(z.string().url("Invalid image URL")),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const UpdateCategoryModal = () => {
  const fruits = [
    { name: "Apple", value: "apple" },
    { name: "Banana", value: "banana" },
  ];

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: defaultData.name,
      email: defaultData.email,
      fruits: defaultData.fruits,
      image: {
        newImages: [],
        removedExisting: [],
      },
    },
    mode: "onSubmit",
  });

  const {
    formState: { isSubmitting },
    reset,
    trigger,
  } = form;

  const [uploading, setUploading] = useState(false);

  const onSubmit = async (data: FormValues) => {
    try {
      setUploading(true);

      const totalImages = data.image.newImages.length + (defaultData.images.length - data.image.removedExisting.length);
      if (totalImages < 1) {
        trigger("image");
        toast.error("At least one image is required.");
        setUploading(false);
        return;
      }

      console.log("Upload Files======>", data.image.newImages);

      const uploadResults = await Promise.all(
        data.image.newImages.map(async (file) => {
          const result = await imageUpload(file);
          return result.secure_url || null;
        })
      );
      console.log("Upload URLs======>", uploadResults);

      const newImageUrls = uploadResults.filter((url): url is string => !!url);
      console.log("After Uploading===>", newImageUrls);

      if (newImageUrls.length !== data.image.newImages.length) {
        toast.error("Some images failed to upload.");
        setUploading(false);
        return;
      }

      const finalImages = defaultData.images.filter((url) => !data.image.removedExisting.includes(url)).concat(newImageUrls);

      const payload = {
        name: data.name,
        email: data.email,
        fruits: data.fruits,
        images: finalImages,
      };

      console.log("Submitting to backend:", payload);

      toast.success("Category updated successfully!");
      reset({
        name: defaultData.name,
        email: defaultData.email,
        fruits: defaultData.fruits,
        image: { newImages: [], removedExisting: [] },
      });
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to update category. Try again later.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Pencil className="mr-2 h-4 w-4" />
          <span>Edit Category</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Product Category</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <CustomInput fieldName="name.firstName" label="First Name" placeholder="Enter first name" inputType="text" form={form} />
            <CustomInput fieldName="name.lastName" label="Last Name" placeholder="Enter last name" inputType="text" form={form} />
            <CustomInput fieldName="email" label="Email" placeholder="Enter email" inputType="email" form={form} />
            <CustomSelect form={form} fieldName="fruits" label="Favourite Fruit" placeholder="Choose your favourite fruit">
              {fruits.map((option) => (
                <SelectItem key={option.name} value={option.value}>
                  {option.name}
                </SelectItem>
              ))}
            </CustomSelect>
            <UpdateImageUploader
              control={form.control}
              name="image"
              label="Category Image"
              maxFiles={3}
              maxFileSize={2}
              existingImages={defaultData.images}
            />
            <Button variant="default" type="submit" className="w-full mt-8" disabled={isSubmitting || uploading}>
              {uploading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  Uploading...
                </div>
              ) : (
                "Update Category"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCategoryModal;
