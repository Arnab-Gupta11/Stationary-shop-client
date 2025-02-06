export interface IUser {
  _id: string;
  fullName: string;
  profilePicture?: string;
  email: string;
  role: "admin" | "user";
  phone?: string;
  address?: string;
  city?: string;
  isBlocked: boolean;
  createdAt: string;
  updatedAt: string;
}
