import { useEffect, useState } from "react";
import { NavMenuOption } from "@/constants/navbar.constant";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import ProfileAvatar from "./ProfileAvatar";
import NavSidebar from "./NavSidebar";

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
      <div className="max-w-[90%]  py-2  mx-auto flex justify-between items-center  xs-mx:pt-5">
        <div>
          <div className="hidden xs:flex">Logo</div>
          <div className="xs:hidden flex">Logo</div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="hidden lg:flex gap-6 items-center font-medium ">
            {menuItems.map((menuItem) =>
              menuItem.show ? (
                <NavLink key={menuItem.label} to={menuItem.path} className=" py-2 text-base font-medium">
                  <NavItem label={menuItem.label} active={true} />
                </NavLink>
              ) : null
            )}
          </div>

          <div className="flex  items-center">
            <ProfileAvatar />
            <NavSidebar menuItems={menuItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
