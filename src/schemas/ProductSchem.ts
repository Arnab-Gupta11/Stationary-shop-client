import { z } from "zod";
export const defaultAddProductValues = {
  name: "",
  brand: "",
  price: "0",
  category: "",
  description: "",
  quantity: "0",
  image: undefined,
};

export const productValidationSchema = z.object({
  name: z.string().min(1, "Product Name is required").trim(),
  brand: z.string().min(1, "Product Brand is required").trim(),
  price: z
    .string()
    .min(1, "Product price is required")
    .regex(/^(?!0+(\.0+)?$)\d+(\.\d+)?$/, "Product price must be a positive number greater than zero."),
  category: z.string().min(1, "Product Category is required.").trim(),
  description: z.string().min(1, "Product Description is required.").trim(),
  quantity: z
    .string()
    .min(1, "Product quantity is required")
    .regex(/^[1-9]\d*$/, "Product quantity must be a positive integer greater than zero."),
  image: z.instanceof(File, { message: "Product image must be a file." }),
});
