import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AiOutlineSearch } from "react-icons/ai";
import TableSkeletonLoader from "@/components/shared/loader/table-skeleton-loader/TableSkeletonLoader";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isFetching: boolean;
}

export function CustomTable<TData, TValue>({ columns, data, isFetching }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <div className="overflow-x-auto border-4 rounded-2xl border-light-muted-bg dark:border-dark-muted-bg">
        <Table className="min-w-[600px] md:min-w-full table-auto rounded-2xl">
          <TableHeader className="bg-light-muted-bg dark:bg-dark-muted-bg rounded-t-2xl">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-slate-200 dark:border-dark-muted-bg">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="font-semibold text-light-primary-text dark:text-dark-primary-txt px-3 text-base">
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isFetching ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  <TableSkeletonLoader /> {/* Show loader when fetching */}
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"} className="border-[#e9eefc] dark:border-[#101417]">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="font-medium text-light-secondary-text dark:text-dark-secondary-txt px-3 text-xs sm:text-sm" key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <AiOutlineSearch className="text-base sm:text-xl text-light-secondary-text dark:text-dark-secondary-txt" />
                    <span className="text-base sm:text-lg text-light-secondary-text dark:text-dark-secondary-txt">No results found.</span>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <TablePagination table={table} /> */}
    </>
  );
}
