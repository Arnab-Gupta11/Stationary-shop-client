import { Skeleton } from "@/components/ui/skeleton";

const ReviewCardSkeleton = () => {
  return (
    <div className="p-4 rounded-lg w-full">
      <div className="flex items-start gap-4 w-full">
        {/* Avatar Skeleton */}
        <Skeleton className="w-16 h-16 rounded-full" />

        <div className="flex-1 space-y-4">
          {/* Header (Name + Rating) */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-32 rounded" />
              <Skeleton className="h-3 w-20 rounded" />
            </div>

            {/* Star Rating Skeleton */}
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((_, idx) => (
                <Skeleton key={idx} className="h-4 w-4 rounded" />
              ))}
            </div>
          </div>

          {/* Review Text Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-3 w-full rounded" />
            <Skeleton className="h-3 w-4/5 rounded" />
            <Skeleton className="h-3 w-3/4 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardSkeleton;
