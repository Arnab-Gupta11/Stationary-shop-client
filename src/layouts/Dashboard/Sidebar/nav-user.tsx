"use client";

import { ChevronsUpDown, LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "@/redux/features/auth/authApi";

export function NavUser() {
  const { isMobile } = useSidebar();
  const navigate = useNavigate();
  const user = useAppSelector(useCurrentUser);
  const [logoutUser] = useLogoutMutation(undefined);
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    dispatch(logout());
    const res = await logoutUser(undefined).unwrap();
    if (res?.success === true) {
      navigate("/");
    }
  };

  return (
    <SidebarMenu className="rounded-2xl">
      <SidebarMenuItem className="bg-light-muted-bg border-2 dark:bg-dark-muted-bg border-slate-200 dark:border-dark-border rounded-2xl py-1 focus:ring-0">
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-2xl focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0" asChild>
            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user?.profilePicture} alt={user?.name} />
                <AvatarFallback className="rounded-lg">DP</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-light-primary-text dark:text-dark-primary-txt">{user?.name}</span>
                <span className="truncate text-xs font-medium text-light-secondary-text dark:text-dark-secondary-txt">{user?.userEmail}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 text-light-primary-text dark:text-dark-primary-txt" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 bg-light-secondary-bg dark:bg-dark-secondary-bg border-[3px] border-light-border dark:border-dark-border text-light-primary-text dark:text-dark-primary-txt dark:shadow-box-shadow-dark font-medium font-Exo rounded-2xl"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user?.profilePicture} alt={user?.name} />
                  <AvatarFallback className="rounded-lg">DP</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-light-primary-text dark:text-dark-primary-txt">{user?.name}</span>
                  <span className="truncate text-xs font-medium text-light-secondary-text dark:text-dark-secondary-txt">{user?.userEmail}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="border-light-border darl" />
            <DropdownMenuItem
              onClick={() => handleLogout()}
              className="cursor-pointer  hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl text-red-600 px-3"
            >
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
