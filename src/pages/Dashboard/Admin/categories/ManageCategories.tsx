import { Link } from "react-router-dom";
import { CustomTable } from "../../shared/CustomTable";
import DashboardPageSection from "../../shared/DashboardPageSection";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useGetAllCategoriesQuery } from "@/redux/features/categories/categories.api";
import { TCategory } from "@/types/category.types";
import TableSkeletonLoader from "@/components/shared/loader/table-skeleton-loader/TableSkeletonLoader";
import { PaginationProduct } from "@/pages/AllProducts/Pagination";
import { TMeta } from "@/types/global";
import { useState } from "react";
const ManageCategories = () => {
  const [page, setPage] = useState(1);
  const {
    data: categoryData,
    isLoading,
    isFetching,
  } = useGetAllCategoriesQuery([
    { name: "page", value: page },
    { name: "limit", value: 4 },
  ]);
  console.log(categoryData);
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
  ];

  return (
    <div>
      <DashboardPageSection>
        <div className="mb-5 flex flex-col xs:flex-row items-center xs:justify-between gap-5">
          {/* <div className="relative">
            <Search className="absolute top-3 left-2 text-slate-500" size={14} />
            <Input
              type="text"
              onChange={handleSearchValu}
              placeholder="Search Products..."
              className="rounded-lg focus-visible:ring-0 w-full sm:w-56 pl-8 text-slate-700 font-normal"
            />
          </div> */}
          {/* <AddProduct /> */}
          <h1 className="text-lg text-light-primary-text dark:text-dark-primary-txt font-bold">Manage Categories</h1>
          <Link to="/dashboard/manage-products/add-product">
            <Button variant={"primary"}>
              <Plus />
              <span>Add Category</span>
            </Button>
          </Link>
        </div>
        {isLoading && <TableSkeletonLoader />}
        {!isLoading && <CustomTable columns={columns} data={categoryData?.data || []} isFetching={isFetching} />}
        <div className="mt-6 flex w-full justify-start">
          <PaginationProduct meta={categoryData?.meta as TMeta} page={page} setPage={setPage} />
        </div>
      </DashboardPageSection>
    </div>
  );
};

export default ManageCategories;
