/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import { uploadFile } from "./uploadFile";

export const updateImageUpload = async (
  newImages: File[],
  removedExisting: string[],
  defaultImages: string[],
  form: any,
  setUploading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const totalImages = newImages.length + (defaultImages.length - removedExisting.length);
  if (totalImages < 1) {
    form.trigger("images");
    toast.error("At least one image is required.");
    setUploading(false);
    return;
  }

  const newImageUrls = await uploadFile(newImages);
  if (newImageUrls.length !== newImages.length) {
    toast.error("Some images failed to upload.");
    setUploading(false);
    return;
  }

  const finalImages = defaultImages.filter((url: string) => !removedExisting.includes(url)).concat(newImageUrls);
  return finalImages;
};
