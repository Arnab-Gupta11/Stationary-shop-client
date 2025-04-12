import { CustomTable } from "../../shared/CustomTable";
import DashboardPageSection from "../../shared/DashboardPageSection";
import { ColumnDef } from "@tanstack/react-table";
import { useGetAllCategoriesOptionQuery, useGetAllCategoriesQuery } from "@/redux/features/categories/categories.api";
import { TCategory } from "@/types/category.types";
import TableSkeletonLoader from "@/components/shared/loader/table-skeleton-loader/TableSkeletonLoader";
import { PaginationProduct } from "@/pages/AllProducts/Pagination";
import { TMeta } from "@/types/global";
import { useState } from "react";
import CreateCategoryModal from "./CreateCategoryModal";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { Loader2 } from "lucide-react";
import UpdateCategoryModal from "./UpdateCategoryModal";
const ManageCategories = () => {
  const [page, setPage] = useState(1);
  const { data: categoryOption, isLoading: categoryOptionLoading } = useGetAllCategoriesOptionQuery(undefined);
  const {
    data: categoryData,
    isLoading,
    isFetching,
  } = useGetAllCategoriesQuery([
    { name: "page", value: page },
    { name: "limit", value: 4 },
  ]);
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
          <DropdownMenuContent
            side="bottom"
            className="bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-light-border dark:border-dark-border text-light-primary-text dark:text-dark-primary-txt dark:shadow-box-shadow-dark font-medium font-Exo rounded-2xl p-2 flex flex-col"
          >
            <UpdateCategoryModal id={row.original._id} />
            <span
              // onClick={() => handleDelete(item)}
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
          <h1 className="text-lg text-light-primary-text dark:text-dark-primary-txt font-bold">Manage Categories</h1>
          <UpdateCategoryModal />
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
    </div>
  );
};

export default ManageCategories;
