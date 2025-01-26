import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="flex ">
      <div className="w-32 bg-red-600 h-screen">Sidebar</div>
      <div>
        <div className="h-16 bg-green-600">header</div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
