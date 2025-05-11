import Section from "@/components/shared/Section";
import { useGetAllProductsQuery } from "@/redux/features/product/product.api";
import ProductCard from "@/pages/AllProducts/ProductCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import SliderWrapper from "@/components/shared/SliderWrapper";
import SwiperCore from "swiper";
import { useRef, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { IProduct } from "@/types/product.types";
import ProductCardSkeleton from "@/components/shared/loader/ProductCardSkeletonLoader";
const NewArrivalsProducts = () => {
  const sliderRef = useRef<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(true);
  const { data: productData, isLoading } = useGetAllProductsQuery([{ name: "limit", value: 8 }]);
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  };
  return (
    <div className="pt-24">
      <Section>
        {/* Heading  */}
        <SectionHeader heading="New" subheading="Arrivals" />

        {isLoading && (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
            {Array.from({ length: 5 }).map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))}
          </div>
        )}

        {!isLoading && (
          <SliderWrapper
            sliderRef={sliderRef}
            isBeginning={isBeginning}
            setIsBeginning={setIsBeginning}
            isEnd={isEnd}
            setIsEnd={setIsEnd}
            breakpoints={breakpoints}
          >
            <div className="flex items-stretch">
              {productData?.data?.map((item: IProduct) => (
                <SwiperSlide key={item?._id} className="h-full">
                  <ProductCard product={item} />
                </SwiperSlide>
              ))}
            </div>
          </SliderWrapper>
        )}
      </Section>
    </div>
  );
};

export default NewArrivalsProducts;
