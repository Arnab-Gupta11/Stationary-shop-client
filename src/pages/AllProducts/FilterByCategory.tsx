import { TFilterParams } from ".";
type TFilterByCategoryProps = {
  queryParams: TFilterParams[];
  setQuerParams: React.Dispatch<React.SetStateAction<TFilterParams[]>>;
};
const FilterByCategory = ({ queryParams, setQuerParams }: TFilterByCategoryProps) => {
  const categories = ["Writing", "Office Supplies", "Art Supplies", "Educational", "Technology"];
  const handleCategoryChange = ({ currentTarget: input }: React.ChangeEvent<HTMLInputElement>) => {
    if (input.checked) {
      const state: TFilterParams[] = [...queryParams, { name: "category", value: input.value }];
      setQuerParams(state);
    } else {
      const state = queryParams.filter((item) => item.value !== input.value);
      setQuerParams(state);
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between pb-4 border-b-[1px] border-b-[#f1f1f1]  mt-6">
        <div className="font-semibold text-slate-800 text-base">Filter By Category</div>
      </div>
      <div className="mt-5">
        {categories.map((item) => (
          <li key={item} className="relative flex w-full items-center justify-center gap-2.5 mb-2.5">
            <input
              type="checkbox"
              id={item}
              value={item}
              onChange={handleCategoryChange}
              className="peer relative h-3 w-3 rounded-sm shrink-0 appearance-none focus:outline-none bg-[#E3E3E3] checked:bg-primary-bg checkbox-icon"
            />
            <label htmlFor={item} className="w-full cursor-pointer font-base text-slate-500 peer-checked:text-slate-700 text-sm">
              {item}
            </label>
          </li>
        ))}
      </div>
    </div>
  );
};

export default FilterByCategory;
