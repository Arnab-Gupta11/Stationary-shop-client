import { z } from "zod";

export const billingInfoSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().min(1, "Email is required"),
  phone: z.string().regex(/^\+?[0-9]{10,15}$/, "Invalid phone number format"),
  address: z.string().min(2, "Address must be at least 2 characters"),
  city: z.string().min(1, "City is required"),
});
