import { z } from "zod";

//Create category validation schema
export const createBrandValidationSchema = z.object({
  name: z.string().min(1, "Category name is required").max(80, "Category name should not exceed 80 characters"),
  description: z.string().min(1, "Category description is required").max(150, "Category name should not exceed 150 characters"),
  logo: z.array(z.instanceof(File)).min(1, "At least one image is required"),
});
//Update category validation schema
export const updateBrandValidationSchema = z.object({
  name: z.string().min(1, "Category name is required").max(80, "Category name should not exceed 80 characters"),
  description: z.string().min(1, "Category description is required").max(150, "Category name should not exceed 150 characters"),
  images: z.object({
    newImages: z.array(z.instanceof(File)).max(1, "Cannot upload more than 1 image"),
    removedExisting: z.array(z.string().url("Invalid image URL")),
  }),
});
