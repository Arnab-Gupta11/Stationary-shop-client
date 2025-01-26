import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import NavItem from "./NavItem";
import { TNavMenuItem } from "@/constants/navbar.constant";

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
              <Logo width={200} />
            </SheetTitle>
            <SheetDescription className="flex flex-col gap-4 items-start justify-start pl-7">
              {menuItems.map((menuItem) =>
                menuItem.show ? (
                  <Link key={menuItem.label} href={menuItem.path}>
                    <NavItem label={menuItem.label} active={true} />
                  </Link>
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
