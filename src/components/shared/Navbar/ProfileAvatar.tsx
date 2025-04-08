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
              <CgProfile className="text-3xl text-light-primary-text dark:text-dark-primary-txt hover:text-primary dark:hover:text-primary transition hover:scale-105 ml-5 cursor-pointer" />
            </span>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="min-w-44 bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-light-border dark:border-dark-border text-light-primary-text dark:text-dark-primary-txt dark:shadow-box-shadow-dark font-medium font-Exo rounded-2xl mt-3 p-2"
        >
          <DropdownMenuLabel>
            {user ? (
              <div className="flex items-center gap-2 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user?.profilePicture} alt={user?.name} />
                  <AvatarFallback className="rounded-lg">DP</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-light-primary-text dark:text-dark-primary-txt">{user?.name}</span>
                  <span className="truncate text-xs font-medium text-light-secondary-text dark:text-dark-secondary-txt">{user?.userEmail}</span>
                </div>
              </div>
            ) : (
              "My Account"
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="space-y-1.5">
            {!user && (
              <>
                <Link to={"/login"}>
                  <DropdownMenuItem className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3">
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </DropdownMenuItem>
                </Link>

                <Link to={"/register"}>
                  <DropdownMenuItem className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Register
                  </DropdownMenuItem>
                </Link>
              </>
            )}
            {user && (
              <Link to={user?.role === "admin" ? "/dashboard/manage-products" : "/dashboard/view-orders"}>
                <DropdownMenuItem className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </DropdownMenuItem>
              </Link>
            )}
            {user && user.role === "user" && (
              <DropdownMenuItem className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3">
                <Heart className="w-4 h-4 mr-2" />
                Wishlist
              </DropdownMenuItem>
            )}
          </DropdownMenuGroup>
          {user && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3"
                onClick={handleLogout}
              >
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
