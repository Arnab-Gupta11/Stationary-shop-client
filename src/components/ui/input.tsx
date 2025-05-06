import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12  w-full rounded-2xl focus:border  border-2 border-slate-100 dark:border-dark-muted-border bg-transparent px-3 py-1.5 bg-slate-50 dark:bg-dark-muted-bg text-light-secondary-text dark:text-dark-secondary-txt transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm font-Exo font-medium focus-visible:shadow-md dark:focus-visible:shadow-dark-primary-bg",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
