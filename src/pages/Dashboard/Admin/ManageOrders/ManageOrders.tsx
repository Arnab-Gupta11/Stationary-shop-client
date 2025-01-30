/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "@/components/shared/Loader";
import { useState } from "react";
import { PaginationProduct } from "@/pages/AllProducts/Pagination";
import { TMeta } from "@/types/global";
import { Button } from "@/components/ui/button";
import { useGetAllOrdersQuery, useUpdateOrderStatusMutation } from "@/redux/features/order/order.api";
import { IOrder } from "@/types/order.type";
import { formatMongoDateToDate } from "@/utils/formateDate";
import { formatPrice } from "@/utils/formatePrice";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
const ManageOrders = () => {
  const [page, setPage] = useState(1);
  const [updateStatus] = useUpdateOrderStatusMutation(undefined);
  const { data: orderData, isLoading } = useGetAllOrdersQuery([{ name: "page", value: page }]);
  console.log(orderData);
  const [loading, setLoading] = useState(false);

  const handleUpdateOrderStatus = async (_id: string) => {
    try {
      setLoading(true);
      const statusInfo = {
        status: "Shipping",
      };
      const res = await updateStatus({ id: _id, data: statusInfo }).unwrap();
      if (res?.success === true) {
        toast.success(res?.message);
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-5 flex flex-col xs:flex-row items-center xs:justify-between gap-5"></div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-sm pb-10">
          <table className="w-full bg-white border border-[#f1f1f1] mb-5">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left border w-32 border-[#f1f1f1]">Order</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Date</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Customer</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Payment Status</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Total</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Items</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Order Status</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Action</th>
              </tr>
            </thead>
            <tbody>
              {orderData?.data?.result?.map((item: IOrder) => (
                <tr key={item?._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border w-32 border-[#f1f1f1]">{item?._id}</td>
                  <td className="px-4 py-2 border border-[#f1f1f1]">{formatMongoDateToDate(item?.createdAt)}</td>
                  <td className="px-4 py-2 border border-[#f1f1f1]">{item?.user?.fullName}</td>
                  <td className="px-4 py-2 border border-[#f1f1f1]">
                    <span
                      className={`px-2 py-1 rounded-md
                          ${
                            item?.paymentStatus === "Cancelled"
                              ? "bg-[#FDEEEF] text-[#ff6a62] border border-[#f5f4f4]"
                              : item?.paymentStatus === "Paid"
                              ? "bg-[#EDFBF3] text-[#71d057] border border-[#f5f4f4]"
                              : item?.paymentStatus === "Pending"
                              ? "bg-[#FFFEF4] text-yellow-600 border border-[#f5f4f4]"
                              : "bg-none text-slate-800"
                          }`}
                    >
                      {item?.paymentStatus}
                    </span>
                  </td>
                  <td className="px-4 py-2 border border-[#f1f1f1]">{formatPrice(item?.totalOrderPrice)}</td>
                  <td className="px-4 py-2 border border-[#f1f1f1]">{item?.products?.length}</td>
                  <td className="px-4 py-2 border border-[#f1f1f1]">
                    {
                      <span
                        className={`px-2 py-1 rounded-md
                          ${
                            item?.status === "Pending"
                              ? "bg-[#fdfcea] text-yellow-500 border border-[#f5f4f4]"
                              : item?.status === "Shipping"
                              ? "bg-[#EDFBF3] text-[#71d057] border border-[#f5f4f4]"
                              : "bg-none text-slate-800"
                          }`}
                      >
                        {item?.status}
                      </span>
                    }
                  </td>
                  <td className="px-4 py-2 border w-20 border-[#f1f1f1]">
                    <Button
                      onClick={() => {
                        handleUpdateOrderStatus(item?._id);
                      }}
                      type="submit"
                      disabled={item?.status === "Shipping"}
                      className="sm-mx:w-full"
                    >
                      {item?.status === "Shipping" ? "Approved" : "Approve"}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <PaginationProduct meta={orderData?.data?.meta as TMeta} page={page} setPage={setPage} />
        </div>
      )}
    </div>
  );
};

export default ManageOrders;
