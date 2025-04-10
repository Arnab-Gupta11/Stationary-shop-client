import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar/app-sidebar";
import { Outlet } from "react-router-dom";
import { ThemeToggler } from "@/components/shared/ThemeToggler";
import useScrollTrigger from "@/hooks/useScrollTrigger";

const DashboardLayout = () => {
  const { scrolled } = useScrollTrigger();
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-light-secondary-bg dark:bg-dark-secondary-bg">
          <header
            className={`flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 bg-light-secondary-bg dark:bg-dark-secondary-bg z-10 ${
              scrolled &&
              "shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_4px_-1px_rgba(0,0,0,0.5)] rounded-b-3xl mx-2 border-bottom-2 border-light-border dark:border-dark-border"
            }`}
          >
            <div className="flex items-center gap-2 px-4 ">
              <SidebarTrigger className="-ml-1 text-light-primary-text dark:text-dark-primary-txt" />
              <ThemeToggler />
            </div>
          </header>
          <div className="p-2 z-0">
            <div className="sm:p-5 bg-slate-50 dark:bg-dark-primary-bg rounded-3xl shadow-inner shadow-slate-200 dark:shadow-black border-2 border-light-border dark:border-dark-border min-h-screen ">
              <Outlet />
            </div>
          </div>
          <footer className="w-full px-4 py-3 text-sm text-gray-600 dark:text-gray-400 text-center">© 2025 Notefy. All rights reserved.</footer>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
