// @/components/form/UpdateImageUploader/UpdateImageUploader.tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { useController, Control, FieldValues, Path } from "react-hook-form";
import { AiOutlineCloudUpload } from "react-icons/ai";

interface UpdateImageUploaderProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  maxFiles?: number;
  maxFileSize?: number; // in MB
  className?: string;
  existingImages: string[]; // Required for update
}

interface ImageFieldValue {
  newImages: File[];
  removedExisting: string[];
}

const UpdateImageUploader = <T extends FieldValues>({
  control,
  name,
  label = "Upload Image",
  maxFiles = 3,
  className = "",
  existingImages,
}: UpdateImageUploaderProps<T>) => {
  const {
    field: { onChange, value = { newImages: [], removedExisting: [] } as ImageFieldValue },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      validate: {
        minFiles: (val: ImageFieldValue) => {
          const totalImages = val.newImages.length + (existingImages.length - val.removedExisting.length);
          return totalImages >= 1 || "At least one image is required";
        },
        maxFiles: (val: ImageFieldValue) => {
          const totalImages = val.newImages.length + (existingImages.length - val.removedExisting.length);
          return totalImages <= maxFiles || `Cannot have more than ${maxFiles} images`;
        },
        // fileSize: (val: ImageFieldValue) =>
        //   val.newImages.every((file) => file.size <= maxFileSize * 1024 * 1024) || `Each image must be less than ${maxFileSize}MB`,
        // fileType: (val: ImageFieldValue) => val.newImages.every((file) => file.type.startsWith("image/")) || "Only image files are allowed",
      },
    },
  });

  const [previews, setPreviews] = useState<string[]>([]);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const existingPreviews = existingImages.filter((url) => !value.removedExisting.includes(url));
    const newPreviews = value.newImages.map((file: File) => URL.createObjectURL(file));
    setPreviews([...existingPreviews, ...newPreviews]);
    return () => newPreviews.forEach((url: string) => URL.revokeObjectURL(url));
  }, [value.newImages, value.removedExisting, existingImages]);

  const handleImageFiles = (files: FileList) => {
    const selectedFiles = Array.from(files).filter((file) => file.type.startsWith("image/"));
    if (selectedFiles.length === 0) return;

    const totalImages = value.newImages.length + (existingImages.length - value.removedExisting.length) + selectedFiles.length;
    if (totalImages > maxFiles) return;

    onChange({ ...value, newImages: [...value.newImages, ...selectedFiles].slice(0, maxFiles) });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) handleImageFiles(e.target.files);
  };

  const handleImageDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) handleImageFiles(e.dataTransfer.files);
  };

  const removeImage = (index: number) => {
    const existingCount = existingImages.filter((url) => !value.removedExisting.includes(url)).length;
    if (index < existingCount) {
      const existingImage = existingImages.filter((url) => !value.removedExisting.includes(url))[index];
      onChange({ ...value, removedExisting: [...value.removedExisting, existingImage] });
    } else {
      const newImageIndex = index - existingCount;
      const newImages = value.newImages.filter((_: File, idx: number) => idx !== newImageIndex);
      onChange({ ...value, newImages });
    }
  };

  return (
    <div className={`w-full mt-4 ${className}`}>
      <Label className="ml-1 font-semibold">{label}</Label>
      <label
        htmlFor="image-upload"
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleImageDrop}
        className={`mt-2 cursor-pointer flex items-center justify-center px-4 py-2 h-32 w-full rounded-2xl border-2 border-slate-100 dark:border-gray-950 text-sm text-light-secondary-text dark:text-dark-secondary-txt bg-slate-50 dark:bg-dark-muted-bg font-medium flex-col font-Exo transition-all hover:shadow-md dark:hover:shadow-dark-primary-bg hover:bg-slate-100 hover:dark:bg-slate-900
                ${
                  dragging
                    ? "border-blue-200 bg-blue-50 dark:border-blue-950 dark:bg-[#181a37]"
                    : "border-slate-100 bg-slate-50 dark:border-gray-950 dark:bg-dark-muted-bg"
                }
                `}
        aria-label="Drag and drop or click to upload images"
      >
        <AiOutlineCloudUpload className="text-3xl xl:text-4xl" />
        <span className="font-semibold mt-3 text-center">Drag & drop files here, or click to select files.</span>
        <span className="text-slate-500 mt-0.5 text-sm text-center">You can upload {maxFiles} files.</span>
      </label>
      <Input id="image-upload" type="file" accept="image/*" multiple={maxFiles > 1} className="hidden" onChange={handleChange} />
      {error && <span className="mt-3 text-red-600 text-xs font-medium">{error.message}</span>}
      <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-8 gap-3">
        {previews.map((preview, index) => (
          <div key={index} className="relative">
            <img src={preview} alt="preview" className="w-full h-24 object-contain rounded-lg shadow-md p-1" />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 bg-red-500 text-white w-5 h-5 rounded-full text-xs cursor-pointer shrink-0"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateImageUploader;
