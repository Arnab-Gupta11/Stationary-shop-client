import React, { useState } from "react";
import { TFilterParams } from ".";
import { formatPrice } from "@/utils/formatePrice";
import { useSearchParams } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { useTheme } from "@/Provider/ThemeProvider";

type PriceFilterProps = {
  queryParams: TFilterParams[];
  setQuerParams: React.Dispatch<React.SetStateAction<TFilterParams[]>>;
  initialMinPrice?: number;
  initialMaxPrice?: number;
};

const PriceFilter: React.FC<PriceFilterProps> = ({ queryParams, setQuerParams, initialMinPrice = 0, initialMaxPrice = 100 }) => {
  const { theme } = useTheme();
  const [searchParams] = useSearchParams();
  // Get initial price from URL or default values
  const [minPrice, setMinPrice] = useState<number>(Number(searchParams.get("minPrice")) || initialMinPrice);
  const [maxPrice, setMaxPrice] = useState<number>(Number(searchParams.get("maxPrice")) || initialMaxPrice);
  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < maxPrice) {
      setMinPrice(value);
      const isMinPriceAvailable = queryParams?.find((item) => item.name === "minPrice");
      if (!isMinPriceAvailable) {
        const state: TFilterParams[] = [...queryParams, { name: "minPrice", value: value }];
        setQuerParams(state);
      } else {
        const filterOutOldMinPriceFromQuery = queryParams.filter((item) => item.name !== "minPrice");
        const state: TFilterParams[] = [...filterOutOldMinPriceFromQuery, { name: "minPrice", value: value }];
        setQuerParams(state);
      }
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > minPrice) {
      setMaxPrice(value);
      //Checking for maximum value
      const isMaxPriceAvailable = queryParams?.find((item) => item.name === "maxPrice");
      if (!isMaxPriceAvailable) {
        const state: TFilterParams[] = [...queryParams, { name: "maxPrice", value: value }];
        setQuerParams(state);
      } else {
        const filterOutOldMaxPriceFromQuery = queryParams.filter((item) => item.name !== "maxPrice");
        const state: TFilterParams[] = [...filterOutOldMaxPriceFromQuery, { name: "maxPrice", value: value }];
        setQuerParams(state);
      }
    }
  };
  const trackBg = theme === "dark" ? "#1e293b" : "#e5e7eb"; // or use Tailwind token equivalents
  const fillColor = "rgb(252,91,111)";
  return (
    <div className="space-y-4">
      <Collapsible>
        <CollapsibleTrigger className="w-full text-start">
          <div className="flex items-center justify-between pb-4 border-b-2 border-light-border dark:border-dark-muted-border  mt-6 w-full">
            <h1 className="font-semibold text-light-primary-text dark:text-dark-primary-txt text-base w-full">Filter by Price</h1>
            <ChevronsUpDown className="h-4 w-4 text-light-primary-text dark:text-dark-primary-txt" />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex items-center justify-between my-3">
            <h1 className="text-light-secondary-text dark:text-dark-secondary-txt font-medium text-sm">
              <span className="text-light-primary-text dark:text-dark-primary-txt font-semibold">Min:</span> {formatPrice(minPrice)}
            </h1>
            <h1 className="text-light-secondary-text dark:text-dark-secondary-txt font-medium text-sm">
              <span className="text-light-primary-text dark:text-dark-primary-txt font-semibold">Max:</span> {formatPrice(maxPrice)}
            </h1>
          </div>
          <div className="space-y-2">
            <div>
              <label className="text-sm text-light-primary-text dark:text-dark-primary-txt font-semibold">Set Minimum Price</label>
              <input
                type="range"
                min={initialMinPrice}
                max={initialMaxPrice}
                value={minPrice}
                onChange={handleMinChange}
                className="w-full appearance-none accent-primary rounded-full h-2 border-none outline-none"
                style={{
                  background: `linear-gradient(to right, ${fillColor} ${(minPrice / initialMaxPrice) * 100}%, ${trackBg} ${
                    (minPrice / initialMaxPrice) * 100
                  }%)`,
                }}
              />
            </div>
            <div>
              <label className="text-sm text-light-primary-text dark:text-dark-primary-txt font-semibold">Set Maximum Price</label>
              <input
                type="range"
                min={initialMinPrice}
                max={initialMaxPrice}
                value={maxPrice}
                onChange={handleMaxChange}
                className="w-full appearance-none accent-primary rounded-full h-2 border-none outline-none"
                style={{
                  background: `linear-gradient(to right, ${fillColor} ${(maxPrice / initialMaxPrice) * 100}%, ${trackBg} ${
                    (maxPrice / initialMaxPrice) * 100
                  }%)`,
                }}
              />
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default PriceFilter;
