import StarRating from "@/pages/ProductDetails/StarRating";
import { IProduct } from "@/types/product.types";
import { formatPrice } from "@/utils/formatePrice";
import { Link } from "react-router-dom";

const TrendingCard = ({ product }: { product: IProduct }) => {
  return (
    <Link to={`/products/slug/${product?.slug}`}>
      <div
        key={product._id}
        className="flex flex-row items-center  gap-3 xsm:gap-3 border-2 border-light-card-border dark:border-dark-border rounded-3xl p-2 shadow-box-shadow hover:shadow-dashboard-page-shadow-light hover:dark:shadow-dashboard-page-shadow-dark hover:scale-105 duration-700"
      >
        <div className="shrink-0 bg-light-muted-bg dark:bg-dark-muted-bg rounded-3xl h-16 w-16 sm:h-24 sm:w-24 flex items-center justify-center">
          <img className="h-14 w-14 sm:h-20 sm:w-20 rounded-3xl object-cover" src={product.images[0]} alt="Product image" />
        </div>
        <div>
          <h2 className="text-xs sm:text-sm font-semibold mt-2 text-light-primary-text dark:text-dark-primary-txt mb-1 text-ellipsis">
            {product.name}
          </h2>
          <StarRating rating={product?.rating} starSize={10} />
          <p className="text-xs sm:text-sm font-bold text-gradient mt-2">{formatPrice(product.price)}</p>
        </div>
      </div>
    </Link>
  );
};

export default TrendingCard;
