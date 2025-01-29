import { TUser } from "@/redux/features/auth/authSlice";

export type TNavMenuItem = {
  label: string;
  path: string;
  show: boolean;
}[];
export const dashboardMenuOption = ({ user }: { user: TUser }) => {
  const menuItems = [
    {
      label: "Manage Products",
      path: "/dashboard/manage-products",
      show: true,
    },
    {
      label: "Manage Orders",
      path: "/dashboard/manage-orders",
      show: true,
    },
    {
      label: "Manage Users",
      path: "/dashboard/manage-users",
      show: user?.role === "user" || user?.role === "user",
    },
    {
      label: "View Orders",
      path: "/dashboard/view-orders",
      show: user?.role === "user" || user?.role === "user",
    },
    {
      label: "Manage Profile",
      path: "/dashboard/manage-profile",
      show: user?.role === "user" || user?.role === "user",
    },
  ];
  return menuItems;
};
