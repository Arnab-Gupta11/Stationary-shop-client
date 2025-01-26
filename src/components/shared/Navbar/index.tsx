"use client";
import Link from "next/link";
import Logo from "../Logo";
import { ThemeToggler } from "@/components/theme/ThemeToggler";
import { NavMenuOption } from "@/constants/navbar.constant";
import NavSidebar from "./NavSidebar";
import ProfileAvatar from "./ProfileAvatar";
import NavItem from "./NavItem";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const menuItems = NavMenuOption();
  const handleChangeBackgroundOnScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleChangeBackgroundOnScroll);
  }, []);
  useEffect(() => {
    console.log(scrolled);
  }, [scrolled]);
  return (
    <div
      className={`${
        scrolled ? "backdrop-blur-md shadow-md" : "bg-none border-b border-secondary-bg-light dark:border-secondary-bg-dark"
      } transition-colors duration-500 sticky top-0 w-full h-20 z-10 `}
    >
      <div className="max-w-screen-xl px-3 xsm:px-5 py-2  mx-auto flex justify-between items-center  xs-mx:pt-5">
        <div>
          <div className="hidden xs:flex">
            <Logo width={200} />
          </div>
          <div className="xs:hidden flex">
            <Logo width={120} />
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="hidden lg:flex gap-8 items-center font-medium ">
            {menuItems.map((menuItem) =>
              menuItem.show ? (
                <Link key={menuItem.label} href={menuItem.path} className=" py-2 text-base font-medium">
                  <NavItem label={menuItem.label} active={true} />
                </Link>
              ) : null
            )}
          </div>

          <div className="flex gap-3 sm:gap-6 items-center">
            <ThemeToggler />
            <ProfileAvatar />
            <NavSidebar menuItems={menuItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
