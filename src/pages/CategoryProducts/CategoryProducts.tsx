/* eslint-disable react-hooks/exhaustive-deps */
import Section from "@/components/shared/Section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetAllProductsOfACategoryQuery } from "@/redux/features/product/product.api";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TMeta } from "@/types/global";
import PageHeader from "@/components/shared/PageHeader";
import SearchProducts from "../AllProducts/SearchProducts";
import SortProduct from "../AllProducts/SortProduct";
import FilterSidbar from "../AllProducts/FilterSidbar";
import ProductCard from "../AllProducts/ProductCard";
import { PaginationProduct } from "../AllProducts/Pagination";
import PriceFilter from "../AllProducts/PriceFilter";
import FilterByCategory from "../AllProducts/FilterByCategory";
import FilterByBrand from "../AllProducts/FilterByBrand";
import AvailabilityFilter from "../AllProducts/AvailabilityFilter";
import { useGetAllSubCategoriesOfACategoryQuery, useGetCategoryDetailsQuery } from "@/redux/features/categories/categories.api";
import ProductCardSkeleton from "@/components/shared/loader/ProductCardSkeletonLoader";

export type TFilterParams = {
  name: string;
  value: string | number | boolean;
};
const CategoryProducts = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
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
  const {
    data: productData,
    isLoading,
    isFetching,
  } = useGetAllProductsOfACategoryQuery({ params: [...queryParams, { name: "limit", value: 12 }], id: categoryId });

  const { data: categories, isLoading: isCategoryLoading } = useGetAllSubCategoriesOfACategoryQuery(categoryId);
  const { data: categoriesDetails } = useGetCategoryDetailsQuery({ id: categoryId });

  return (
    <>
      {/* Page Header  */}
      <PageHeader title={categoriesDetails?.data?.name}>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hover:text-primary font-medium">
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="font-medium">
              <BreadcrumbPage>{categoriesDetails?.data?.slug}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>

      <Section>
        <div className="grid grid-cols-1 bs:grid-cols-12 gap-5 pt-20 pb-24">
          <div className="bs:col-span-8 xl:col-span-9">
            {/* search option  */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between pb-2 border-b-2 border-light-border dark:border-dark-muted-border">
              <div>
                <SearchProducts queryParams={queryParams} setQuerParams={setQuerParams} />
              </div>
              <div className="flex items-center gap-4">
                <SortProduct queryParams={queryParams} setQuerParams={setQuerParams} />
                <FilterSidbar
                  queryParams={queryParams}
                  setQuerParams={setQuerParams}
                  initialMinPrice={0}
                  initialMaxPrice={10000}
                  categories={categories?.data}
                  isLoading={isCategoryLoading}
                />
              </div>
            </div>

            {/* Products list  */}
            {isLoading || isFetching ? (
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 bs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-6 w-full mb-16">
                {[...Array(12)].map((_, idx) => (
                  <ProductCardSkeleton key={idx} />
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 bs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-6 w-full mb-16">
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

                {/* Pagination  */}
                {productData?.data && productData?.data.length > 0 && (
                  <PaginationProduct meta={productData?.meta as TMeta} page={page} setPage={setPage} />
                )}
              </>
            )}
          </div>

          {/* Filter Sidebar  */}
          <div className="bs:col-span-4 xl:col-span-3 px-5 hidden bs:block">
            <div className="flex items-center justify-between pt-3 pb-4 border-b-2 border-light-border dark:border-dark-muted-border w-full">
              <div className="font-semibold text-light-primary-text dark:text-dark-primary-txt text-xl">Filter Products</div>
              {/* {queryParams.length > 0 && (
                <Button variant={"primary"} onClick={() => setQuerParams([])}>
                  Clear Filter
                </Button>
              )} */}
            </div>
            <PriceFilter queryParams={queryParams} setQuerParams={setQuerParams} initialMinPrice={0} initialMaxPrice={20000} />
            <FilterByCategory queryParams={queryParams} setQuerParams={setQuerParams} categories={categories?.data} isLoading={isCategoryLoading} />
            <FilterByBrand queryParams={queryParams} setQuerParams={setQuerParams} />
            <AvailabilityFilter queryParams={queryParams} setQuerParams={setQuerParams} />
          </div>
        </div>
      </Section>
    </>
  );
};

export default CategoryProducts;
