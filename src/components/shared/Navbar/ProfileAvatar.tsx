import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Heart, LayoutDashboard, LogIn, LogOut, UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
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
    <div className="font-medium">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {user ? (
            <Avatar className=" cursor-pointer ml-4 flex items-center justify-center border-4 border-light-border dark:border-gray-800">
              <AvatarImage src={user ? user?.profilePicture : "https://github.com/shadcn.png"} alt="@shadcn" />
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
          ) : (
            <span>
              <CgProfile className="text-3xl text-primary-text-light hover:text-primary-bg transition hover:scale-105 ml-5 cursor-pointer" />
            </span>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 bg-white">
          <DropdownMenuLabel>{user ? <span>{user?.name}</span> : "My Account"}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {!user && (
              <>
                <Link to={"/login"}>
                  <DropdownMenuItem className="cursor-pointer flex items-center hover:text-primary-bg text-primary-text-light">
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </DropdownMenuItem>
                </Link>

                <Link to={"/register"}>
                  <DropdownMenuItem className="cursor-pointer flex items-center hover:text-primary-bg text-primary-text-light ">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Register
                  </DropdownMenuItem>
                </Link>
              </>
            )}
            {user && (
              <Link to={user?.role === "admin" ? "/dashboard/manage-products" : "/dashboard/view-orders"}>
                <DropdownMenuItem className="cursor-pointer flex items-center hover:text-primary-bg text-primary-text-light">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </DropdownMenuItem>
              </Link>
            )}
            <DropdownMenuItem className="cursor-pointer flex items-center hover:text-primary-bg text-primary-text-light">
              <Heart className="w-4 h-4 mr-2" />
              Wishlist
            </DropdownMenuItem>
          </DropdownMenuGroup>
          {user && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer flex items-center hover:text-primary-bg text-primary-text-light" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2 text-red-500" />
                Log out
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileAvatar;
