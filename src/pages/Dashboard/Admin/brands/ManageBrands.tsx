/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomTable } from "../../shared/CustomTable";
import DashboardPageSection from "../../shared/DashboardPageSection";
import { ColumnDef } from "@tanstack/react-table";
import { TCategory } from "@/types/category.types";
import TableSkeletonLoader from "@/components/shared/loader/table-skeleton-loader/TableSkeletonLoader";
import { PaginationProduct } from "@/pages/AllProducts/Pagination";
import { TMeta } from "@/types/global";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import DeleteConfirmationModal from "../../shared/DeleteConfirmationModal";
import toast from "react-hot-toast";
import { useDeleteBrandMutation, useGetAllBrandsByAdminQuery } from "@/redux/features/brand";
import { TBrand } from "@/types/brand.types";
import CreateBrandModal from "./CreateBrandModal";
import UpdateBrandModal from "./UpdateBrandModal";
const ManageBrands = () => {
  //Hooks
  const [page, setPage] = useState(1);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  //Categories
  const {
    data: brandData,
    isLoading,
    isFetching,
  } = useGetAllBrandsByAdminQuery([
    { name: "page", value: page },
    { name: "limit", value: 4 },
  ]);

  //Delete Category
  const [deleteBrand] = useDeleteBrandMutation(undefined);
  const handleDelete = (data: TCategory) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setDeleteModalOpen(true);
  };
  const handleDeleteConfirm = async () => {
    try {
      setIsDeleting(true);
      if (selectedId) {
        const res = await deleteBrand(selectedId).unwrap();
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
  const columns: ColumnDef<TBrand>[] = [
    {
      header: "Logo",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <img
            src={row.original.logo}
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
      accessorKey: "description",
      header: "Description",
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
            <UpdateBrandModal id={row.original._id} />
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
          <h1 className="text-xl text-light-primary-text dark:text-dark-primary-txt font-bold font-Aclonica">Manage Brands</h1>
          <CreateBrandModal />
        </div>
        {isLoading && <TableSkeletonLoader />}
        {!isLoading && (
          <>
            <CustomTable columns={columns} data={brandData?.data || []} isFetching={isFetching} />
            <div className="mt-6 flex w-full justify-start">
              {brandData?.data && <PaginationProduct meta={brandData?.meta as TMeta} page={page} setPage={setPage} />}
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

export default ManageBrands;
