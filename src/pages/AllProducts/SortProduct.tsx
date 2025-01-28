import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TFilterParams } from ".";
type TSortProductProps = {
  queryParams: TFilterParams[];
  setQuerParams: React.Dispatch<React.SetStateAction<TFilterParams[]>>;
};
const SortProduct = ({ queryParams, setQuerParams }: TSortProductProps) => {
  const handleSortChange = (value: string) => {
    console.log("Selected sort option:", value);
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
        }
        break;
      case "alphabetical_desc":
        // Sort products alphabetically (Z-A)
        {
          setSortQueryParams("name", "desc");
        }
        break;
      case "price_low_to_high":
        // Sort products by price, low to high
        {
          setSortQueryParams("price", "asc");
        }
        break;
      case "price_high_to_low":
        // Sort products by price, high to low
        {
          setSortQueryParams("price", "desc");
        }
        break;
      case "date_old_to_new":
        // Sort products by date, old to new
        {
          setSortQueryParams("createdAt", "asc");
        }
        break;
      case "date_new_to_old":
        // Sort products by date, new to old
        {
          setSortQueryParams("createdAt", "desc");
        }
        break;
      default:
        break;
    }
  };

  return (
    <Select onValueChange={handleSortChange}>
      <SelectTrigger className="w-full sm:w-[200px]">
        <SelectValue placeholder="Sort Products" className="text-slate-500" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel>Sort Options</SelectLabel>
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
