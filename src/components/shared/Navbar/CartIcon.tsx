import { useCartItems } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const cartItems = useAppSelector(useCartItems);
  const totalQuantity = cartItems?.length;
  return (
    <Link to={"/cart"}>
      <div className="relative">
        {/* Cart Icon */}
        <button className="rounded-xl border-2 border-slate-100 dark:border-gray-900 flex items-center justify-center h-9 w-9">
          <MdOutlineShoppingCart className="text-xl text-light-primary-text dark:text-dark-primary-txt hover:text-primary dark:hover:text-primary transition hover:scale-105" />
        </button>

        {/* Product Count Badge */}
        {totalQuantity > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {totalQuantity}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
