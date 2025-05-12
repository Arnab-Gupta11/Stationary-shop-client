import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useVerifyOrderQuery } from "@/redux/features/order/order.api";
import { useAppDispatch } from "@/redux/hooks";
import { TOrderData } from "@/types/order.type";

import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { clearCart } from "@/redux/features/cart/cartSlice";

export default function OrderVerification() {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  const { isLoading, data } = useVerifyOrderQuery(searchParams.get("order_id"), {
    refetchOnMountOrArgChange: true,
  });

  const orderData: TOrderData = data?.data?.[0];

  return isLoading ? (
    <div className="flex h-screen items-center justify-center">
      <div className="text-lg font-semibold animate-pulse">Loading...</div>
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full md:max-w-[90%] mx-auto p-6 py-20"
    >
      <div className="flex items-center flex-col xs:flex-row justify-center xsm:justify-between  flex-wrap mb-8 gap-3">
        <h1 className="text-2xl md:text-4xl text-light-primary-text dark:text-dark-primary-txt text-center xs:text-start font-bold">
          Order Verification
        </h1>
        <Button>
          <Link to={"/dashboard/users/view-orders"}>View Orders</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Order Details */}
        <Card className="shadow-box-shadow-light dark:shadow-box-shadow-dark bg-white dark:bg-dark-secondary-bg border-2 border-light-border dark:border-dark-border rounded-3xl">
          <CardHeader className="bg-gray-100 dark:bg-dark-muted-bg rounded-t-3xl">
            <CardTitle className="text-lg text-light-primary-text dark:text-dark-primary-txt font-semibold">Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid gap-3 text-sm mt-4">
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Order ID:</dt>
              <dd className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">{orderData?.order_id}</dd>
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Amount:</dt>
              <dd className="text-green-600 font-medium">
                {orderData?.currency} {orderData?.amount?.toFixed(2)}
              </dd>
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Status:</dt>
              <dd className="capitalize text-light-secondary-text dark:text-dark-secondary-txt font-medium">{orderData?.bank_status}</dd>
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Date:</dt>
              <dd className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
                {new Date(orderData?.date_time).toLocaleString()}
              </dd>
            </dl>
          </CardContent>
        </Card>

        {/* Payment Information */}
        <Card className="shadow-box-shadow-light dark:shadow-box-shadow-dark bg-white dark:bg-dark-secondary-bg border-2 border-light-border dark:border-dark-border rounded-3xl">
          <CardHeader className="bg-gray-100 dark:bg-dark-muted-bg rounded-t-3xl">
            <CardTitle className="text-lg text-light-primary-text dark:text-dark-primary-txt font-semibold">Payment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid gap-3 text-sm mt-4">
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Method:</dt>
              <dd className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">{orderData?.method}</dd>
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Transaction ID:</dt>
              <dd className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">{orderData?.bank_trx_id}</dd>
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Invoice No:</dt>
              <dd className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">{orderData?.invoice_no}</dd>
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">SP Code:</dt>
              <dd className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">{orderData?.sp_code}</dd>
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">SP Message:</dt>
              <dd className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">{orderData?.sp_message}</dd>
            </dl>
          </CardContent>
        </Card>

        {/* Customer Information */}
        <Card className="shadow-box-shadow-light dark:shadow-box-shadow-dark bg-white dark:bg-dark-secondary-bg border-2 border-light-border dark:border-dark-border rounded-3xl">
          <CardHeader className="bg-gray-100 dark:bg-dark-muted-bg rounded-t-3xl">
            <CardTitle className="text-lg text-light-primary-text dark:text-dark-primary-txt font-semibold">Customer Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid gap-3 text-sm mt-4">
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Name:</dt>
              <dd className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">{orderData?.name}</dd>
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Email:</dt>
              <dd className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">{orderData?.email}</dd>
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Phone:</dt>
              <dd className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">{orderData?.phone_no}</dd>
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Address:</dt>
              <dd className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">{orderData?.address}</dd>
              <dt className="font-semibold text-light-primary-text dark:text-dark-primary-txt">City:</dt>
              <dd className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">{orderData?.city}</dd>
            </dl>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
