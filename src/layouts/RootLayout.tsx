import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div className="" />
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
