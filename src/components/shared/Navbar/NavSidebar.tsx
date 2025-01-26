import { Menu } from "lucide-react";
import NavItem from "./NavItem";
import { TNavMenuItem } from "@/constants/navbar.constant";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "react-router-dom";

const NavSidebar = ({ menuItems }: { menuItems: TNavMenuItem }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger className="border-none bg-primary-bg-light dark:bg-primary-bg-dark shadow-md shadow-secondary-bg-light dark:shadow-secondary-bg-dark p-2 rounded-lg block lg:hidden">
          <Menu size={15} />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="border-none bg-primary-bg-light dark:bg-primary-bg-dark shadow-md shadow-secondary-bg-light dark:shadow-secondary-bg-dark outline-none"
        >
          <SheetHeader>
            <SheetTitle>
              {/* <Logo width={200} /> */}
              Logo
            </SheetTitle>
            <SheetDescription className="flex flex-col gap-4 items-start justify-start pl-7">
              {menuItems.map((menuItem) =>
                menuItem.show ? (
                  <NavLink key={menuItem.label} to={menuItem.path}>
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
