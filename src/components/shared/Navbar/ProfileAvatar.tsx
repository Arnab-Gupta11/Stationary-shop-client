import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileAvatar = () => {
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
    <div className="ml-5">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none hover:scale-105 active:scale-95 duration-700">
          <Avatar className="border border-[#f1f1f1]">
            <AvatarImage src={user ? user?.profilePicture : "https://github.com/shadcn.png"} alt="@shadcn" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom"
          className="bg-primary-bg-light dark:bg-primary-bg-dark border-none shadow-md shadow-secondary-bg-light dark:shadow-secondary-bg-dark outline-none"
        >
          <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>

          <DropdownMenuItem>{user?.userEmail}</DropdownMenuItem>
          <DropdownMenuItem>
            <Button onClick={handleLogout} variant={"outline"} className="w-full border-primary-text text-primary-bg flex items-center gap-2">
              <LogOut size={8} />
              <span className="text-base">Logout</span>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileAvatar;
