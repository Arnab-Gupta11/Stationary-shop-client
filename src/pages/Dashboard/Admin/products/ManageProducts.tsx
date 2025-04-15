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

import DeleteConfirmationModal from "../../shared/DeleteConfirmationModal";
import toast from "react-hot-toast";
import { useDeleteProductMutation, useGetAllProductsQuery } from "@/redux/features/product/product.api";
import { IProduct } from "@/types/product.types";
import { formatPrice } from "@/utils/formatePrice";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
const ManageProducts = () => {
  //Hooks
  const [page, setPage] = useState(1);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  //Categories
  const { data: productData, isLoading, isFetching } = useGetAllProductsQuery([{ name: "page", value: page }]);

  //Delete Category
  const [deleteProduct] = useDeleteProductMutation(undefined);
  const handleDelete = (data: IProduct) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setDeleteModalOpen(true);
  };
  const handleDeleteConfirm = async () => {
    try {
      setIsDeleting(true);
      if (selectedId) {
        const res = await deleteProduct(selectedId).unwrap();
        console.log(res);
        if (res?.success === true) {
          toast.success(res?.message);
          setDeleteModalOpen(false);
        } else {
          toast.error(res?.data?.message || "Something went wrong. Try again later.");
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    } finally {
      setIsDeleting(false);
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
            <Link to={`/dashboard/admin/update-product/${row.original._id}`}>
              <span className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3">
                Update
              </span>
            </Link>

            <span
              onClick={() => handleDelete(row.original)}
              className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3"
            >
              Delete
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
          <h1 className="text-xl text-light-primary-text dark:text-dark-primary-txt font-bold font-Aclonica">Manage Products</h1>
          <Link to={"/dashboard/admin/add-product"}>
            <Button variant="primary">
              <Plus />
              <span>Add Product</span>
            </Button>
          </Link>
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
      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isDeleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        onConfirm={handleDeleteConfirm}
        isDeleting={isDeleting}
      />
    </div>
  );
};

export default ManageProducts;
