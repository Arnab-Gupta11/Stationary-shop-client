/* eslint-disable react-hooks/exhaustive-deps */
import Section from "@/components/shared/Section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
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
import FilterSidbar from "./FilterSidbar";
import PageHeader from "@/components/shared/PageHeader";
export type TFilterParams = {
  name: string;
  value: string | number | boolean;
};
const AllProductsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  //Restore filters from URL params on page load
  const getFilterFromUrl = () => {
    const params: TFilterParams[] = [];
    searchParams.forEach((value, name) => {
      params.push({ name, value: isNaN(Number(value)) ? value : Number(value) });
    });
    return params;
  };

  const [queryParams, setQuerParams] = useState<TFilterParams[]>(getFilterFromUrl());
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);

  // Update filters in the URL whenever they change
  useEffect(() => {
    const params = new URLSearchParams();
    queryParams.forEach((item) => {
      params.append(item.name, String(item.value));
    });
    params.set("page", String(page));
    navigate(`?${params.toString()}`, { replace: true });
  }, [queryParams, page, navigate]);
  useEffect(() => {
    const updatedQueryParams = queryParams.filter((item) => item.name !== "page");
    setQuerParams([...updatedQueryParams, { name: "page", value: page }]);
  }, [page]);
  const { data: productData, isLoading, isFetching } = useGetAllProductsQuery(queryParams);

  return (
    <>
      <PageHeader>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Shop</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>

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
                <FilterSidbar queryParams={queryParams} setQuerParams={setQuerParams} initialMinPrice={0} initialMaxPrice={10000} />
              </div>
            </div>
            {isLoading || isFetching ? (
              <Loader />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 pt-6 w-full mb-16">
                {productData?.data && productData?.data?.length > 0 ? (
                  productData?.data?.map((product) => <ProductCard key={product._id} product={product} />)
                ) : (
                  <div className="min-h-[calc(100vh-100px)] col-span-3 flex items-center justify-center">
                    <div className="text-center w-full">
                      <div className="text-slate-500 font-semibold text-base md:text-2xl flex items-center justify-center gap-1 md:gap-5">
                        <MdProductionQuantityLimits /> <span> No products match your selection.</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              // </>
            )}
            <PaginationProduct meta={productData?.meta as TMeta} page={page} setPage={setPage} />
          </div>

          <div className="bs:col-span-4 xl:col-span-3 px-5 hidden bs:block">
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
