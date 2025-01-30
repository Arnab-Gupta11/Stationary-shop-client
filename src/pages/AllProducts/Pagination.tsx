import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { TMeta } from "@/types/global";
import React from "react";

type TPaginationProductProp = {
  meta: TMeta;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export function PaginationProduct({ meta, page, setPage }: TPaginationProductProp) {
  // Generate page numbers
  const pages = Array.from({ length: meta?.totalPage }, (_, index) => index + 1);

  const handlePageClick = (pageNumber: number) => {
    console.log("Clicked Page ----->", pageNumber);
    setPage(pageNumber); // Update the current page state
  };

  const handleNext = () => {
    if (page < meta?.totalPage) {
      const nextPage = page + 1;
      console.log("Next Page ----->", nextPage);
      setPage(nextPage);
    }
  };

  const handlePrevious = () => {
    if (page > 1) {
      const prevPage = page - 1;
      console.log("Previous Page ----->", prevPage);
      setPage(prevPage);
    }
  };

  return (
    <div className="flex justify-center">
      <Pagination>
        <PaginationContent>
          {/* Previous Button */}
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevious} className="hover:cursor-pointer" />
          </PaginationItem>

          {/* Page Buttons */}
          {pages.map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                onClick={() => handlePageClick(pageNumber)}
                className={`${
                  page === pageNumber
                    ? "bg-gradient-to-b from-gray-700 to-gray-900 font-medium text-white shadow hover:bg-gradient-to-br hover:cu" // Active page styling
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } rounded px-4 py-2 hover:cursor-pointer`}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* Next Button */}
          <PaginationItem>
            <PaginationNext onClick={handleNext} className="hover:cursor-pointer" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
