import { totalCompareProductItemsSelector } from "@/redux/features/compareProducts/compareProductsSlice";
import { useAppSelector } from "@/redux/hooks";
import { BiGitCompare } from "react-icons/bi";
import { Link } from "react-router-dom";

const CompareProductIcon = () => {
  const totalQuantity = useAppSelector(totalCompareProductItemsSelector);
  return (
    <div className="relative">
      <Link to={"/compare-products"}>
        <span className="rounded-xl border-2 border-slate-100 dark:border-gray-900 flex items-center justify-center h-9 w-9">
          <BiGitCompare className="text-xl text-light-primary-text dark:text-dark-primary-txt hover:text-primary dark:hover:text-primary transition hover:scale-105 cursor-pointer " />
        </span>
      </Link>
      {/* Product Count Badge */}
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {totalQuantity}
        </span>
      )}
    </div>
  );
};

export default CompareProductIcon;
