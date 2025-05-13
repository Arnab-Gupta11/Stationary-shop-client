import React from "react";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, subtitle, action }) => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
      <div className="text-slate-500 flex flex-col items-center justify-center px-4 gap-4 text-center">
        <div className="text-rose-400">{icon}</div>
        <h2 className="font-semibold text-lg sm:text-2xl">{title}</h2>
        {subtitle && <p className="text-sm sm:text-base text-slate-400 max-w-md">{subtitle}</p>}
        {action && <div className="mt-2">{action}</div>}
      </div>
    </div>
  );
};

export default EmptyState;
