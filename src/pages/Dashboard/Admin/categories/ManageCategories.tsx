/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomTable } from "../../shared/CustomTable";
import DashboardPageSection from "../../shared/DashboardPageSection";
import { ColumnDef } from "@tanstack/react-table";
import { useDeleteCategoryMutation, useGetAllCategoriesOptionQuery, useGetAllCategoriesQuery } from "@/redux/features/categories/categories.api";
import { TCategory } from "@/types/category.types";
import TableSkeletonLoader from "@/components/shared/loader/table-skeleton-loader/TableSkeletonLoader";
import { PaginationProduct } from "@/pages/AllProducts/Pagination";
import { TMeta } from "@/types/global";
import { useState } from "react";
import CreateCategoryModal from "./CreateCategoryModal";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import UpdateCategoryModal from "./UpdateCategoryModal";
import DeleteConfirmationModal from "../../shared/DeleteConfirmationModal";
import toast from "react-hot-toast";
const ManageCategories = () => {
  //Hooks
  const [page, setPage] = useState(1);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  //Category Options
  const { data: categoryOption, isLoading: categoryOptionLoading } = useGetAllCategoriesOptionQuery(undefined);

  //Categories
  const { data: categoryData, isLoading, isFetching } = useGetAllCategoriesQuery([{ name: "page", value: page }]);

  //Delete Category
  const [deleteCategory] = useDeleteCategoryMutation(undefined);
  const handleDelete = (data: TCategory) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setDeleteModalOpen(true);
  };
  const handleDeleteConfirm = async () => {
    try {
      setIsDeleting(true);
      if (selectedId) {
        const res = await deleteCategory(selectedId).unwrap();
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
  const columns: ColumnDef<TCategory>[] = [
    {
      header: "Icon",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <img
            src={row.original.icon}
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
      header: "Category Type",
      cell: ({ row }) => {
        const isRoot = row.original.parent === null;
        return (
          <span
            className={`inline-block px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap ${
              isRoot ? "bg-purple-100 text-purple-800" : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {isRoot ? "Parent Category" : "Sub Category"}
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
            <UpdateCategoryModal id={row.original._id} />
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
          <h1 className="text-xl text-light-primary-text dark:text-dark-primary-txt font-bold font-Aclonica">Manage Categories</h1>
          <CreateCategoryModal categoryOption={categoryOption?.data} isLoading={categoryOptionLoading} />
        </div>
        {isLoading && <TableSkeletonLoader />}
        {!isLoading && (
          <>
            <CustomTable columns={columns} data={categoryData?.data || []} isFetching={isFetching} />
            <div className="mt-6 flex w-full justify-start">
              {categoryData?.data && <PaginationProduct meta={categoryData?.meta as TMeta} page={page} setPage={setPage} />}
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

export default ManageCategories;
