import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-[#e9eefc] dark:bg-[#121624]", className)} {...props} />;
}

export { Skeleton };
