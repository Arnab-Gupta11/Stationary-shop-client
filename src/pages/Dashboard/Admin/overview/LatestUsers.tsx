import { ColumnDef } from "@tanstack/react-table";
import { CustomTable } from "../../shared/CustomTable";
import { TLatestUsersStates } from "@/types/metadata.types";
const LatestUsers = ({ userData }: { userData: TLatestUsersStates[] }) => {
  const columns: ColumnDef<TLatestUsersStates>[] = [
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
  ];

  return (
    <div>
      <div className="p-4 bg-light-secondary-bg dark:bg-dark-secondary-bg cursor-pointer  border-2 border-light-border dark:border-dark-border rounded-3xl shadow-dashboard-page-shadow-light dark:shadow-dashboard-page-shadow-dark">
        <div className="mb-5 flex flex-col xs:flex-row items-center xs:justify-between gap-5">
          <h1 className="font-semibold text-light-primary-text dark:text-dark-primary-txt leading-relaxed ">Latest Users</h1>
        </div>
        <CustomTable columns={columns} data={userData || []} />
      </div>
    </div>
  );
};

export default LatestUsers;
