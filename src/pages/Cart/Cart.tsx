/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import {
  getTotalPrice,
  getTotalQuantity,
  increaseProductQuantity,
  reduceProductQuantity,
  removeProductFromCart,
  TCartItem,
  useCartItems,
  useCurrentUser,
} from "@/redux/features/auth/authSlice";
import { MdOutlineDeleteForever } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import Section from "@/components/shared/Section";
import { formatPrice } from "@/utils/formatePrice";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import { useEffect, useState } from "react";
import { billingInfoSchema } from "@/schemas/BillingInfoSchema";
import { z } from "zod";
import useCustomForm from "@/hooks/useCustomForm";

import { useCreateOrderMutation } from "@/redux/features/order/order.api";
import { BiLoaderCircle } from "react-icons/bi";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PageHeader from "@/components/shared/PageHeader";
const CartPage = () => {
  const loginUser = useAppSelector(useCurrentUser);
  const [createOrder] = useCreateOrderMutation();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(useCartItems);
  const totalPrice = useAppSelector(getTotalPrice);
  const totalQuantity = useAppSelector(getTotalQuantity);
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
  const billingInfoValue = {
    phone: loginUser?.phone,
    address: loginUser?.address,
    city: loginUser?.city,
    fullName: loginUser?.name,
    email: loginUser?.userEmail,
  };
  //Update Billing information
  const [form] = useCustomForm(billingInfoSchema, billingInfoValue);
  const formattedProducts = cartItems.map((item) => {
    return {
      product: item.product,
      quantity: item.quantity,
    };
  });
  //Order Product.
  const onSubmit = async (values: z.infer<typeof billingInfoSchema>) => {
    try {
      setIsLoading(true);
      const userInfo = {
        userInfo: {
          fullName: values.fullName,
          email: values.email,
          address: values.address,
          city: values.city,
          phone: values.phone,
        },
        products: formattedProducts,
      };
      const res = await createOrder(userInfo).unwrap();
      if (res?.success === true) {
        toast.success(res?.message);

        setTimeout(() => {
          window.location.href = res?.data;
        }, 1000);
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeader title="Shopping Cart">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Cart</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>
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
                            <img className="h-20 w-20" src={item?.image} alt="imac image" />
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
                                <MdOutlineDeleteForever className="text-red-600 hover:scale-110 active:scale-95 duration-700 cursor-pointer text-xl  sm:text-2xl shadow-md rounded-lg " />
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
                  <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm ">
                    <p className="text-xl font-semibold text-gray-900 dark:text-white">Billing details</p>

                    <div className="space-y-4">
                      <CustomForm onSubmit={onSubmit} form={form}>
                        <div className=" gap-4 border-t border-gray-200 pt-2">
                          <FormField
                            control={form.control}
                            name={"fullName"}
                            render={({ field }) => (
                              <FormItem className="mt-4">
                                <FormLabel className="text-slate-800 dark:text-slate-200 text-start">{"Full Name"}</FormLabel>
                                <FormControl>
                                  <Input readOnly type={"text"} placeholder={"Enter your FullName"} {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name={"email"}
                            render={({ field }) => (
                              <FormItem className="mt-4">
                                <FormLabel className="text-slate-800 dark:text-slate-200 text-start">{"Email"}</FormLabel>
                                <FormControl>
                                  <Input readOnly type={"text"} placeholder={"Enter your email"} {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                              </FormItem>
                            )}
                          />
                          <CustomInput form={form} fieldName={"phone"} label={"Phone No"} inputType={"text"} placeholder={"Enter your phone no"} />
                          <CustomInput form={form} fieldName={"address"} label={"Address"} inputType={"text"} placeholder={"Enter your address"} />
                          <CustomInput form={form} fieldName={"city"} label={"City"} inputType={"text"} placeholder={"Enter your city"} />

                          {/* <Button type="submit" className="w-full mt-8">
                            {isLoading ? <BiLoaderCircle className="animate-spin" /> : "Sign In"}
                          </Button> */}
                        </div>
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm mt-6">
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

                          <Button type="submit" disabled={isLoading || loginUser?.role === "admin"} className="w-full">
                            {isLoading ? <BiLoaderCircle className="animate-spin" /> : "Order Now"}
                          </Button>
                          <Button type="button" variant={"outline"} className="w-full">
                            <Link to={"/shop?page=1"}>Continue Shopping</Link>
                          </Button>
                        </div>
                      </CustomForm>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default CartPage;
