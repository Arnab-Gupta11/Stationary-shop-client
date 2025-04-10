/* eslint-disable react-hooks/exhaustive-deps */
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { TMeta } from "@/types/global";
import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
    <Pagination>
      <PaginationContent className="flex items-center space-x-2">
        {/* Previous Button with Icon */}
        <PaginationItem>
          <PaginationLink
            onClick={handlePrevious}
            className={`p-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
              page === 1
                ? "text-slate-400 dark:text-slate-800 cursor-not-allowed"
                : "text-light-primary-text dark:text-dark-primary-txt hover:text-primary hover:cursor-pointer"
            }`}
          >
            <FaArrowLeft size={18} />
          </PaginationLink>
        </PaginationItem>

        {/* Page Numbers */}
        {pages.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              onClick={() => handlePageClick(pageNumber)}
              className={`${
                page === pageNumber
                  ? "bg-button-gradient from-purple-500 to-blue-500 text-white font-semibold shadow-lg "
                  : "bg-gray-200 dark:bg-slate-900 text-gray-700 hover:bg-gray-300 dark:hover:bg-slate-800  hover:text-primary"
              } rounded-[14px] px-4 py-2 transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer `}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next Button with Icon */}
        <PaginationItem>
          <PaginationLink
            onClick={handleNext}
            className={`p-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
              page === meta?.totalPage
                ? "text-slate-400 dark:text-slate-800 cursor-not-allowed"
                : "text-light-primary-text dark:text-dark-primary-txt hover:text-primary hover:cursor-pointer"
            }`}
          >
            <FaArrowRight size={18} />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
