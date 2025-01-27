import React, { useState } from "react";

interface PriceFilterProps {
  onPriceChange: (min: number, max: number) => void;
  initialMinPrice?: number;
  initialMaxPrice?: number;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onPriceChange, initialMinPrice = 0, initialMaxPrice = 100 }) => {
  const [minPrice, setMinPrice] = useState<number>(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState<number>(initialMaxPrice);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < maxPrice) {
      setMinPrice(value);
      onPriceChange(value, maxPrice); // Update parent with new min and max
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > minPrice) {
      setMaxPrice(value);
      onPriceChange(minPrice, value); // Update parent with new min and max
    }
  };

  return (
    <div className="space-y-4 mt-6">
      <h3 className="font-semibold text-slate-800 text-base pb-4 border-b-[1px] border-b-[#f1f1f1]">Filter by Price</h3>
      <div className="flex items-center justify-between">
        <span className="text-slate-800 text-sm">Min: ${minPrice}</span>
        <span className="text-slate-800 text-sm">Max: ${maxPrice}</span>
      </div>
      <div className="space-y-2">
        <div>
          <label className="text-sm text-slate-700">Set Minimum Price</label>
          <input
            type="range"
            min={initialMinPrice}
            max={initialMaxPrice}
            value={minPrice}
            onChange={handleMinChange}
            className="w-full appearance-none accent-primary-bg rounded-full h-2 border-none outline-none bg-green-200"
            style={{
              background: `linear-gradient(to right, #D51243 ${(minPrice / initialMaxPrice) * 100}%, #f1f1f1 ${(minPrice / initialMaxPrice) * 100}%)`,
            }}
          />
        </div>
        <div>
          <label className="text-sm text-slate-700">Set Maximum Price</label>
          <input
            type="range"
            min={initialMinPrice}
            max={initialMaxPrice}
            value={maxPrice}
            onChange={handleMaxChange}
            className="w-full appearance-none accent-primary-bg rounded-full h-2 border-none outline-none bg-green-200"
            style={{
              background: `linear-gradient(to right, #D51243 ${(maxPrice / initialMaxPrice) * 100}%, #f1f1f1 ${(maxPrice / initialMaxPrice) * 100}%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
