import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(({ className, ...props }, ref) => {
  return (
    <div className="h-40 bg-slate-50 dark:bg-dark-muted-bg rounded-2xl overflow-hidden border-2 border-slate-100 dark:border-gray-950">
      <textarea
        ref={ref}
        className={cn(
          "h-40 w-full rounded-2xl resize-none  bg-slate-50 dark:bg-dark-muted-bg px-3 py-2 text-sm text-light-secondary-text dark:text-dark-secondary-txt placeholder:text-muted-foreground shadow-sm focus-visible:outline-none focus-visible:ring-0  disabled:cursor-not-allowed disabled:opacity-50 font-Exo font-medium  overflow-y-auto custom-scrollbar",
          className
        )}
        {...props}
      />
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
