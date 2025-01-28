import { Button } from "@/components/ui/button";
import { FaRegHeart } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";
import img1 from "../../../public/images/banner/banner1.png";
import { TProduct } from "@/types/product.types";
import { formatPrice } from "@/utils/formatePrice";
type TProductProp = {
  product: TProduct;
};
const ProductCard = ({ product }: TProductProp) => {
  const price = formatPrice(product?.price);
  return (
    <div className="rounded-lg group product-card hover:shadow-md">
      <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative  px-10 rounded-t-lg">
        <img src={img1} alt="img1" className="object-contain h-full group-hover:scale-110 transition-all duration-1000" />
        <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
          {product?.inStock ? "In Stock" : "Out Of Stock"}
        </span>
        <div className="flex flex-col items-center justify-center gap-3 absolute right-1 bottom-1 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
          <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
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
          <Button className="group flex items-center gap-1 py-1 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-1 transition-all duration-700">
            <span>View</span>
            <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
