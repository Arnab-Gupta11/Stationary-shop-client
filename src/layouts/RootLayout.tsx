import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div className="bg-grid-light grid-background-light  dark:bg-black" />
      <div className="max-w-screen-xl mx-auto z-50">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
