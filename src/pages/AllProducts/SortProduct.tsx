/* eslint-disable react-hooks/exhaustive-deps */
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BiSort } from "react-icons/bi";
import { TFilterParams } from ".";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
type TSortProductProps = {
  queryParams: TFilterParams[];
  setQuerParams: React.Dispatch<React.SetStateAction<TFilterParams[]>>;
};
const SortProduct = ({ queryParams, setQuerParams }: TSortProductProps) => {
  const [searchParams] = useSearchParams();
  const [selectedSort, setSelectedSort] = useState<string>("");

  // ✅ Map URL params to sorting values
  const getSortOptionFromParams = () => {
    const sortBy = searchParams.get("sortBy");
    const sortOrder = searchParams.get("sortOrder");

    if (sortBy === "name" && sortOrder === "asc") return "alphabetical_asc";
    if (sortBy === "name" && sortOrder === "desc") return "alphabetical_desc";
    if (sortBy === "price" && sortOrder === "asc") return "price_low_to_high";
    if (sortBy === "price" && sortOrder === "desc") return "price_high_to_low";
    if (sortBy === "createdAt" && sortOrder === "asc") return "date_old_to_new";
    if (sortBy === "createdAt" && sortOrder === "desc") return "date_new_to_old";
    return "";
  };

  // ✅ Load initial sort value from URL
  useEffect(() => {
    setSelectedSort(getSortOptionFromParams());
  }, []);
  const handleSortChange = (value: string) => {
    const setSortQueryParams = (sortBy: string, sortOrder: string) => {
      const filterOutOldQuery = queryParams.filter((item) => item.name !== "sortBy" && item.name !== "sortOrder");
      const state: TFilterParams[] = [...filterOutOldQuery, { name: "sortBy", value: sortBy }, { name: "sortOrder", value: sortOrder }];
      setQuerParams(state);
    };
    // Implement sorting logic here based on the selected option
    switch (value) {
      case "alphabetical_asc":
        // Sort products alphabetically (A-Z)
        {
          setSortQueryParams("name", "asc");
          setSelectedSort("alphabetical_asc");
        }
        break;
      case "alphabetical_desc":
        // Sort products alphabetically (Z-A)
        {
          setSortQueryParams("name", "desc");
          setSelectedSort("alphabetical_desc");
        }
        break;
      case "price_low_to_high":
        // Sort products by price, low to high
        {
          setSortQueryParams("price", "asc");
          setSelectedSort("price_low_to_high");
        }
        break;
      case "price_high_to_low":
        // Sort products by price, high to low
        {
          setSortQueryParams("price", "desc");
          setSelectedSort("price_high_to_low");
        }
        break;
      case "date_old_to_new":
        // Sort products by date, old to new
        {
          setSortQueryParams("createdAt", "asc");
          setSelectedSort("date_old_to_new");
        }
        break;
      case "date_new_to_old":
        // Sort products by date, new to old
        {
          setSortQueryParams("createdAt", "desc");
          setSelectedSort("date_new_to_old");
        }
        break;
      default:
        break;
    }
  };

  return (
    <Select value={selectedSort} onValueChange={handleSortChange}>
      <SelectTrigger className="w-full sm:w-[200px]">
        <SelectValue placeholder="Sort Products" className="text-slate-500" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel className="flex items-center gap-1">
            <BiSort size={12} />
            <span>Sort Options</span>
          </SelectLabel>
          <SelectItem value="alphabetical_asc">Alphabetically, A-Z</SelectItem>
          <SelectItem value="alphabetical_desc">Alphabetically, Z-A</SelectItem>
          <SelectItem value="price_low_to_high">Price, low to high</SelectItem>
          <SelectItem value="price_high_to_low">Price, high to low</SelectItem>
          <SelectItem value="date_old_to_new">Date, old to new</SelectItem>
          <SelectItem value="date_new_to_old">Date, new to old</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SortProduct;
