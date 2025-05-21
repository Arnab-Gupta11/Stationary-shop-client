import { PaginationProduct } from "@/pages/AllProducts/Pagination";
import { TMeta } from "@/types/global";
import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import DashboardPageSection from "../../shared/DashboardPageSection";
import TableSkeletonLoader from "@/components/shared/loader/table-skeleton-loader/TableSkeletonLoader";
import { CustomTable } from "../../shared/CustomTable";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { TContact } from "@/types/contact.types";
import ViewMessage from "./ViewMessage";
import { useGetAllContactsQuery } from "@/redux/features/contact/contact.api";
const ManageContactMessage = () => {
  const [page, setPage] = useState(1);
  const { data: contactData, isLoading, isFetching } = useGetAllContactsQuery([{ name: "page", value: page }]);

  const columns: ColumnDef<TContact>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "phone",
      header: "Phone",
    },
    {
      accessorKey: "subject",
      header: "Subject",
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
            <ViewMessage message={row.original} />
            <button className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3">
              Send Response
            </button>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div>
      <DashboardPageSection>
        <div className="mb-5 flex flex-col xs:flex-row items-center xs:justify-between gap-5">
          <h1 className="text-xl text-light-primary-text dark:text-dark-primary-txt font-bold font-Aclonica">Manage Contact Message</h1>
        </div>
        {isLoading && <TableSkeletonLoader />}
        {!isLoading && (
          <>
            <CustomTable columns={columns} data={contactData?.data || []} isFetching={isFetching} />
            <div className="mt-6 flex w-full justify-start">
              {contactData?.data && <PaginationProduct meta={contactData?.meta as TMeta} page={page} setPage={setPage} />}
            </div>
          </>
        )}
      </DashboardPageSection>
    </div>
  );
};

export default ManageContactMessage;
