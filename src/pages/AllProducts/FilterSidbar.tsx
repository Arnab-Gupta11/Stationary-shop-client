import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Filter, X } from "lucide-react";
import FilterByCategory from "./FilterByCategory";
import PriceFilter from "./PriceFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import { TFilterParams } from ".";
import FilterByBrand from "./FilterByBrand";
import { TCategory } from "@/types/category.types";
type TFilterSidebarProps = {
  queryParams: TFilterParams[];
  setQuerParams: React.Dispatch<React.SetStateAction<TFilterParams[]>>;
  initialMinPrice?: number;
  initialMaxPrice?: number;
  categories: TCategory[];
  isLoading: boolean;
};
const FilterSidbar = ({ queryParams, setQuerParams, initialMinPrice = 0, initialMaxPrice = 100, categories, isLoading }: TFilterSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="block bs:hidden">
        <Button>
          <Filter />
        </Button>
      </SheetTrigger>
      <SheetContent
        side={"right"}
        className="w-[90%] xs:w-[400px] border-none bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-md shadow-secondary-bg-light dark:shadow-secondary-bg-dark outline-none overflow-y-scroll"
      >
        <SheetClose asChild>
          <button className="absolute right-2 top-2 p-2 rounded-xl transition bg-light-secondary-bg dark:bg-dark-secondary-bg">
            <X className="w-5 h-5  text-light-secondary-text dark:text-dark-secondary-txt hover:text-primary hover:dark:text-primary duration-700 scale-105" />
            <span className="sr-only">Close</span>
          </button>
        </SheetClose>
        <SheetHeader>
          <SheetDescription>
            <div className="flex items-center justify-between pt-3 pb-4 border-b-2 border-light-border dark:border-slate-900 w-full">
              <div className="font-semibold text-light-primary-text dark:text-dark-primary-txt text-xl">Filter Products</div>
              {/* {queryParams.length > 0 && (
                <Button variant={"primary"} onClick={() => setQuerParams([])}>
                  Clear Filter
                </Button>
              )} */}
            </div>
            <PriceFilter
              queryParams={queryParams}
              setQuerParams={setQuerParams}
              initialMinPrice={initialMinPrice}
              initialMaxPrice={initialMaxPrice}
            />
            <FilterByCategory queryParams={queryParams} setQuerParams={setQuerParams} categories={categories} isLoading={isLoading} />
            <FilterByBrand queryParams={queryParams} setQuerParams={setQuerParams} />
            <AvailabilityFilter queryParams={queryParams} setQuerParams={setQuerParams} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSidbar;
