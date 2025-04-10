import { ReactNode } from "react";

const DashboardPageSection = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen rounded-3xl p-1 sm:p-5 bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-dashboard-page-shadow-light dark:shadow-dashboard-page-shadow-dark">
      {children}
    </div>
  );
};

export default DashboardPageSection;
