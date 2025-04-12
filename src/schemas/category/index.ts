import { z } from "zod";

//Create category validation schema
export const createCategoryValidationSchema = z.object({
  name: z.string().min(1, "Category name is required").max(80, "Category name should not exceed 80 characters"),
  description: z.string().min(1, "Category description is required").max(150, "Category name should not exceed 150 characters"),
  parent: z.string().optional().nullable(),
  icon: z.array(z.instanceof(File)).min(1, "At least one image is required"),
});
//Update category validation schema
export const updateCategoryValidationSchema = z.object({
  body: z.object({
    name: z.string().max(80, "Category name should not exceed 80 characters").optional(),
    description: z.string().max(150, "Category name should not exceed 150 characters").optional(),
    icon: z.string().optional(),
  }),
});
