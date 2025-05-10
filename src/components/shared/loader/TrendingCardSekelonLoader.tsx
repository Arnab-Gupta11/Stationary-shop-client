import { Skeleton } from "@/components/ui/skeleton";

const TrendingCardSkeleton = () => {
  return (
    <div className="flex flex-row items-center gap-3 xsm:gap-3 border-2 border-light-card-border dark:border-dark-border rounded-3xl p-2 shadow-box-shadow">
      {/* Image Skeleton */}
      <div className="shrink-0 bg-light-muted-bg dark:bg-dark-muted-bg rounded-3xl h-16 w-16 sm:h-24 sm:w-24 flex items-center justify-center">
        <Skeleton className="h-14 w-14 sm:h-20 sm:w-20 rounded-3xl" />
      </div>

      {/* Content Skeleton */}
      <div className="flex flex-col justify-center flex-1 space-y-2">
        <Skeleton className="h-4 w-full rounded" />
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <Skeleton key={idx} className="h-3 w-3 rounded" />
          ))}
        </div>
        <Skeleton className="h-4 w-16 sm:w-20 rounded" />
      </div>
    </div>
  );
};

export default TrendingCardSkeleton;
