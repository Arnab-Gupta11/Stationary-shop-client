import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import FilterByCategory from "./FilterByCategory";
import PriceFilter from "./PriceFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import { TFilterParams } from ".";
import FilterByBrand from "./FilterByBrand";
type TFilterSidebarProps = {
  queryParams: TFilterParams[];
  setQuerParams: React.Dispatch<React.SetStateAction<TFilterParams[]>>;
  initialMinPrice?: number;
  initialMaxPrice?: number;
};
const FilterSidbar = ({ queryParams, setQuerParams, initialMinPrice = 0, initialMaxPrice = 100 }: TFilterSidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger className="flex bs:hidden">
        <Button>
          <Filter />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90%] xs:w-[400px] bg-white overflow-y-scroll">
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
            <FilterByCategory queryParams={queryParams} setQuerParams={setQuerParams} />
            <FilterByBrand queryParams={queryParams} setQuerParams={setQuerParams} />
            <AvailabilityFilter queryParams={queryParams} setQuerParams={setQuerParams} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSidbar;
