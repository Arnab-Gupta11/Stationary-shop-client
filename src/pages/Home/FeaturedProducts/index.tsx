import { GoArrowRight } from "react-icons/go";
import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
import { useGetAllProductsQuery } from "@/redux/features/product/product.api";
import ProductCard from "@/pages/AllProducts/ProductCard";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader/SectionHeader";
const FeaturedProducts = () => {
  const { data: productData } = useGetAllProductsQuery([{ name: "limit", value: 8 }]);
  return (
    <div className="pt-24">
      <Section>
        {/* Heading  */}
        <SectionHeader heading="Featured" subheading="Products" />
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
          {productData?.data &&
            productData?.data?.length > 0 &&
            productData?.data?.map((product) => <ProductCard key={product._id} product={product} />)}
        </div>
        <div className="flex justify-center mt-10 lg:mt-14">
          <Link to={"/shop"}>
            <Button variant={"primary"} className="group flex items-center gap-1 text-center md:py-[22px] md:px-7">
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
