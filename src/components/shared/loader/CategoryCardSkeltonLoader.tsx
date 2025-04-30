import { Skeleton } from "@/components/ui/skeleton";

const CategoryCardSkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col h-full items-center justify-between rounded-3xl p-4 bg-transparent border-2 border-light-border dark:border-dark-border w-full min-h-[180px]"
        >
          <Skeleton className="rounded-3xl w-full h-32" />
          <Skeleton className="w-24 h-5 mt-3" />
        </div>
      ))}
    </div>
  );
};

export default CategoryCardSkeletonLoader;
