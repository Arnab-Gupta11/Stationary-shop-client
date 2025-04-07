import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar/app-sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout1 = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 bg-">
            <div className="flex items-center gap-2 px-4 ">
              <SidebarTrigger className="-ml-1 " />
            </div>
          </header>
          <div className="p-4 pt-0 min-h-screen">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout1;
