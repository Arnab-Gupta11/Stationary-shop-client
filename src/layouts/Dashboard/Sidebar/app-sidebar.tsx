"use client";

import * as React from "react";
import { Bot, Settings, SquareTerminal } from "lucide-react";

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
      {
        title: "Dashboard-admin",
        url: "/admin",
        icon: SquareTerminal,
        isActive: true,
        show: user?.role === "admin",
      },
      {
        title: "Dashboard-user",
        url: "/dashboard1/user",
        icon: SquareTerminal,
        isActive: true,
        show: user?.role === "user",
      },
      {
        title: "Products",
        // url: "/user/shop/products",
        icon: Bot,
        show: user?.role === "admin",
        items: [
          {
            title: "Manage Products",
            url: "/dashboard1/manage-products",
          },
          {
            title: "Manage Categories",
            url: "/user/shop/category",
          },
          {
            title: "Manage Brands",
            url: "/user/shop/brand",
          },
          {
            title: "Manage Coupon",
            url: "/user/shop/manage-coupon",
          },
        ],
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
