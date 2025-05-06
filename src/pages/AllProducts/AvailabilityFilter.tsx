import React, { useState } from "react";
import { TFilterParams } from ".";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";

interface AvailabilityFilterProps {
  queryParams: TFilterParams[];
  setQuerParams: React.Dispatch<React.SetStateAction<TFilterParams[]>>;
}

const AvailabilityFilter: React.FC<AvailabilityFilterProps> = ({ queryParams, setQuerParams }) => {
  // Determine initial selected option from queryParams
  const inStockParam = queryParams.find((param) => param.name === "inStock");
  let initialSelected: "all" | "inStock" | "outOfStock";
  if (inStockParam?.value == "true") {
    initialSelected = "inStock";
  } else if (inStockParam?.value == "false") {
    initialSelected = "outOfStock";
  } else {
    initialSelected = "all";
  }

  const [selectedOption, setSelectedOption] = useState<"all" | "inStock" | "outOfStock">(initialSelected);
  const availability = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "In Stock",
      value: "inStock",
    },
    {
      label: "Out of Stock",
      value: "outOfStock",
    },
  ];
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as "all" | "inStock" | "outOfStock";
    if (value === "all") {
      const state = queryParams.filter((item) => item.name !== "inStock");
      setQuerParams(state);
    } else if (value === "inStock") {
      const filterOutOldMaxPriceFromQuery = queryParams.filter((item) => item.name !== "inStock");
      const state: TFilterParams[] = [...filterOutOldMaxPriceFromQuery, { name: "inStock", value: "true" }];
      setQuerParams(state);
    } else if (value === "outOfStock") {
      const filterOutOldMaxPriceFromQuery = queryParams.filter((item) => item.name !== "inStock");
      const state: TFilterParams[] = [...filterOutOldMaxPriceFromQuery, { name: "inStock", value: "false" }];
      setQuerParams(state);
    }

    setSelectedOption(value);
  };
  return (
    <Collapsible>
      <CollapsibleTrigger className="w-full text-start">
        <div className="flex items-center justify-between pb-4 border-b-2 border-light-border dark:border-dark-muted-border  mt-6 w-full">
          <h1 className="font-semibold text-light-primary-text dark:text-dark-primary-txt text-base w-full">Filter By Availability</h1>
          <ChevronsUpDown className="h-4 w-4 text-light-primary-text dark:text-dark-primary-txt" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-5">
          {availability.map((item) => (
            <div key={item.value} className="mb-2.5">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value={item.value}
                  checked={selectedOption === item.value}
                  onChange={handleOptionChange}
                  className="peer appearance-none w-3 h-3 p-0.5 bg-[#E3E3E3] dark:bg-dark-muted-bg rounded-full checked:bg-[rgb(252,91,111)] dark:checked:bg-[rgb(252,91,111)] checked:ring-primary cursor-pointer shrink-0"
                />
                <span className="w-full cursor-pointer font-base text-light-secondary-text dark:text-dark-secondary-txt font-medium text-sm font-base">
                  {item.label}
                </span>
              </label>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default AvailabilityFilter;
