import Section from "@/components/shared/Section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import PriceFilter from "./PriceFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import FilterByCategory from "./FilterByCategory";
import SortProduct from "./SortProduct";
import SearchProducts from "./SearchProducts";
import { useGetAllProductsQuery } from "@/redux/features/product/product.api";
import Loader from "@/components/shared/Loader";
import ProductCard from "./ProductCard";
import { MdProductionQuantityLimits } from "react-icons/md";
import { PaginationProduct } from "./Pagination";
import { TMeta } from "@/types/global";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
export type TFilterParams = {
  name: string;
  value: string | number | boolean;
};
const AllProductsPage = () => {
  const [page, setPage] = useState(1);
  const [queryParams, setQuerParams] = useState<TFilterParams[]>([]);
  const { data: productData, isLoading } = useGetAllProductsQuery([...queryParams, { name: "page", value: page }]);

  const filterRef = useRef<HTMLDivElement>(null); // Create a ref for the filter section
  const handleScrollToFilter = () => {
    if (filterRef.current) {
      filterRef.current.scrollIntoView({ behavior: "smooth" }); // Smoothly scroll to the filter section
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <div className="bs:col-span-8 xl:col-span-9">
            {/* search option  */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between pb-2 border-b-[1px] border-b-[#f1f1f1]">
              <div>
                <SearchProducts queryParams={queryParams} setQuerParams={setQuerParams} />
              </div>
              <div className="flex items-center gap-4">
                <SortProduct queryParams={queryParams} setQuerParams={setQuerParams} />
                <Button className="block bs:hidden" onClick={handleScrollToFilter}>
                  <Filter />
                </Button>
              </div>
            </div>
            {isLoading ? (
              <Loader />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 pt-6 w-full mb-16">
                {productData?.data && productData?.data?.length > 0 ? (
                  productData?.data?.map((product) => <ProductCard key={product._id} product={product} />)
                ) : (
                  <div className="min-h-[calc(100vh-100px)] col-span-3 flex  items-center justify-center">
                    <div className="text-center w-full">
                      <div className="text-slate-500 font-semibold text-2xl flex items-center justify-center gap-5">
                        <MdProductionQuantityLimits /> <span> No products match your selection.</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            <PaginationProduct meta={productData?.meta as TMeta} page={page} setPage={setPage} />
          </div>

          <div ref={filterRef} className="bs:col-span-4 xl:col-span-3 px-5 ">
            <div className="flex items-center justify-between pb-4 border-b-[1px] border-b-[#f1f1f1]">
              <div className="font-semibold text-slate-800 text-lg ">Filter Products</div>
              {/* {queryParams.length > 0 && (
                <Button variant={"primary"} onClick={() => setQuerParams([])}>
                  Clear Filter
                </Button>
              )} */}
            </div>
            <FilterByCategory queryParams={queryParams} setQuerParams={setQuerParams} />
            <PriceFilter queryParams={queryParams} setQuerParams={setQuerParams} initialMinPrice={0} initialMaxPrice={10000} />
            <AvailabilityFilter queryParams={queryParams} setQuerParams={setQuerParams} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default AllProductsPage;
