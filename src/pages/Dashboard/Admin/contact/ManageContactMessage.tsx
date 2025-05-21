/* eslint-disable @typescript-eslint/no-explicit-any */
import toast from "react-hot-toast";
import { useGetAllUsersQuery, useUpdateUserStatusMutation } from "@/redux/features/user/user.api";
import { PaginationProduct } from "@/pages/AllProducts/Pagination";
import { TMeta } from "@/types/global";
import { useState } from "react";
import { IUser } from "@/types/user.types";
import { ColumnDef } from "@tanstack/react-table";
import DashboardPageSection from "../../shared/DashboardPageSection";
import TableSkeletonLoader from "@/components/shared/loader/table-skeleton-loader/TableSkeletonLoader";
import { CustomTable } from "../../shared/CustomTable";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
const ManageContactMessage = () => {
  const [page, setPage] = useState(1);
  const [updateStatus] = useUpdateUserStatusMutation(undefined);
  const { data: userData, isLoading, isFetching } = useGetAllUsersQuery([{ name: "page", value: page }]);

  const handleUpdateUserStatus = async (_id: string, staues: boolean) => {
    try {
      const statusInfo = {
        isBlocked: !staues,
      };
      const res = await updateStatus({ id: _id, data: statusInfo }).unwrap();
      if (res?.success === true) {
        toast.success(res?.message);
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  const columns: ColumnDef<IUser>[] = [
    {
      header: "Profile Image",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <img
            src={row.original.profilePicture}
            alt={row.original.fullName}
            className="w-12 h-12 md:w-16 md:h-16 bg-light-muted-bg dark:bg-dark-muted-bg p-2 rounded-2xl flex-shrink-0 object-contain"
          />
        </div>
      ),
    },
    {
      accessorKey: "fullName",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "action",
      header: () => <div>Status</div>,
      cell: ({ row }) => (
        <span
          className={`px-2 py-1 rounded-md text-sm
                  ${
                    row.original.isBlocked === true
                      ? "bg-[#ffe5ef] dark:bg-[#361422] dark:border-[#FF4388] text-[#ef4986] dark:text-white text-sm border-2 border-[#FF4388]"
                      : "bg-[#dbfed0] dark:bg-[#192B1D] dark:border-[#347D3F] text-green-600 dark:text-white text-sm border-2 border-green-500"
                  }`}
        >
          {row.original.isBlocked === true ? "Blocked" : "Active"}
        </span>
      ),
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
              onClick={() => handleUpdateUserStatus(row.original._id, row.original.isBlocked)}
              className="cursor-pointer flex items-center hover:text-primary-bg hover:bg-light-muted-bg dark:hover:bg-dark-muted-bg py-1 rounded-xl hover:text-primary px-3"
            >
              {row.original.isBlocked ? "Unblock User" : "Block User"}
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
        </div>
        {isLoading && <TableSkeletonLoader />}
        {!isLoading && (
          <>
            <CustomTable columns={columns} data={userData?.data || []} isFetching={isFetching} />
            <div className="mt-6 flex w-full justify-start">
              {userData?.data && <PaginationProduct meta={userData?.meta as TMeta} page={page} setPage={setPage} />}
            </div>
          </>
        )}
      </DashboardPageSection>
    </div>
  );
};

export default ManageContactMessage;
