import { useCartItems } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartIcon = () => {
  const cartItems = useAppSelector(useCartItems);
  const totalQuantity = cartItems?.length;
  return (
    <Link to={"/cart"}>
      <div className="relative">
        {/* Cart Icon */}
        <AiOutlineShoppingCart className="text-3xl text-primary-text-light hover:text-primary-bg transition hover:scale-105 ml-5" />

        {/* Product Count Badge */}
        {totalQuantity > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary-bg text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {totalQuantity}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
