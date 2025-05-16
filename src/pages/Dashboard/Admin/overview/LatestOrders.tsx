import { CustomTable } from "../../shared/CustomTable";
import { ColumnDef } from "@tanstack/react-table";
import { formateDateTime } from "@/utils/formateDateTime";
import { TLatestOrdersStates } from "@/types/metadata.types";

const LatestOrders = ({ orderData }: { orderData: TLatestOrdersStates[] }) => {
  const columns: ColumnDef<TLatestOrdersStates>[] = [
    {
      header: "Order",
      cell: ({ row }) => {
        return <span>{row.original.orderId}</span>;
      },
    },
    {
      header: "Date",
      cell: ({ row }) => {
        return <div className="w-32">{formateDateTime(row.original.orderPlaced)}</div>;
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
      cell: ({ row }) => <span>{row.original.totalProductsCount}</span>,
    },
    {
      header: "Delivery Status",
      cell: ({ row }) => {
        const status = row.original.orderStatus;
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
  ];
  return (
    <div className="p-4 bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-light-border dark:border-dark-border rounded-3xl shadow-dashboard-page-shadow-light dark:shadow-dashboard-page-shadow-dark">
      <h1 className="font-semibold text-light-primary-text dark:text-dark-primary-txt leading-relaxed mb-3">Latest Orders</h1>
      <CustomTable columns={columns} data={orderData || []} />
    </div>
  );
};

export default LatestOrders;
