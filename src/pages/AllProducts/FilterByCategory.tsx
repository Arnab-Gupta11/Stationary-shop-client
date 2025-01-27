import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
type TFilterByCategoryProps = {
  categories: string[];
  handleCategoryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const FilterByCategory = ({ categories, handleCategoryChange }: TFilterByCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible>
      <CollapsibleTrigger className="w-full" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between pb-4 border-b-[1px] border-b-[#f1f1f1]">
          <div className="font-semibold text-slate-800 text-base">Category</div>
          <div>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-5">
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
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FilterByCategory;
