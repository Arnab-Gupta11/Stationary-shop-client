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
      label: "Home",
      path: "/gsdg",
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
      label: "About1",
      path: "/about",
      show: true,
    },
  ];
  return menuItems;
};
