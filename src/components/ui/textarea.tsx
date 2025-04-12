import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(({ className, ...props }, ref) => {
  return (
    <div className="rounded-2xl overflow-hidden ">
      <textarea
        ref={ref}
        className={cn(
          "h-40 w-full rounded-xl resize-none border-2 border-slate-100 dark:border-gray-950 bg-slate-50 dark:bg-dark-muted-bg px-3 py-1.5 text-sm md:text-sm font-Exo font-medium text-light-secondary-text dark:text-dark-secondary-txt placeholder:text-muted-foreground shadow-sm focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-md dark:focus-visible:shadow-dark-primary-bg disabled:cursor-not-allowed disabled:opacity-50 overflow-y-auto",
          className
        )}
        {...props}
      />
    </div>
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
