// import { useCurrentUser } from "@/redux/features/auth/authSlice";
// import { useAppSelector } from "@/redux/hooks";

export type TNavMenuItem = {
  label: string;
  path: string;
  show: boolean;
}[];
export const NavMenuOption = () => {
  // const user = useAppSelector(useCurrentUser);
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Shop",
      path: "/shop",
      show: true,
    },
    {
      label: "About",
      path: "/about",
      show: true,
    },
    {
      label: "Contact",
      path: "/contact-us",
      show: true,
    },
    {
      label: "Faq",
      path: "/faq",
      show: true,
    },
  ];
  return menuItems;
};
