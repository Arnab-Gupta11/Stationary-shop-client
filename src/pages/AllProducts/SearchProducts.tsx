import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";
import { TFilterParams } from ".";
type TSearchProductsProps = {
  queryParams: TFilterParams[];
  setQuerParams: React.Dispatch<React.SetStateAction<TFilterParams[]>>;
};
const SearchProducts = ({ queryParams, setQuerParams }: TSearchProductsProps) => {
  const searchValue = queryParams.find((item) => item.name === "searchTerm");
  const handleSearchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterOutOldMinPriceFromQuery = queryParams.filter((item) => item.name !== "searchTerm");
    if (e.target.value.length > 0) {
      const state: TFilterParams[] = [...filterOutOldMinPriceFromQuery, { name: "searchTerm", value: e.target.value }];
      setQuerParams(state);
    } else {
      const state: TFilterParams[] = [...filterOutOldMinPriceFromQuery];
      setQuerParams(state);
    }
  };
  return (
    <div className="relative">
      <Search className="absolute top-[17px] left-3 text-slate-500" size={14} />
      <Input
        type="text"
        defaultValue={(searchValue?.value as string) || ""}
        onChange={handleSearchProducts}
        placeholder="Search Products..."
        className="focus-visible:ring-0 w-full sm:w-64 pl-8 text-slate-700 font-normal rounded-2xl bg-slate-100 border-slate-200"
      />
    </div>
  );
};

export default SearchProducts;
