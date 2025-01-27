import Section from "@/components/shared/Section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import PriceFilter from "./PriceFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import FilterByCategory from "./FilterByCategory";
const AllProductsPage = () => {
  const categories = ["fsaf", "faff", "fsdfasf"];

  const [filterCategory, setFilterCategory] = useState<string[]>([]);
  const handleCategoryChange = ({ currentTarget: input }: React.ChangeEvent<HTMLInputElement>) => {
    if (input.checked) {
      const state: string[] = [...filterCategory, input.value];
      setFilterCategory(state);
      console.log(state.toString());
    } else {
      const state = filterCategory.filter((val) => val !== input.value);
      setFilterCategory(state);
      console.log(state.toString());
    }
  };
  const handlePriceChange = (min: number, max: number) => {
    console.log("Selected Price Range:", min, max);
  };
  const [selectedOption, setSelectedOption] = useState<"all" | "inStock" | "outOfStock">("all");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as "all" | "inStock" | "outOfStock";
    setSelectedOption(value);
  };
  console.log(selectedOption);
  return (
    <>
      <div className="h-40  bg-secondary-bg-light flex items-center justify-center my-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">All Products</h1>
          <div className="flex justify-center mt-3">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Shop</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <Section>
        <div className="grid grid-cols-1 bs:grid-cols-12 gap-5 pt-20 pb-24">
          <div className="bs:col-span-9 border">
            <div>
              <div className="relative">
                <Search className="absolute top-3 left-2 text-slate-500" size={14} />
                <Input
                  type="text"
                  placeholder="Search Products..."
                  className="rounded-lg focus-visible:ring-0 w-56 pl-8 text-slate-700 font-normal"
                />
              </div>
            </div>
          </div>
          <div className="bs:col-span-3 px-5">
            <FilterByCategory categories={categories} handleCategoryChange={handleCategoryChange} />
            <PriceFilter onPriceChange={handlePriceChange} initialMinPrice={0} initialMaxPrice={500} />
            <AvailabilityFilter selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default AllProductsPage;
