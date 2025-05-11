const ProductCardSkeleton = () => {
  return (
    <div className="rounded-3xl bg-transparent border-2 border-light-card-border dark:border-dark-border p-3 shadow-card-shadow">
      {/* Image Skeleton */}
      <div className="bg-light-muted-bg dark:bg-dark-muted-bg h-56 flex justify-center items-center relative rounded-2xl animate-pulse">
        <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-2xl" />
      </div>

      {/* Info Skeleton */}
      <div className="pt-4 p-1 space-y-2 animate-pulse">
        {/* Rating bar */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full"
            ></div>
          ))}
        </div>
        {/* Product name skeleton */}
        <div className="w-3/4 h-4 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        {/* Price skeleton */}
        <div className="w-1/4 h-4 bg-gray-300 dark:bg-gray-700 rounded-md"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
