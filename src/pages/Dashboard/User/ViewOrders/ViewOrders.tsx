import TableSkeletonLoader from "@/components/shared/loader/table-skeleton-loader/TableSkeletonLoader";
import DashboardPageSection from "../../shared/DashboardPageSection";
import { CustomTable } from "../../shared/CustomTable";
import { PaginationProduct } from "@/pages/AllProducts/Pagination";
import { TMeta } from "@/types/global";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { useGetAllOrdersOfAUserQuery } from "@/redux/features/order/order.api";
import { IOrder, IOrderItem } from "@/types/order.type";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { formateDateTime } from "@/utils/formateDateTime";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import OrderDetails from "./OrderDetails";
import { Link } from "react-router-dom";

const ViewOrders = () => {
  //Hooks
  const [page, setPage] = useState(1);

  //Categories
  const { data: orderData, isLoading, isFetching } = useGetAllOrdersOfAUserQuery([{ name: "page", value: page }]);

  const columns: ColumnDef<IOrder>[] = [
    {
      header: "Order",
      cell: ({ row }) => {
        return <span>{row.original.transaction.id}</span>;
      },
    },
    {
      header: "Date",
      cell: ({ row }) => {
        return <span>{formateDateTime(row.original.createdAt)}</span>;
      },
    },
    {
      header: "Products",
      cell: ({ row }) => {
        return (
          <div className="flex flex-wrap gap-4 items-center">
            {row?.original?.products?.map((product: IOrderItem) => {
              return (
                <img
                  key={product._id}
                  src={product.product.images[0] || "https://res.cloudinary.com/dgxvtrpmh/image/upload/v1746610651/fallback-product_e1mbdl.png"}
                  alt="Product Image"
                  className="w-12 h-12 md:w-16 md:h-16 bg-light-muted-bg dark:bg-dark-muted-bg p-2 rounded-2xl flex-shrink-0 object-cover"
                />
              );
            })}
          </div>
        );
      },
    },
    {
      header: "Payment Status",
      cell: ({ row }) => {
        const status = row.original.paymentStatus;
        return (
          <span
            className={`px-2 py-0.5 rounded-lg font-medium
                          ${
                            status === "Cancelled"
                              ? "bg-[#ffe5ef] dark:bg-[#361422] dark:border-[#FF4388] text-[#ef4986] dark:text-white text-sm border-2 border-[#FF4388]"
                              : status === "Paid"
                              ? "bg-[#dbfed0] dark:bg-[#192B1D] dark:border-[#347D3F] text-green-600 dark:text-white text-sm border-2 border-green-500"
                              : status === "Pending"
                              ? "bg-[#fefad0] dark:bg-[#493A1D] dark:border-[#FFC422] text-yellow-500 dark:text-white text-sm border-2 border-[#FFC422]"
                              : "bg-none text-slate-800"
                          }`}
          >
            {status}
          </span>
        );
      },
    },
    {
      accessorKey: "totalOrderPrice",
      header: "Total Price",
    },
    {
      header: "Total Quantity",
      cell: ({ row }) => <span>{row.original.products.length}</span>,
    },
    {
      header: "Delivery Status",
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <span
            className={`px-2 py-0.5 rounded-lg font-medium
                          ${
                            status === "Pending"
                              ? "bg-[#ffe5ef] dark:bg-[#361422] dark:border-[#FF4388] text-[#ef4986] dark:text-white text-sm border-2 border-[#FF4388]"
                              : status === "Confirmed"
                              ? "bg-[#d0d8fe] dark:bg-[#191a2b] dark:border-[#34347d] text-blue-600 dark:text-white text-sm border-2 border-blue-500"
                              : status === "Shipping"
                              ? "bg-[#fefad0] dark:bg-[#493A1D] dark:border-[#FFC422] text-yellow-500 dark:text-white text-sm border-2 border-[#FFC422]"
                              : status === "Delivered"
                              ? "bg-[#dbfed0] dark:bg-[#192B1D] dark:border-[#347D3F] text-green-600 dark:text-white text-sm border-2 border-green-500"
                              : "bg-none text-slate-800"
                          }`}
          >
            {status}
          </span>
        );
      },
    },
    {
      accessorKey: "action",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none flex items-center justify-center hover:scale-105 active:scale-95 duration-700">
            <BsThreeDots className="mt-2 text-xl" />
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" className=" flex flex-col">
            <Dialog>
              <DialogTrigger>
                <span className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3">
                  Product Details
                </span>
              </DialogTrigger>
              <OrderDetails productDetails={row.original.products} />
            </Dialog>
            <Link to={`/order/verification/?order_id=${row.original.transaction.id}`}>
              <span className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3">
                Order Details
              </span>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
  return (
    <div>
      <DashboardPageSection>
        <div className="mb-5 flex flex-col xs:flex-row items-center xs:justify-between gap-5">
          <h1 className="text-xl text-light-primary-text dark:text-dark-primary-txt font-bold font-Aclonica">View Orders</h1>
        </div>
        {isLoading && <TableSkeletonLoader />}
        {!isLoading && (
          <>
            <CustomTable columns={columns} data={orderData?.data || []} isFetching={isFetching} />
            <div className="mt-6 flex w-full justify-start">
              {orderData?.data && orderData?.data.length > 0 && <PaginationProduct meta={orderData?.meta as TMeta} page={page} setPage={setPage} />}
            </div>
          </>
        )}
      </DashboardPageSection>
    </div>
  );
};

export default ViewOrders;
