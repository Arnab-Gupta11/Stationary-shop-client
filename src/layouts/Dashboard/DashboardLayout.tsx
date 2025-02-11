import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import CartIcon from "@/components/shared/Navbar/CartIcon";
import ProfileAvatar from "@/components/shared/Navbar/ProfileAvatar";
import { BiHome } from "react-icons/bi";
import { FaBox, FaShoppingCart, FaUsers, FaClipboardList, FaUser } from "react-icons/fa";
import Logo from "@/components/shared/Logo";
export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = useAppSelector(useCurrentUser);
  const menuItems = [
    {
      label: "Manage Products",
      path: "/dashboard/manage-products",
      show: user?.role === "admin",
      Icon: FaBox,
    },
    {
      label: "Manage Orders",
      path: "/dashboard/manage-orders",
      show: user?.role === "admin",
      Icon: FaShoppingCart,
    },
    {
      label: "Manage Users",
      path: "/dashboard/manage-users",
      show: user?.role === "admin",
      Icon: FaUsers,
    },
    {
      label: "View Orders",
      path: "/dashboard/view-orders",
      show: user?.role === "user",
      Icon: FaClipboardList,
    },
    {
      label: "Manage Profile",
      path: "/dashboard/manage-profile",
      show: user?.role === "user",
      Icon: FaUser,
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col w-64 bg-white text-slate-800 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } lg:translate-x-0 lg:fixed`}
      >
        <div className="flex items-center justify-between p-4 ">
          <div className="mx-auto">
            <Logo />
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6" />
          </Button>
        </div>
        <nav className="flex flex-col p-4 space-y-1.5">
          {menuItems.map((menuItem, idx) => {
            const { Icon } = menuItem;
            return menuItem.show ? (
              <NavLink
                key={idx}
                to={menuItem.path}
                className={({ isActive }) => (isActive ? "bg-[#F7F6FE]  text-slate-900 font-medium" : " text-slate-800 font-medium")}
              >
                <div className="justify-start px-4 py-2 rounded-lg flex items-center gap-2">
                  <Icon size={14} />
                  <span>{menuItem?.label}</span>
                </div>
              </NavLink>
            ) : null;
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-w-0 lg:ml-64">
        {/* Navbar */}
        <header className="sticky top-0 z-40 flex items-center justify-between px-6 py-4 bg-white shadow-md">
          <div>
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="w-6 h-6" />
            </Button>
            {/* <h2 className="text-lg font-semibold">Welcome</h2> */}
          </div>
          <div className="flex items-center pl-5">
            <Link className="pr-5" to={"/"}>
              <BiHome className="text-xl text-slate-800 hover:scale-105 hover:cursor-pointer" />
            </Link>
            <CartIcon />
            <ProfileAvatar />
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6 bg-gray-100 rounded-lg">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
