import { useGetTopSellingProductsQuery } from "@/redux/features/product/product.api";
import TrendingCard from "./TrendingCard";
import { IProduct } from "@/types/product.types";
import TrendingCardSkeleton from "@/components/shared/loader/TrendingCardSekelonLoader";

const BestSellings = () => {
  const { data: topSellingProducts, isLoading} = useGetTopSellingProductsQuery(undefined);
  console.log(topSellingProducts);
  return (
    <div className="w-full sm:w-1/2 border-2 border-light-border dark:border-dark-border shadow-box-shadow-light dark:shadow-box-shadow-dark p-3 sm:p-5 rounded-3xl">
      <h1 className="text-lg font-semibold text-light-primary-text dark:text-dark-primary-txt mb-4 ml-1">Best Sellings</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {isLoading && [1, 2, 3, 4, 5, 6].map((item) => <TrendingCardSkeleton key={item} />)}
        {!isLoading && topSellingProducts?.data?.map((product: IProduct) => <TrendingCard key={product._id} product={product} />)}
      </div>
    </div>
  );
};

export default BestSellings;
