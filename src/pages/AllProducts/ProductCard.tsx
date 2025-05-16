/* eslint-disable react-hooks/exhaustive-deps */
import { MdOutlineShoppingCart } from "react-icons/md";
import { IProduct } from "@/types/product.types";
import { formatPrice } from "@/utils/formatePrice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import toast from "react-hot-toast";
import StarRating from "../ProductDetails/StarRating";
import { addProductIntoCart, useCartItems } from "@/redux/features/cart/cartSlice";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { BiGitCompare } from "react-icons/bi";
import { addProductIntoCompareProductsList, compareProductSelector } from "@/redux/features/compareProducts/compareProductsSlice";
import { addToWishlist, removeFromWishlist, wishlistSelector } from "@/redux/features/wishlist/wishlistSlice";
import { useEffect, useState } from "react";
import CustomTooltip from "@/components/shared/CustomTooltip";
import { LuEye } from "react-icons/lu";
import QuickViewModal from "./QuickView/QuickViewModal";
type TProductProp = {
  product: IProduct;
};
const ProductCard = ({ product }: TProductProp) => {
  const cartItems = useAppSelector(useCartItems);
  const compareItems = useAppSelector(compareProductSelector);
  const wishlistItems = useAppSelector(wishlistSelector);
  const [isProductExistInWishlist, setIsProductExistInWishlist] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
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
  const addCompareProduct = () => {
    const isProductExist = compareItems.find((item) => product._id === item._id);
    if (isProductExist) {
      toast.error("This product is already in your comparison list.");
      return;
    }
    if (compareItems.length < 5) {
      dispatch(addProductIntoCompareProductsList(product));
      toast.success("Product added to your comparison list.");
    } else {
      toast.error("You can only compare up to 5 products at a time.");
    }
  };
  useEffect(() => {
    const isProductExistInWishlist = wishlistItems.find((item) => item._id === product._id);
    if (isProductExistInWishlist) {
      setIsProductExistInWishlist(true);
    } else {
      setIsProductExistInWishlist(false);
    }
  }, [wishlistItems]);

  const addRemoveFromWishlist = () => {
    if (isProductExistInWishlist) {
      dispatch(removeFromWishlist(product._id));
      toast.success("Product Removed from your wishlist.");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Product added to your wishlist.");
    }
  };
  const price = formatPrice(product?.price);
  const Icon = user?.role === "admin" ? RiHeartLine : isProductExistInWishlist ? RiHeartFill : RiHeartLine;
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
            className={`flex items-center justify-center gap-3 absolute bottom-5 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-700`}
          >
            {/* Quick view  */}
            <CustomTooltip tooltip="Quick View">
              <LuEye
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setOpen(true);
                }}
                className="text-xl hover:scale-110 active:scale-95 hover:text-primary dark:hover:text-primary cursor-pointer transition-all duration-700 p-1 w-8 h-8 bg-white dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt rounded-md shadow-md  border-2 shadow-slate-400 dark:shadow-slate-400 border-light-border dark:border-dark-muted-border hover:border-primary dark:hover:border-primary"
              />
            </CustomTooltip>

            {/* Cart  */}
            <CustomTooltip tooltip="Add to cart">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  addProductToCart();
                }}
                className={`text-xl transition-all duration-700 p-1 w-8 h-8 bg-white dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt rounded-md shadow-md  border-2 shadow-slate-400 dark:shadow-slate-400 border-light-border dark:border-dark-muted-border ${
                  user?.role === "admin"
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100 hover:scale-110 active:scale-95 hover:text-primary dark:hover:text-primary dark:hover:border-primary hover:border-primary cursor-pointer "
                }`}
              >
                <MdOutlineShoppingCart />
              </button>
            </CustomTooltip>
            {/* Whishlist  */}
            <CustomTooltip tooltip={isProductExistInWishlist ? "Remove from wishlist" : "Add to wislist"}>
              <button
                disabled={user?.role === "admin"}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  addRemoveFromWishlist();
                }}
                className={`text-xl  transition-all duration-700 p-1 w-8 h-8 bg-white dark:bg-dark-muted-bg  rounded-md shadow-md  border-2 shadow-slate-400 dark:shadow-slate-400 border-light-border dark:border-dark-muted-border ${
                  isProductExistInWishlist ? "text-red-600 " : "text-light-primary-text dark:text-dark-primary-txt"
                }
                ${
                  user?.role === "admin"
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-100 hover:scale-110 active:scale-95 hover:text-primary dark:hover:text-primary dark:hover:border-primary hover:border-primary cursor-pointer "
                }
                `}
              >
                <Icon />
              </button>
            </CustomTooltip>
            {/* Compare Product  */}
            <CustomTooltip tooltip="Add to compare">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  addCompareProduct();
                }}
                className="text-xl hover:scale-110 active:scale-95 hover:text-primary dark:hover:text-primary cursor-pointer transition-all duration-700 p-1 w-8 h-8 bg-white dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt rounded-md shadow-md  border-2 shadow-slate-400 dark:shadow-slate-400 border-light-border dark:border-dark-muted-border hover:border-primary dark:hover:border-primary"
              >
                <BiGitCompare />
              </button>
            </CustomTooltip>
          </div>
        </div>
        <QuickViewModal images={product?.images} open={open} setOpen={setOpen} />
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
