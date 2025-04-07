import { useEffect, useState } from "react";
import { NavMenuOption } from "@/constants/navbar.constant";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import ProfileAvatar from "./ProfileAvatar";
import NavSidebar from "./NavSidebar";
import CartIcon from "./CartIcon";
import Logo from "../Logo";
import { BiSearchAlt2 } from "react-icons/bi";
import { ThemeToggler } from "../ThemeToggler";
import { BiGitCompare } from "react-icons/bi";
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
  return (
    <div
      className={`${
        scrolled ? "shadow-md dark:shadow-gray-900" : "border-b border-light-border dark:border-dark-border"
      } bg-white dark:bg-black sticky top-0 w-full h-24 z-20`}
    >
      <div className="max-w-[90%]  mx-auto flex justify-between items-center  my-auto h-full">
        <div>
          <div className="hidden xs:flex">
            {/* <h1 className="text-black text-2xl font-bold">
              Note<span className="text-primary-bg">fy</span>
            </h1> */}
            <Logo />
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="hidden lg:flex gap-7 items-center ">
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
          </div>
        </div>

        <div className="flex items-center">
          <BiSearchAlt2 className="text-2xl text-light-primary-text dark:text-dark-primary-txt hover:text-primary dark:hover:text-primary transition hover:scale-105 cursor-pointer" />
          <CartIcon />
          <BiGitCompare className="text-2xl text-light-primary-text dark:text-dark-primary-txt hover:text-primary dark:hover:text-primary transition hover:scale-105 cursor-pointer ml-4" />
          <ThemeToggler />
          <ProfileAvatar />
          <NavSidebar menuItems={menuItems} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
