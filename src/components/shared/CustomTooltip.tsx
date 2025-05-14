import { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

type TCustomTooltip = {
  children: ReactNode;
  tooltip: string;
};

const CustomTooltip: React.FC<TCustomTooltip> = ({ children, tooltip }) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{children}</TooltipTrigger>
          <TooltipContent className="rounded-md bg-light-secondary-bg dark:bg-dark-secondary-bg text-light-primary-text dark:text-dark-primary-txt text-[11px] font-semibold font-Exo border-2 shadow-slate-400 dark:shadow-slate-400 border-light-border dark:border-dark-muted-border py-0.5 px-1">
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default CustomTooltip;
