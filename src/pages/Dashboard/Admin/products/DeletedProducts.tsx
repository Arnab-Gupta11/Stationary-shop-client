/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomTable } from "../../shared/CustomTable";
import DashboardPageSection from "../../shared/DashboardPageSection";
import { ColumnDef } from "@tanstack/react-table";
import TableSkeletonLoader from "@/components/shared/loader/table-skeleton-loader/TableSkeletonLoader";
import { PaginationProduct } from "@/pages/AllProducts/Pagination";
import { TMeta } from "@/types/global";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import toast from "react-hot-toast";
import { IProduct } from "@/types/product.types";
import { formatPrice } from "@/utils/formatePrice";
import { useGetAllDeletedProductsQuery, useRestoreProductMutation } from "@/redux/features/product/product.api";
const DeletedProducts = () => {
  //Hooks
  const [page, setPage] = useState(1);

  //Get Deleted Categories
  const { data: productData, isLoading, isFetching } = useGetAllDeletedProductsQuery([{ name: "page", value: page }]);
  //Restore Categories.
  const [restoreProduct] = useRestoreProductMutation(undefined);
  const handleRestoreProduct = async (id: string) => {
    try {
      const res = await restoreProduct(id).unwrap();
      if (res?.success === true) {
        toast.success(res?.message);
      } else {
        toast.error(res?.data?.message || "Something went wrong. Try again later.");
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  const columns: ColumnDef<IProduct>[] = [
    {
      header: "Image",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <img
            src={row.original.images[0]}
            alt={row.original.name}
            className="w-12 h-12 md:w-16 md:h-16 bg-light-muted-bg dark:bg-dark-muted-bg p-2 rounded-2xl flex-shrink-0 object-contain"
          />
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      header: "Price",
      cell: ({ row }) => {
        return <span>{formatPrice(row.original.price)}</span>;
      },
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
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
            <span
              onClick={() => handleRestoreProduct(row.original._id)}
              className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3"
            >
              Restore
            </span>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div>
      <DashboardPageSection>
        <div className="mb-5 flex flex-col xs:flex-row items-center xs:justify-between gap-5">
          <h1 className="text-xl text-light-primary-text dark:text-dark-primary-txt font-bold font-Aclonica">Deleted Products</h1>
        </div>
        {isLoading && <TableSkeletonLoader />}
        {!isLoading && (
          <>
            <CustomTable columns={columns} data={productData?.data || []} isFetching={isFetching} />
            <div className="mt-6 flex w-full justify-start">
              {productData?.data && <PaginationProduct meta={productData?.meta as TMeta} page={page} setPage={setPage} />}
            </div>
          </>
        )}
      </DashboardPageSection>
    </div>
  );
};

export default DeletedProducts;
