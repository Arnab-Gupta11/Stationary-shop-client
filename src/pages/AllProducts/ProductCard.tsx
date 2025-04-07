import { MdOutlineShoppingCart } from "react-icons/md";
import { TProduct } from "@/types/product.types";
import { formatPrice } from "@/utils/formatePrice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addProductIntoCart, useCartItems, useCurrentUser } from "@/redux/features/auth/authSlice";
import toast from "react-hot-toast";
import StarRating from "../ProductDetails/StarRating";
type TProductProp = {
  product: TProduct;
};
const ProductCard = ({ product }: TProductProp) => {
  const cartItems = useAppSelector(useCartItems);
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser);
  const addProductToCart = () => {
    if (!product?.inStock) {
      toast.error(`This item is out of stock. Check back soon or explore similar products!`);
    } else if (cartItems.length > 0) {
      const existingItem = cartItems.find((item) => item.product === product._id);
      if (!existingItem) {
        dispatch(
          addProductIntoCart({
            product: product._id,
            quantity: 1,
            price: product.price,
            productName: product.name,
            brand: product.brand,
            inStock: product.quantity,
            image: product?.image,
          })
        );
        toast.success("Item added to your cart successfully!");
      } else {
        toast.error("This Item is already in the cart.");
      }
    } else {
      dispatch(
        addProductIntoCart({
          product: product._id,
          quantity: 1,
          price: product.price,
          productName: product.name,
          brand: product.brand,
          inStock: product.quantity,
          image: product?.image,
        })
      );
      toast.success("Item added to your cart successfully!");
    }
  };
  const price = formatPrice(product?.price);
  return (
    <Link to={`/products/${product?._id}`}>
      <div className="rounded-3xl bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-light-border dark:border-dark-border shadow-card-shadow dark:shadow-none hover:shadow-box-shadow-light dark:hover:shadow-box-shadow-dark cursor-pointer p-3">
        <div className="bg-light-muted-bg dark:bg-dark-muted-bg h-56 flex justify-center items-center relative rounded-2xl">
          <img src={product?.image} alt="img1" className="h-[90%] object-contain group-hover:scale-105 transition-all duration-1000" />
          <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
            {product?.inStock ? "In Stock" : "Out Of Stock"}
          </span>
          <div
            className={`flex flex-col items-center justify-center gap-3 absolute right-1 bottom-1 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700 ${
              user?.role === "admin" && "hidden"
            }`}
          >
            <MdOutlineShoppingCart
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                addProductToCart();
              }}
              className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 p-1 w-8 h-8 bg-white rounded-md shadow-md"
            />
            {/* <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 p-1 w-8 h-8 bg-white rounded-md shadow-md" /> */}
          </div>
        </div>
        <div className="pt-4 p-1 space-y-2">
          <StarRating rating={product?.rating} starSize={12} />
          <h1 className="text-lg font-medium text-primary-text-light dark:text-dark-primary-txt truncate">{product?.name}</h1>
          <h4 className="font-bold text-primary">{price}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
