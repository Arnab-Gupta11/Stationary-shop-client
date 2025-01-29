import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(useCurrentUser);
  const location = useLocation();

  if (user && user.role === "admin") {
    return children;
  }
  return <Navigate state={location.pathname} to={"/"}></Navigate>;
};

export default AdminRoute;
