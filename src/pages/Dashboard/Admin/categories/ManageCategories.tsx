import { Link } from "react-router-dom";
import { CustomTable } from "../../shared/CustomTable";
import DashboardPageSection from "../../shared/DashboardPageSection";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type Payment = {
  id: string;
  amount: number;
  status: string;
  email: string;
  customer: {
    name: string;
    country: string;
  };
  fruits: string[];
};

const payments: Payment[] = [
  {
    id: "a1f23d",
    amount: 89,
    status: "pending",
    email: "user1@example.com",
    customer: { name: "Alice", country: "USA" },
    fruits: ["apple", "banena"],
  },
  {
    id: "b9d88e",
    amount: 210,
    status: "success",
    email: "user2@example.com",
    customer: { name: "Bob", country: "UK" },
    fruits: ["apple", "banena"],
  },
  {
    id: "c2a4bc",
    amount: 150,
    status: "failed",
    email: "user3@example.com",
    customer: { name: "Charlie", country: "Canada" },
    fruits: ["apple", "banena"],
  },
  {
    id: "d331ad",
    amount: 110,
    status: "processing",
    email: "user4@example.com",
    customer: { name: "David", country: "Germany" },
    fruits: ["apple", "banena"],
  },
  {
    id: "e5fa33",
    amount: 75,
    status: "pending",
    email: "user5@example.com",
    customer: { name: "Eva", country: "France" },
    fruits: ["apple", "banena"],
  },
  {
    id: "f88a21",
    amount: 300,
    status: "success",
    email: "user6@example.com",
    customer: { name: "Frank", country: "Australia" },
    fruits: ["apple", "banena"],
  },
  {
    id: "g9dd91",
    amount: 240,
    status: "processing",
    email: "user7@example.com",
    customer: { name: "Grace", country: "Brazil" },
    fruits: ["apple", "banena"],
  },
  {
    id: "h7cc12",
    amount: 199,
    status: "failed",
    email: "user8@example.com",
    customer: { name: "Hank", country: "Japan" },
    fruits: ["apple", "banena"],
  },
  {
    id: "i03bde",
    amount: 60,
    status: "pending",
    email: "user9@example.com",
    customer: { name: "Ivy", country: "India" },
    fruits: ["apple", "banena"],
  },
  {
    id: "j6fa10",
    amount: 120,
    status: "success",
    email: "user10@example.com",
    customer: { name: "Jack", country: "Mexico" },
    fruits: ["apple", "banena"],
  },
  {
    id: "k4ee72",
    amount: 130,
    status: "processing",
    email: "user11@example.com",
    customer: { name: "Kara", country: "Spain" },
    fruits: ["apple", "banena"],
  },
  {
    id: "l2a833",
    amount: 190,
    status: "pending",
    email: "user12@example.com",
    customer: { name: "Leo", country: "Italy" },
    fruits: ["apple", "banena"],
  },
];

const ManageCategories = () => {
  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
    {
      header: "Customer Name",
      cell: ({ row }) => row.original.customer.name,
    },
    {
      header: "Favourite Fruits",
      cell: ({ row }) => row.original.fruits[0],
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
          <h1 className="text-lg font-bold">Manage Categories</h1>
          <Link to="/dashboard/manage-products/add-product">
            <Button variant={"primary"}>
              <Plus />
              <span>Add Category</span>
            </Button>
          </Link>
        </div>
        <CustomTable columns={columns} data={payments} />
      </DashboardPageSection>
    </div>
  );
};

export default ManageCategories;
