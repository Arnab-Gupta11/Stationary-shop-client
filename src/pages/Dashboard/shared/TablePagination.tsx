/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef } from "react";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function TablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialized = useRef(false);

  // Initialize from URL
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");

    let page = parseInt(pageParam || "", 10);
    let limit = parseInt(limitParam || "", 10);

    const updatedParams = new URLSearchParams(searchParams.toString());
    let shouldUpdateURL = false;

    if (isNaN(page) || page < 1) {
      page = 1;
      updatedParams.set("page", "1");
      shouldUpdateURL = true;
    }
    if (isNaN(limit) || limit < 1) {
      limit = 10;
      updatedParams.set("limit", "10");
      shouldUpdateURL = true;
    }

    // Update the URL if needed
    if (shouldUpdateURL) {
      setSearchParams(updatedParams, { replace: true });
    }

    // Set table values only if they differ
    if (table.getState().pagination.pageIndex !== page - 1) {
      table.setPageIndex(page - 1);
    }
    if (table.getState().pagination.pageSize !== limit) {
      table.setPageSize(limit);
    }
  }, [searchParams, setSearchParams, table]);

  // Sync table state to URL
  useEffect(() => {
    const currentPage = table.getState().pagination.pageIndex + 1;
    const currentLimit = table.getState().pagination.pageSize;

    const pageInUrl = parseInt(searchParams.get("page") || "", 10);
    const limitInUrl = parseInt(searchParams.get("limit") || "", 10);

    if (currentPage !== pageInUrl || currentLimit !== limitInUrl) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("page", String(currentPage));
      newParams.set("limit", String(currentLimit));
      setSearchParams(newParams, { replace: true });
    }
  }, [table.getState().pagination.pageIndex, table.getState().pagination.pageSize, searchParams, setSearchParams]);

  return (
    <div className="flex items-center justify-end px-2 mt-7 text-light-primary-text dark:text-dark-primary-txt">
      {/* <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
      </div> */}
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top" className="text-light-primary-text dark:text-dark-primary-txt">
              {[5, 10, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`} className="cursor-pointer">
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button variant="outline" className="h-8 w-8 p-0" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
