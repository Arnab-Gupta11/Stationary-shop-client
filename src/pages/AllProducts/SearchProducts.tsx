import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";
import { TFilterParams } from ".";
type TSearchProductsProps = {
  queryParams: TFilterParams[];
  setQuerParams: React.Dispatch<React.SetStateAction<TFilterParams[]>>;
};
const SearchProducts = ({ queryParams, setQuerParams }: TSearchProductsProps) => {
  const handleSearchProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterOutOldMinPriceFromQuery = queryParams.filter((item) => item.name !== "searchTerm");
    const state: TFilterParams[] = [...filterOutOldMinPriceFromQuery, { name: "searchTerm", value: e.target.value }];
    setQuerParams(state);
  };
  return (
    <div className="relative">
      <Search className="absolute top-3 left-2 text-slate-500" size={14} />
      <Input
        type="text"
        onChange={handleSearchProducts}
        placeholder="Search Products..."
        className="rounded-lg focus-visible:ring-0 w-56 pl-8 text-slate-700 font-normal"
      />
    </div>
  );
};

export default SearchProducts;
