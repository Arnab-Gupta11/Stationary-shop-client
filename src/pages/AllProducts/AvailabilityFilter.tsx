import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface AvailabilityFilterProps {
  handleOptionChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedOption: string;
}

const AvailabilityFilter: React.FC<AvailabilityFilterProps> = ({ handleOptionChange, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
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
  return (
    <div className="mt-6">
      <Collapsible>
        <CollapsibleTrigger className="w-full" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex items-center justify-between pb-4 border-b-[1px] border-b-[#f1f1f1] w-full">
            <div className="font-semibold text-slate-800 text-base">Filter By Availability</div>
            <div>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-5">
          {availability.map((item) => (
            <div key={item.value} className="mb-2.5">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value={item.value}
                  checked={selectedOption === item.value}
                  onChange={handleOptionChange}
                  className="peer appearance-none w-3 h-3 p-0.5 bg-[#E3E3E3] rounded-full checked:bg-primary-bg checked:ring-primary-text cursor-pointer shrink-0"
                />
                <span className="w-full cursor-pointer font-base text-slate-600 peer-checked:text-slate-800 text-sm font-base">{item.label}</span>
              </label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default AvailabilityFilter;
