"use client";

import * as React from "react";
import { LayoutDashboard, FolderOpen, BadgeCheck, Boxes, ShoppingCart, FileText, SquareTerminal, Settings } from "lucide-react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import Logo from "@/components/shared/Logo";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const user = useAppSelector(useCurrentUser);
  const data = {
    navMain: [
      //Admin routes
      {
        title: "Overview",
        url: "/dashboard/admin/overview",
        icon: LayoutDashboard,
        show: user?.role === "admin",
      },
      {
        title: "Categories",
        icon: FolderOpen,
        show: user?.role === "admin",
        items: [
          { title: "Manage Categories", url: "/dashboard/admin/manage-categories" },
          { title: "Deleted Categories", url: "/dashboard/admin/deleted-categories" },
        ],
      },
      {
        title: "Brands",
        icon: BadgeCheck,
        show: user?.role === "admin",
        items: [
          { title: "Manage Brands", url: "/dashboard/admin/manage-brands" },
          { title: "Deleted Brands", url: "/dashboard/admin/deleted-brands" },
        ],
      },
      {
        title: "Products",
        icon: Boxes,
        show: user?.role === "admin",
        items: [
          { title: "Manage Products", url: "/dashboard/admin/manage-products" },
          { title: "Add Products", url: "/dashboard/admin/add-product" },
          { title: "Deleted Products", url: "/dashboard/admin/deleted-products" },
        ],
      },
      {
        title: "Orders",
        url: "/dashboard/admin/manage-orders",
        icon: ShoppingCart,
        show: user?.role === "admin",
      },
      {
        title: "Blogs",
        icon: FileText,
        show: user?.role === "admin",
        items: [
          { title: "Manage Blogs", url: "/dashboard/admin/manage-blogs" },
          { title: "Add Blogs", url: "/dashboard/admin/add-blogs" },
          { title: "Deleted Blogs", url: "/dashboard/admin/deleted-blogs" },
        ],
      },

      //User routes
      {
        title: "Users",
        url: "/dashboard/admin/manage-users",
        icon: SquareTerminal,
        show: user?.role === "admin",
      },

      {
        title: "Settings",
        url: "#",
        icon: Settings,
        show: user?.role === "user",
        items: [
          {
            title: "Profile",
            url: "/profile",
          },
        ],
      },
    ],
  };
  return (
    <Sidebar collapsible="offcanvas" {...props} className="bg-light-secondary-bg dark:bg-dark-secondary-bg border-none">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex items-center justify-center">
                  <Logo />
                </div>
                {/* <div className="grid flex-1 text-left text-sm leading-tight">
                  <h2 className="font-bold text-xl">NextMart</h2>
                </div> */}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-3">
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
