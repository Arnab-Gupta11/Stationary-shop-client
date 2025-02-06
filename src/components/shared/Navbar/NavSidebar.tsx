import { Menu } from "lucide-react";
import NavItem from "./NavItem";
import { TNavMenuItem } from "@/constants/navbar.constant";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";

const NavSidebar = ({ menuItems }: { menuItems: TNavMenuItem }) => {
  return (
    <div className="ml-5 lg:ml-0">
      <Sheet>
        <SheetTrigger className="border-none bg-primary-bg-light shadow-md shadow-secondary-bg-light p-2 rounded-lg block lg:hidden">
          <Menu size={15} />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="border-none bg-primary-bg-light dark:bg-primary-bg-dark shadow-md shadow-secondary-bg-light dark:shadow-secondary-bg-dark outline-none"
        >
          <SheetHeader>
            <SheetTitle className="flex items-start pl-6 mb-6">
              {/* <h1 className="text-black text-2xl font-bold ml-7 mb-5">
                Note<span className="text-primary-bg">fy</span>
              </h1> */}
              <Logo />
            </SheetTitle>
            <SheetDescription className="flex flex-col gap-4 items-start justify-start pl-7">
              {menuItems.map((menuItem, idx) =>
                menuItem.show ? (
                  <NavLink
                    key={idx}
                    to={menuItem.path}
                    className={({ isActive }) =>
                      isActive
                        ? "border-b-[3px] border-primary-text  text-slate-900 font-medium"
                        : " text-slate-800 font-medium hover:text-primary-bg ease-in-outs duration-700"
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
