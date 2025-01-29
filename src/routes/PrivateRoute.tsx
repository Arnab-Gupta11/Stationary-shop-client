import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const user = useAppSelector(useCurrentUser);
  const location = useLocation();

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
