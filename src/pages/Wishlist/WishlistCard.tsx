import { Button } from "@/components/ui/button";
import { removeFromWishlist } from "@/redux/features/wishlist/wishlistSlice";
import { useAppDispatch } from "@/redux/hooks";
import { IProduct } from "@/types/product.types";
import { formatPrice } from "@/utils/formatePrice";
import React from "react";
import toast from "react-hot-toast";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const WishlistCard = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();
  const handleRemoveProductFromWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeFromWishlist(product?._id));
    toast.success("Product Removed From Wishlist.");
  };
  return (
    <Link to={`/products/slug/${product?.slug}`}>
      <div className="flex flex-col items-center cursor-pointer group">
        <img
          src={product?.images[0]} // Replace with your actual image
          alt={product?.name}
          className="h-80 w-full object-fill bg-light-muted-bg dark:bg-dark-muted-bg p-3 rounded-3xl group-hover:brightness-75 duration-700"
        />
        <h3 className="text-base font-medium text-light-primary-text dark:text-dark-primary-txt mt-2">{product?.name}</h3>
        <p className="text-gradient font-semibold mt-1">{formatPrice(product?.price)}</p>
        <Button onClick={handleRemoveProductFromWishlist} variant={"primary"} className="w-full mt-3 flex items-center gap-2">
          <MdOutlineDeleteOutline />
          <span className="mt-[2px]">Remove Form Wishlist</span>
        </Button>
      </div>
    </Link>
  );
};

export default WishlistCard;
