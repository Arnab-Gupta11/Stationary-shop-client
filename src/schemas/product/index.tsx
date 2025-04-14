import { z } from "zod";

export const createProductValidationSchema = z.object({
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),

  // Validate as string of digits (non-negative number)
  price: z
    .string()
    .min(1, "Price is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Price must be a valid number"),

  quantity: z.string().min(1, "Quantity is required").regex(/^\d+$/, "Quantity must be a non-negative integer"),

  weight: z
    .string()
    .min(1, "Weight is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Weight must be a valid number"),

  category: z.string().min(1, "Category is required"),
  brand: z.string().min(1, "Brand is required"),

  images: z.array(z.instanceof(File)).min(1, "At least one image is required"),

  keyFeatures: z
    .array(
      z.object({
        value: z.string().min(1, "Feature value is required"),
      })
    )
    .min(1, "At least one key feature is required"),

  specification: z
    .array(
      z.object({
        key: z.string().min(1, "Specification Name is required"),
        value: z.string().min(1, "Specification description is required"),
      })
    )
    .min(1, "At least one specification is required"),
});
