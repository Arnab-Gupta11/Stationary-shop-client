import Loader from "@/components/shared/Loader";
import Section from "@/components/shared/Section";
import { useGetProductDetailsQuery } from "@/redux/features/product/product.api";
import { useParams } from "react-router-dom";
import { TProduct } from "@/types/product.types";
import { formatPrice } from "@/utils/formatePrice";
import { Heart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addProductIntoCart, useCartItems } from "@/redux/features/auth/authSlice";
import Review from "./Review";
import StarRating from "./StarRating";
const ProductDetails = () => {
  const cartItems = useAppSelector(useCartItems);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [productQuantity, setProductQuantity] = useState(1);
  const { data: productData, isLoading } = useGetProductDetailsQuery({ id });

  if (isLoading) {
    return <Loader />;
  }
  const { _id, brand, category, description, inStock, name, price, quantity, image, rating, totalReviews } = productData?.data as TProduct;

  const handleReduceQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity((prev) => prev - 1);
    }
  };
  const handleIncreaseQuantity = () => {
    if (productQuantity >= quantity) {
      toast.error(`We apologize, but only ${quantity} items are currently in stock.`);
    } else {
      setProductQuantity((prev) => prev + 1);
    }
  };
  const addProductToCart = () => {
    if (!inStock) {
      toast.error(`This item is out of stock. Check back soon or explore similar products!`);
    } else if (cartItems.length > 0) {
      const existingItem = cartItems.find((item) => item.product === _id);
      if (!existingItem) {
        dispatch(addProductIntoCart({ product: _id, quantity: productQuantity, price, productName: name, brand, inStock: quantity, image }));
        toast.success("Item added to your cart successfully!");
      } else {
        toast.error("This Item is already in the cart.");
      }
    } else {
      dispatch(addProductIntoCart({ product: _id, quantity: productQuantity, price, productName: name, brand, inStock: quantity, image }));
      toast.success("Item added to your cart successfully!");
    }
  };

  return (
    <div className="mb-20">
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
          <div className="bg-[#F7F7F7] rounded-t-lg h-[450px] flex justify-center rounded-lg">
            <img src={image} alt={name} className="h-full" />
          </div>
          <div>
            <div>
              {inStock ? (
                <span className="bg-[#e8fbe6] text-green-900 px-2 py-0.5 text-sm font-semibold rounded-md">In Stock</span>
              ) : (
                <span className="bg-[#FBE6EC] text-primary-bg px-2 py-0.5 text-sm font-semibold rounded-md">Out of Stock</span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mt-2">{name}</h1>
            <div className="flex items-center gap-2 flex-wrap mt-1">
              <StarRating rating={rating} starSize={15}/>
              <span className="text-sm text-slate-600">({totalReviews} customer reviews)</span>
            </div>
            <p className="text-xl font-semibold text-primary-bg mt-3">{formatPrice(price)}</p>
            <p className="text-slate-700 mt-5">{description}</p>
            <h4 className="text-slate-700 mt-2">
              <span className="font-semibold text-slate-800">Categorie:</span> {category}
            </h4>
            <h4 className="text-slate-700 mt-1">
              <span className="font-semibold text-slate-800">Brand:</span> {brand}
            </h4>
            <div className="border-t-2 border-[#f1f1f1] mt-5" />
            <div className="mt-5 flex flex-col xsm:flex-row items-center gap-4">
              <div className="flex w-full xsm:w-36 border-[2px] items-center justify-around py-3 text-xl border-[#e5e5e5] rounded-lg">
                <Minus className="hover:scale-105 active:scale-95 duration-700 hover:cursor-pointer text-slate-700" onClick={handleReduceQuantity} />
                <span className="font-medium text-slate-800 select-none">{productQuantity}</span>
                <Plus className="hover:scale-105 active:scale-95 duration-700 hover:cursor-pointer text-slate-700" onClick={handleIncreaseQuantity} />
              </div>
              <div className="flex items-center gap-4 w-full">
                <Button className="flex xsm-mx:w-full items-center justify-center gap-3 py-7 rounded-lg select-none" onClick={addProductToCart}>
                  <MdOutlineShoppingCart />
                  <span>Add To Cart</span>
                </Button>
                <Button className="py-7 rounded-lg group  bg-none border-[#e5e5e5] border-[2px] hover:bg-none hover:border-primary-bg duration-700 ">
                  <Heart size={234} className="text-[#d1c6c6] font-bold text-2xl group-hover:text-primary-bg duration-700" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Review totalRating={rating} totalReviews={totalReviews} />
      </Section>
    </div>
  );
};

export default ProductDetails;
