import { GoArrowRight } from "react-icons/go";
import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/redux/features/product/product.api";
import ProductCard from "@/pages/AllProducts/ProductCard";
import { Link } from "react-router-dom";
const FeaturedProducts = () => {
  const { data: productData } = useGetAllProductsQuery([{ name: "limit", value: 8 }]);
  return (
    <div className="pt-20 ">
      <Section>
        <div className="text-center">
          <h1 className="text-base xsm:text-lg md:text-2xl font-bold mb-3 text-slate-900">
            Featured <span className="text-primary-bg">Products</span>
          </h1>
          <p className="text-xs xsm:text-sm md:text-base font-medium text-slate-700 mb-10">Shop our exclusive selection of top-rated products.</p>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
          {productData?.data &&
            productData?.data?.length > 0 &&
            productData?.data?.map((product) => <ProductCard key={product._id} product={product} />)}
        </div>
        <div className="flex justify-center mt-10 lg:mt-14">
          <Link to={"/shop"}>
            <Button variant={"primary"} className="group flex items-center gap-1 text-center">
              <span>View All</span>
              <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default FeaturedProducts;
