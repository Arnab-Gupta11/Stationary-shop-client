import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import FilterByCategory from "./FilterByCategory";
import PriceFilter from "./PriceFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import { TFilterParams } from ".";
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
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-b-[#f1f1f1]">
              <div className="font-semibold text-slate-800 text-lg ">Filter Products</div>
            </div>
            <FilterByCategory queryParams={queryParams} setQuerParams={setQuerParams} />
            <PriceFilter
              queryParams={queryParams}
              setQuerParams={setQuerParams}
              initialMinPrice={initialMinPrice}
              initialMaxPrice={initialMaxPrice}
            />
            <AvailabilityFilter queryParams={queryParams} setQuerParams={setQuerParams} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default FilterSidbar;
