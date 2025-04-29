import { ChevronsUpDown, LogOut } from "lucide-react";
import NavItem from "./NavItem";
import { TNavMenuItem } from "@/constants/navbar.constant";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { NavLink, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import CartIcon from "./CartIcon";
import { BiGitCompare } from "react-icons/bi";
import { ThemeToggler } from "../ThemeToggler";
import { MdMenuOpen } from "react-icons/md";

const NavSidebar = ({ menuItems }: { menuItems: TNavMenuItem }) => {
  const navigate = useNavigate();
  const user = useAppSelector(useCurrentUser);
  const [logoutUser] = useLogoutMutation(undefined);
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    dispatch(logout());
    const res = await logoutUser(undefined).unwrap();
    if (res?.success === true) {
      navigate("/");
    }
  };
  return (
    <div className="">
      <Sheet>
        <SheetTrigger
          className="bg-none shadow-none hover:bg-none
      focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0
      ring-0 outline-none rounded-xl border-2 border-slate-100 dark:border-gray-900 lg:hidden h-9 w-9 flex items-center justify-center"
        >
          <MdMenuOpen className="text-xl text-light-primary-text dark:text-dark-primary-txt hover:text-primary dark:hover:text-primary transition hover:scale-105 cursor-pointer " />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="border-none bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-md shadow-secondary-bg-light dark:shadow-secondary-bg-dark outline-none flex flex-col justify-between w-[90%] xsm:w-72"
        >
          <SheetHeader>
            <div className="flex items-center justify-around gap-2 border-2 border-light-border dark:border-dark-border shadow-box-shadow-light dark:shadow-box-shadow-dark rounded-2xl py-3 focus:ring-0 p-4 mb-2 mt-3">
              <CartIcon />
              <span className="rounded-xl border-2 border-slate-100 dark:border-gray-900 flex items-center justify-center h-9 w-9">
                <BiGitCompare className="text-xl text-light-primary-text dark:text-dark-primary-txt hover:text-primary dark:hover:text-primary transition hover:scale-105 cursor-pointer " />
              </span>
              <ThemeToggler />
            </div>
            <SheetDescription className="flex flex-col gap-4 items-start justify-start pl-2 pt-2">
              {menuItems.map((menuItem, idx) =>
                menuItem.show ? (
                  <NavLink
                    key={idx}
                    to={menuItem.path}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-[3px] border-primary text-primary"
                        : "text-light-primary-text dark:text-dark-primary-txt font-medium hover:text-primary ease-in-outs duration-700"
                    }
                  >
                    <NavItem label={menuItem.label} active={true} />
                  </NavLink>
                ) : null
              )}
            </SheetDescription>
          </SheetHeader>
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-2xl focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 " asChild>
              <div className="flex items-center gap-2 bg-light-muted-bg border-2 dark:bg-dark-muted-bg border-slate-200 dark:border-dark-border rounded-2xl py-3 focus:ring-0 p-4">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user?.profilePicture} alt={user?.name} />
                  <AvatarFallback className="rounded-lg">DP</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-light-primary-text dark:text-dark-primary-txt">{user?.name}</span>
                  <span className="truncate text-xs font-medium text-light-secondary-text dark:text-dark-secondary-txt">{user?.userEmail}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4 text-light-primary-text dark:text-dark-primary-txt" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 bg-light-secondary-bg dark:bg-dark-secondary-bg border-[3px] border-light-border dark:border-dark-border text-light-primary-text dark:text-dark-primary-txt dark:shadow-box-shadow-dark font-medium font-Exo rounded-2xl"
              side="top"
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user?.profilePicture} alt={user?.name} />
                    <AvatarFallback className="rounded-lg">DP</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-light-primary-text dark:text-dark-primary-txt">{user?.name}</span>
                    <span className="truncate text-xs font-medium text-light-secondary-text dark:text-dark-secondary-txt">{user?.userEmail}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="border-light-border darl" />
              <DropdownMenuItem
                onClick={() => handleLogout()}
                className="cursor-pointer  hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl text-red-600 px-3"
              >
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavSidebar;
