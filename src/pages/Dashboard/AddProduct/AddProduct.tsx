import { useState } from "react";
import { Button } from "@/components/ui/button";

// Dummy JSON data
const initialData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
];

export default function AddProduct() {
  const [tableData, setTableData] = useState(initialData);

  // Function to add a new row dynamically
  const addRow = () => {
    const newRow = {
      id: tableData.length + 1,
      name: `User ${tableData.length + 1}`,
      email: `user${tableData.length + 1}@example.com`,
      role: "Viewer",
    };
    setTableData([...tableData, newRow]);
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <Button onClick={addRow}>Add Row</Button>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border">ID</th>
              <th className="px-4 py-2 text-left border">Name</th>
              <th className="px-4 py-2 text-left border">Email</th>
              <th className="px-4 py-2 text-left border">Role</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{row.id}</td>
                <td className="px-4 py-2 border">{row.name}</td>
                <td className="px-4 py-2 border">{row.email}</td>
                <td className="px-4 py-2 border">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
