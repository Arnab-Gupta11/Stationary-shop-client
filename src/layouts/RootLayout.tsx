import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div className="" />
      <Navbar />
      <div className="max-w-[90%] mx-auto bg-green-500">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
