import { Button } from "@/components/ui/button";
import img from "../../../public/images/banner/banner1.png";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useSelector } from "react-redux";
import {
  getTotalPrice,
  getTotalQuantity,
  increaseProductQuantity,
  reduceProductQuantity,
  removeProductFromCart,
  TCartItem,
  useCartItems,
} from "@/redux/features/auth/authSlice";
import { MdDelete, MdProductionQuantityLimits } from "react-icons/md";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import Section from "@/components/shared/Section";
import { formatPrice } from "@/utils/formatePrice";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/hooks";
const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useSelector(useCartItems);
  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);
  const handleDecreaseQuantity = ({ product }: { product: string }) => {
    dispatch(reduceProductQuantity({ product, quantity: 1 }));
  };
  const handleIncreaseQuantity = ({ product, quantity, inStock }: { product: string; quantity: number; inStock: number }) => {
    if (quantity >= inStock) {
      toast.error(`We apologize, but only ${quantity} items are currently in stock.`);
    } else {
      dispatch(increaseProductQuantity({ product, quantity: 1 }));
    }
  };
  const handleProductRemove = (product: string) => {
    dispatch(removeProductFromCart({ product }));
  };
  return (
    <div>
      <div className="h-40  bg-secondary-bg-light flex items-center justify-center my-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">Shopping Cart</h1>
          <div className="flex justify-center mt-3">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Cart</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <Section>
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl"></h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cartItems?.length > 0 ? (
                  cartItems?.map((item: TCartItem) => {
                    return (
                      <div
                        key={item.product}
                        className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6 xsm-mx:flex xsm-mx:items-center xsm-mx:justify-center"
                      >
                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                          <div className="shrink-0 md:order-1 bg-[#F7F7F7] rounded-lg h-24 w-24 flex items-center justify-center">
                            <img className="h-20 w-20" src={img} alt="imac image" />
                          </div>
                          <div className="flex flex-col xsm:flex-row xsm:items-center xsm:justify-between md:order-3 md:justify-end gap-8">
                            {/* price */}
                            <div className="flex flex-col gap-2 xs:items-center">
                              <span className="text-sm font-medium text-slate-600">Choose Quantity</span>
                              <div className="flex items-center gap-3">
                                <Button
                                  onClick={() => handleDecreaseQuantity({ product: item.product })}
                                  variant={"outline"}
                                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#f1f1f1] bg-[#F7F7F7]"
                                >
                                  <GrFormPrevious />
                                </Button>
                                <span>{item.quantity}</span>
                                <Button
                                  onClick={() => handleIncreaseQuantity({ product: item.product, inStock: item.inStock, quantity: item.quantity })}
                                  variant={"outline"}
                                  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#f1f1f1] bg-[#F7F7F7]"
                                >
                                  <GrFormNext />
                                </Button>
                              </div>
                            </div>
                            <div className="text-end md:order-4  flex items-center gap-5">
                              <p className="text-base font-bold text-gray-900 ">{formatPrice(item.totalPrice)}</p>
                              <div onClick={() => handleProductRemove(item.product)}>
                                <MdDelete className="text-red-600 hover:scale-110 active:scale-95 duration-700 cursor-pointer text-xl  sm:text-2xl shadow-md rounded-lg " />
                              </div>
                            </div>
                          </div>

                          <div className="w-full min-w-0 flex-1 space-y-1 md:order-2 md:max-w-md">
                            <h1 className="text-lg font-semibold text-slate-900">{item.productName}</h1>
                            <p className="text-sm font-medium text-slate-600">{item.brand}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="min-h-[calc(100vh-400px)] flex items-center justify-center ">
                    <div className="text-slate-500 flex items-center justify-center font-semibold text-xl sm:text-2xl gap-5">
                      <MdProductionQuantityLimits /> <span> Your cart is currently empty. Start shopping now!</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              {cartItems?.length > 0 && (
                <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                  <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                        <div className="text-base font-bold text-gray-900 dark:text-white">Total Price</div>
                        <div className="text-base font-medium text-slate-800">{formatPrice(totalPrice)}</div>
                      </div>
                      <div className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
                        <div className="text-base font-bold text-slate-900 ">Total Quantity</div>
                        <div className="text-base font-medium text-slate-800">{totalQuantity}</div>
                      </div>
                    </div>

                    <Button className="w-full">Proceed to Checkout</Button>
                    <Button variant={"outline"} className="w-full">
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CartPage;
