import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import img1 from "../../../public/images/banner/banner1.png";
import { TProduct } from "@/types/product.types";
import { formatPrice } from "@/utils/formatePrice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addProductIntoCart, useCartItems } from "@/redux/features/auth/authSlice";
import toast from "react-hot-toast";
type TProductProp = {
  product: TProduct;
};
const ProductCard = ({ product }: TProductProp) => {
  const cartItems = useAppSelector(useCartItems);
  const dispatch = useAppDispatch();
  const addProductToCart = () => {
    if (cartItems.length > 0) {
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
        })
      );
      toast.success("Item added to your cart successfully!");
    }
  };
  const price = formatPrice(product?.price);
  return (
    <div className="rounded-lg group product-card hover:shadow-md">
      <div className="bg-[#f8fafa] h-72 flex justify-center items-center relative  px-10 rounded-t-lg">
        <img src={img1} alt="img1" className="object-contain h-full group-hover:scale-110 transition-all duration-1000" />
        <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
          {product?.inStock ? "In Stock" : "Out Of Stock"}
        </span>
        <div className="flex flex-col items-center justify-center gap-3 absolute right-1 bottom-1 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
          <MdOutlineShoppingCart
            onClick={addProductToCart}
            className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8"
          />
          <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
        </div>
      </div>
      <div className="p-2.5">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-600 text-sm">{product?.brand}</span>
        </div>
        <h1 className="text-lg font-semibold text-slate-800">{product?.name}</h1>
        <div className="flex items-start justify-between mt-2">
          <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">{price}</h4>
          <Link to={`/products/${product?._id}`}>
            <Button className="group flex items-center gap-1 py-1 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-1 transition-all duration-700">
              <span>View</span>
              <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
