import { ChevronsLeft } from "lucide-react";
import NavItem from "./NavItem";
import { TNavMenuItem } from "@/constants/navbar.constant";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import CartIcon from "./CartIcon";
import { ThemeToggler } from "../ThemeToggler";
import { MdMenuOpen } from "react-icons/md";
import CompareProductIcon from "./CompareProductIcon";

const NavSidebar = ({ menuItems }: { menuItems: TNavMenuItem }) => {
  const user = useAppSelector(useCurrentUser);
  return (
    <div className="ml-4">
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
          <SheetClose asChild>
            <button className="absolute -right-4 top-3 p-2 rounded-xl transition bg-light-secondary-bg dark:bg-dark-secondary-bg">
              <ChevronsLeft className="w-5 h-5  text-light-secondary-text dark:text-dark-secondary-txt hover:text-primary hover:dark:text-primary duration-700 scale-105" />
              <span className="sr-only">Close</span>
            </button>
          </SheetClose>
          <SheetHeader>
            <div className="flex items-center justify-around gap-2 border-2 border-light-border dark:border-dark-border shadow-box-shadow-light dark:shadow-box-shadow-dark rounded-2xl py-3 focus:ring-0 p-4 mb-2 mt-3">
              {user?.role === "admin" || <CartIcon />}
              <CompareProductIcon />
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
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavSidebar;
