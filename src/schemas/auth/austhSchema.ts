import { z } from "zod";
//login
export const loginSchema = z.object({
  email: z.string().nonempty({ message: "Email is required." }).email({ message: "Invalid email address format." }),
  password: z.string().nonempty({ message: "Password is required." }),
});
export const loginFormDefaultValue = {
  email: "",
  password: "",
};

//Register
export const registerSchema = z
  .object({
    fullName: z.string().nonempty("Full name is required").min(1, "Full name is required").max(100, "Full name cannot exceed 100 characters"),
    email: z.string().nonempty("Email is required").email("Invalid email format").max(255, "Email cannot exceed 255 characters"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .max(100, "Password cannot exceed 100 characters"),
    confirmedPassword: z
      .string()
      .nonempty("Confirmed password is required")
      .min(8, "Confirmed password must be at least 8 characters long")
      .max(100, "Confirmed password cannot exceed 100 characters"),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    message: "Passwords do not match",
    path: ["confirmedPassword"],
  });

export const registerFormDefaultValue = {
  fullName: "",
  email: "",
  password: "",
  confirmedPassword: "",
};
