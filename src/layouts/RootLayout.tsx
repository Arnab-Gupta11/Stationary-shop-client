import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div className="bg-grid-light grid-background-light  dark:bg-black" />
      <div className="max-w-screen-xl mx-auto z-50">
        <span>Navbar</span>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
