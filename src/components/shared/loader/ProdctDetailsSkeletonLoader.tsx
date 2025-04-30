import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailsSkeletonLoader = () => {
  return (
    <div className="mb-20">
      <div className="container mx-auto px-4 pt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Gallery Skeleton */}
        <div>
          {/* Main Image */}
          <Skeleton className="w-full h-[300px] xs:h-[380px] sm:h-[500px] lg:h-[400px] xl:h-[500px] rounded-3xl rounded-b-none" />

          {/* Thumbnail Images */}
          <div className="grid grid-cols-4 gap-2.5 mt-2 rounded-3xl px-3 pb-3">
            {[1, 2, 3, 4].map((_, idx) => (
              <Skeleton key={idx} className="h-12 xsm:h-16 xs:h-20 sm:h-28 w-full rounded-xl" />
            ))}
          </div>
        </div>

        {/* Product Info Skeleton */}
        <div>
          <Skeleton className="h-6 w-24 rounded-md mb-3" />
          <Skeleton className="h-8 w-3/4 rounded-md mb-3" />
          <Skeleton className="h-4 w-1/2 rounded mb-2" />
          <Skeleton className="h-4 w-28 mb-5" />
          <Skeleton className="h-20 w-full rounded-md mb-4" />

          <Skeleton className="h-4 w-1/3 rounded-md mb-2" />
          <Skeleton className="h-4 w-1/4 rounded-md mb-2" />

          {/* Accordion Items */}
          <div className="mt-5 space-y-4">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />

            <Skeleton className="h-5 w-40 mt-5" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
          </div>

          {/* Quantity and Cart Buttons */}
          <div className="mt-8 flex flex-col xsm:flex-row gap-4 items-center">
            <Skeleton className="h-12 w-36 rounded-xl" />
            <Skeleton className="h-12 w-full xsm:w-52 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeletonLoader;
