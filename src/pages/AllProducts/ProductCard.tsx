import { MdOutlineShoppingCart } from "react-icons/md";
import { IProduct } from "@/types/product.types";
import { formatPrice } from "@/utils/formatePrice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import toast from "react-hot-toast";
import StarRating from "../ProductDetails/StarRating";
import { addProductIntoCart, useCartItems } from "@/redux/features/cart/cartSlice";
import { RiHeartLine } from "react-icons/ri";
import { BiGitCompare } from "react-icons/bi";
import { LuEye } from "react-icons/lu";
import { addProductIntoCompareProductsList } from "@/redux/features/compareProducts/compareProductsSlice";
type TProductProp = {
  product: IProduct;
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
            brand: product.brand.name,
            inStock: product.quantity,
            image: product?.images[0],
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
          brand: product.brand.name,
          inStock: product.quantity,
          image: product?.images[0],
        })
      );
      toast.success("Item added to your cart successfully!");
    }
  };
  const price = formatPrice(product?.price);
  return (
    <Link to={`/products/slug/${product?.slug}`}>
      <div className="rounded-3xl bg-transparent border-2 border-light-card-border dark:border-dark-border hover:shadow-box-shadow-light dark:hover:shadow-box-shadow-dark cursor-pointer p-3 shadow-card-shadow duration-700 transition-shadow group">
        {/* Product Img  */}
        <div className="bg-light-muted-bg dark:bg-dark-muted-bg h-56 flex justify-center items-center relative rounded-2xl">
          <img
            src={product?.images[0]}
            alt="img1"
            className="w-full h-full object-fill group-hover:scale-105 transition-all duration-1000 rounded-2xl"
          />
          <span className="bg-primary border-2 border-[rgb(222,58,66)] text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
            {product?.inStock ? "In Stock" : "Out Of Stock"}
          </span>
          <div
            className={`flex items-center justify-center gap-3 absolute bottom-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-700 ${
              user?.role === "admin" && "hidden"
            }`}
          >
            <LuEye className="text-xl hover:scale-110 active:scale-95 hover:text-primary dark:hover:text-primary cursor-pointer transition-all duration-700 p-1 w-8 h-8 bg-white dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt rounded-md shadow-md  border-2 shadow-slate-400 dark:shadow-slate-400 border-light-border dark:border-dark-muted-border hover:border-primary dark:hover:border-primary" />

            <MdOutlineShoppingCart
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                addProductToCart();
              }}
              className="text-xl hover:scale-110 active:scale-95 hover:text-primary dark:hover:text-primary cursor-pointer transition-all duration-700 p-1 w-8 h-8 bg-white dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt rounded-md shadow-md  border-2 shadow-slate-400 dark:shadow-slate-400 border-light-border dark:border-dark-muted-border hover:border-primary dark:hover:border-primary"
            />
            <RiHeartLine className="text-xl hover:scale-110 active:scale-95 hover:text-primary dark:hover:text-primary cursor-pointer transition-all duration-700 p-1 w-8 h-8 bg-white dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt rounded-md shadow-md  border-2 shadow-slate-400 dark:shadow-slate-400 border-light-border dark:border-dark-muted-border hover:border-primary dark:hover:border-primary" />
            <BiGitCompare
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                dispatch(addProductIntoCompareProductsList(product));
              }}
              className="text-xl hover:scale-110 active:scale-95 hover:text-primary dark:hover:text-primary cursor-pointer transition-all duration-700 p-1 w-8 h-8 bg-white dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt rounded-md shadow-md  border-2 shadow-slate-400 dark:shadow-slate-400 border-light-border dark:border-dark-muted-border hover:border-primary dark:hover:border-primary"
            />
          </div>
        </div>
        {/* Product Info  */}
        <div className="pt-4 p-1 space-y-2">
          <StarRating rating={product?.rating} starSize={12} />
          <h1 className="text-base font-medium text-primary-text-light dark:text-dark-primary-txt truncate">{product?.name}</h1>
          <h4 className="font-bold text-gradient text-sm">{price}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
