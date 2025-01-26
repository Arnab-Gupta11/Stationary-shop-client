import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

const ProfileAvatar = () => {
  return (
    <div className="mt-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none hover:scale-105 active:scale-95 duration-700">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <div></div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          className="bg-primary-bg-light dark:bg-primary-bg-dark border-none shadow-md shadow-secondary-bg-light dark:shadow-secondary-bg-dark outline-none"
        >
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profileasdfgfdgfdggdgshghshhshs</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileAvatar;
