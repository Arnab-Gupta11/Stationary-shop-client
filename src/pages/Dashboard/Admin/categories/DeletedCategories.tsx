/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomTable } from "../../shared/CustomTable";
import DashboardPageSection from "../../shared/DashboardPageSection";
import { ColumnDef } from "@tanstack/react-table";
import { useGetAllDeletedCategoriesQuery, useRestoreCategoryMutation } from "@/redux/features/categories/categories.api";
import { TCategory } from "@/types/category.types";
import TableSkeletonLoader from "@/components/shared/loader/table-skeleton-loader/TableSkeletonLoader";
import { PaginationProduct } from "@/pages/AllProducts/Pagination";
import { TMeta } from "@/types/global";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import toast from "react-hot-toast";
const DeletedCategories = () => {
  //Hooks
  const [page, setPage] = useState(1);

  //Get Deleted Categories
  const {
    data: categoryData,
    isLoading,
    isFetching,
  } = useGetAllDeletedCategoriesQuery([
    { name: "page", value: page },
    { name: "limit", value: 4 },
  ]);
  //Restore Categories.
  const [restoreCategory] = useRestoreCategoryMutation(undefined);
  const handleRestoreCategory = async (id: string) => {
    try {
      const res = await restoreCategory(id).unwrap();
      if (res?.success === true) {
        toast.success(res?.message);
      } else {
        toast.error(res?.data?.message || "Something went wrong. Try again later.");
      }
    } catch (err: any) {
      console.error(err?.message);
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
            <span
              onClick={() => handleRestoreCategory(row.original._id)}
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
          <h1 className="text-lg text-light-primary-text dark:text-dark-primary-txt font-bold">Deleted Categories</h1>
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
    </div>
  );
};

export default DeletedCategories;
