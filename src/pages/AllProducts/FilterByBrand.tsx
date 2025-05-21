import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { TFilterParams } from ".";
import { ChevronsUpDown } from "lucide-react";
import { TCategoryOptions } from "@/types/category.types";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllBrandsQuery } from "@/redux/features/brand";
type TFilterByCategoryProps = {
  queryParams: TFilterParams[];
  setQuerParams: React.Dispatch<React.SetStateAction<TFilterParams[]>>;
};
const FilterByBrand = ({ queryParams, setQuerParams }: TFilterByCategoryProps) => {
  const { data: brands, isLoading } = useGetAllBrandsQuery(undefined);

  //Update the query params.
  const handleCategoryChange = ({ currentTarget: input }: React.ChangeEvent<HTMLInputElement>) => {
    if (input.checked) {
      const state: TFilterParams[] = [...queryParams, { name: "brand", value: input.value }];
      setQuerParams(state);
    } else {
      const state = queryParams.filter((item) => item.value !== input.value);
      setQuerParams(state);
    }
  };
  return (
    <Collapsible>
      <CollapsibleTrigger className="w-full text-start">
        <div className="flex items-center justify-between pb-4 border-b-2 border-light-border dark:border-dark-muted-border  mt-6 w-full">
          <h1 className="font-semibold text-light-primary-text dark:text-dark-primary-txt text-base w-full">Filter By Brands</h1>
          <ChevronsUpDown className="h-4 w-4 text-light-primary-text dark:text-dark-primary-txt" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-5">
          <div className="flex flex-col">
            {isLoading &&
              [1, 2, 3, 4, 5, 6].map((item) => {
                return (
                  <div key={item} className="flex items-center gap-2 mb-4">
                    <Skeleton className="w-4 h-4 rounded-sm" />
                    <Skeleton className="w-36 h-4 rounded-sm" />
                  </div>
                );
              })}
          </div>
          {brands?.data?.map((item: TCategoryOptions) => (
            <li key={item._id} className="relative flex w-full items-center gap-2.5 mb-2.5">
              <input
                type="checkbox"
                id={item._id}
                value={item._id}
                checked={queryParams.some((param) => param.name === "brand" && param.value === item._id)}
                onChange={handleCategoryChange}
                className="peer relative h-3 w-3 p-0.5 rounded-sm shrink-0 appearance-none focus:outline-none bg-[#E3E3E3] dark:bg-dark-muted-bg checked:bg-[rgb(252,91,111)] dark:checked:bg-[rgb(252,91,111)] checked:ring-primary cursor-pointer checkbox-icon"
              />
              <label
                htmlFor={item._id}
                className="cursor-pointer font-base text-light-secondary-text dark:text-dark-secondary-txt font-medium text-sm"
              >
                {item.name}
              </label>
            </li>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FilterByBrand;
