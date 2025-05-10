import { useGetTopRatedProductsQuery } from "@/redux/features/product/product.api";
import { IProduct } from "@/types/product.types";
import TrendingCard from "./TrendingCard";
import TrendingCardSkeleton from "@/components/shared/loader/TrendingCardSekelonLoader";

const TopRated = () => {
  const { data: topRatedProducts, isLoading } = useGetTopRatedProductsQuery(undefined);
  return (
    <div className="w-full sm:w-1/2 border-2 border-light-border dark:border-dark-border shadow-box-shadow-light dark:shadow-box-shadow-dark p-3 sm:p-5 rounded-3xl">
      <h1 className="text-lg font-semibold text-light-primary-text dark:text-dark-primary-txt mb-4 ml-1">Top Rated</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {isLoading && [1, 2, 3, 4, 5, 6].map((item) => <TrendingCardSkeleton key={item} />)}
        {!isLoading && topRatedProducts?.data?.map((product: IProduct) => <TrendingCard key={product._id} product={product} />)}
      </div>
    </div>
  );
};

export default TopRated;
