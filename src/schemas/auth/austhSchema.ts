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
      .max(100, "Password cannot exceed 100 characters")
      .refine((value) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((value) => /\d/.test(value), {
        message: "Password must contain at least one number",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "Password must contain at least one special character",
      }),
    confirmedPassword: z
      .string()
      .nonempty("Confirmed password is required")
      .min(8, "Confirmed password must be at least 8 characters long")
      .max(100, "Confirmed password cannot exceed 100 characters"),
    role: z.string().nonempty("Role is required"),
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
  role: "",
};

//Forget Password Link
export const resetPasswordLinkSchema = z.object({
  email: z.string().nonempty({ message: "Email is required." }).email({ message: "Invalid email address format." }),
});
export const resetPasswordLinkDefaultValue = {
  email: "",
};
//Forget password confirmed.
export const resetPasswordConfirmSchema = z
  .object({
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .max(100, "Password cannot exceed 100 characters")
      .refine((value) => /[A-Z]/.test(value), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((value) => /\d/.test(value), {
        message: "Password must contain at least one number",
      })
      .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
        message: "Password must contain at least one special character",
      }),
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
export const resetPasswordConfirmValue = {
  password: "",
  confirmedPassword: "",
};

//Email Verification OTP
export const emailOtpVerificationSchema = z.object({
  otp: z.string().length(4, { message: "The OTP must be exactly 4 digits." }),
});
export const emailOtpVerificationDefaultValue = {
  otp: "",
};
