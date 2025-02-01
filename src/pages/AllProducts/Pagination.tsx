/* eslint-disable react-hooks/exhaustive-deps */
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { TMeta } from "@/types/global";
import React, { useEffect } from "react";

type TPaginationProductProp = {
  meta: TMeta;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export function PaginationProduct({ meta, page, setPage }: TPaginationProductProp) {
  // Generate page numbers dynamically
  const pages = Array.from({ length: meta?.totalPage || 1 }, (_, index) => index + 1);

  // Ensure the page is always within valid bounds
  useEffect(() => {
    if (page > meta?.totalPage) {
      setPage(1); // Reset to first page if the current page is invalid
    }
  }, [meta?.totalPage, setPage]);

  // Handle page click
  const handlePageClick = (pageNumber: number) => {
    if (pageNumber <= meta.totalPage) {
      setPage(pageNumber);
    } else {
      setPage(1); // Reset if the selected page exceeds available pages
    }
  };

  // Handle next page navigation
  const handleNext = () => {
    if (page < meta.totalPage) {
      setPage(page + 1);
    }
  };

  // Handle previous page navigation
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="flex justify-center">
      <Pagination>
        <PaginationContent>
          {/* Previous Button */}
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevious} className={`hover:cursor-pointer ${page === 1 ? "opacity-50 cursor-not-allowed" : ""}`} />
          </PaginationItem>

          {/* Page Numbers */}
          {pages.map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                onClick={() => handlePageClick(pageNumber)}
                className={`${
                  page === pageNumber
                    ? "bg-gradient-to-b from-gray-700 to-gray-900 font-medium text-white shadow hover:bg-gradient-to-br"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } rounded px-4 py-2 hover:cursor-pointer`}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Next Button */}
          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              className={`hover:cursor-pointer ${page === meta?.totalPage ? "opacity-50 cursor-not-allowed" : ""}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
