import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { clearCart } from "@/redux/features/auth/authSlice";
import { useVerifyOrderQuery } from "@/redux/features/order/order.api";
import { useAppDispatch } from "@/redux/hooks";
import { TOrderData } from "@/types/order.type";

import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
        <h1 className="text-2xl md:text-4xl text-center xs:text-start font-bold">Order Verification</h1>
        <Button>
          <Link to={"/dashboard/view-orders"}>View Orders</Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Order Details */}
        <Card className="shadow-lg rounded-lg">
          <CardHeader className="bg-gray-100 rounded-t-lg">
            <CardTitle className="text-lg">Order Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid gap-3 text-sm mt-4">
              <dt className="font-semibold">Order ID:</dt>
              <dd>{orderData?.order_id}</dd>
              <dt className="font-semibold">Amount:</dt>
              <dd className="text-green-600">
                {orderData?.currency} {orderData?.amount?.toFixed(2)}
              </dd>
              <dt className="font-semibold">Status:</dt>
              <dd className="capitalize">{orderData?.bank_status}</dd>
              <dt className="font-semibold">Date:</dt>
              <dd>{new Date(orderData?.date_time).toLocaleString()}</dd>
            </dl>
          </CardContent>
        </Card>

        {/* Payment Information */}
        <Card className="shadow-lg rounded-lg">
          <CardHeader className="bg-gray-100 rounded-t-lg">
            <CardTitle className="text-lg">Payment Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid gap-3 text-sm mt-4">
              <dt className="font-semibold">Method:</dt>
              <dd>{orderData?.method}</dd>
              <dt className="font-semibold">Transaction ID:</dt>
              <dd>{orderData?.bank_trx_id}</dd>
              <dt className="font-semibold">Invoice No:</dt>
              <dd>{orderData?.invoice_no}</dd>
              <dt className="font-semibold">SP Code:</dt>
              <dd>{orderData?.sp_code}</dd>
              <dt className="font-semibold">SP Message:</dt>
              <dd>{orderData?.sp_message}</dd>
            </dl>
          </CardContent>
        </Card>

        {/* Customer Information */}
        <Card className="shadow-lg rounded-lg">
          <CardHeader className="bg-gray-100 rounded-t-lg">
            <CardTitle className="text-lg">Customer Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="grid gap-3 text-sm mt-4">
              <dt className="font-semibold">Name:</dt>
              <dd>{orderData?.name}</dd>
              <dt className="font-semibold">Email:</dt>
              <dd>{orderData?.email}</dd>
              <dt className="font-semibold">Phone:</dt>
              <dd>{orderData?.phone_no}</dd>
              <dt className="font-semibold">Address:</dt>
              <dd>{orderData?.address}</dd>
              <dt className="font-semibold">City:</dt>
              <dd>{orderData?.city}</dd>
            </dl>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
