import Loader from "@/components/shared/Loader";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { PaginationProduct } from "@/pages/AllProducts/Pagination";
import { useGetAllOrdersOfAUserQuery } from "@/redux/features/order/order.api";
import { TMeta } from "@/types/global";
import { IOrder, IOrderItem } from "@/types/order.type";
import { formatMongoDateToDate } from "@/utils/formateDate";
import { formatPrice } from "@/utils/formatePrice";
import { useState } from "react";
import OrderDetails from "./OrderDetails";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";

const ViewOrders = () => {
  const [page, setPage] = useState(1);
  const { data: orderData, isLoading, isFetching } = useGetAllOrdersOfAUserQuery([{ name: "page", value: page }]);

  return (
    <div>
      <div className="mb-5 flex flex-col xs:flex-row items-center xs:justify-between gap-5"></div>
      {isLoading || isFetching ? (
        <Loader />
      ) : orderData?.data?.result.length > 0 ? (
        <div className="overflow-x-auto rounded-lg shadow-sm pb-10">
          <table className="w-full bg-white border border-[#f1f1f1] mb-5">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left border w-32 border-[#f1f1f1]">Order</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Date</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Products</th>
                <th className="px-4 py-2 text-left w-20 border border-[#f1f1f1]">Payment Status</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Total Price</th>
                <th className="px-4 py-2 text-left w-20 border border-[#f1f1f1]">Total Quantity</th>
                <th className="px-4 py-2 text-left w-20 border border-[#f1f1f1]">Order Status</th>
                <th className="px-4 py-2 text-left w-20 border border-[#f1f1f1]">Order Details</th>
              </tr>
            </thead>
            <tbody>
              {orderData?.data?.result?.map((item: IOrder) => (
                <tr key={item?._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border w-32 border-[#f1f1f1] text-sm">{item?._id}</td>
                  <td className="px-4 py-2 border border-[#f1f1f1] text-sm">{formatMongoDateToDate(item?.createdAt)}</td>
                  <td className="px-4 py-2  w-64 border-b border-[#f1f1f1] flex flex-wrap gap-4 items-center">
                    {item?.products?.map((product: IOrderItem) => {
                      return (
                        <img
                          key={product?.product?._id}
                          src={product?.product?.image}
                          alt="Product Image"
                          className="w-16 h-14 bg-[#F7F7F7] p-2 rounded-lg flex-shrink-0"
                        />
                      );
                    })}
                  </td>
                  <td className="px-4 py-2 border border-[#f1f1f1] text-sm">
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
                  <td className="px-4 py-2 border border-[#f1f1f1] text-sm">{formatPrice(item?.totalOrderPrice)}</td>
                  <td className="px-4 py-2 border border-[#f1f1f1] text-sm">{item?.products?.length}</td>
                  <td className="px-4 py-2 border border-[#f1f1f1] text-sm">
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
                  <td className="px-4 py-2 border border-[#f1f1f1] text-sm">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="outline-none hover:scale-105 active:scale-95 duration-700">
                        <BsThreeDots className="mt-2" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        side="bottom"
                        className="bg-white border-none shadow-md shadow-secondary-bg-light outline-none p-2 flex flex-col gap-2"
                      >
                        <Dialog>
                          <DialogTrigger>
                            <span className="hover:text-slate-700">Product Details</span>
                          </DialogTrigger>
                          <OrderDetails productDetails={item?.products} />
                        </Dialog>
                        <Link to={`/order/verification/?order_id=${item?.transaction?.id}`}>
                          <span className="ml-0.5 hover:text-slate-700">Order Details</span>
                        </Link>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <PaginationProduct meta={orderData?.data?.meta as TMeta} page={page} setPage={setPage} />
        </div>
      ) : (
        <div className="min-h-[calc(100vh-150px)] flex items-center justify-center ">
          <div className="text-slate-500 flex items-center justify-center font-semibold text-xl sm:text-2xl gap-5">
            <MdOutlineShoppingBag /> <span>No orders found. Place your first order now!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewOrders;
