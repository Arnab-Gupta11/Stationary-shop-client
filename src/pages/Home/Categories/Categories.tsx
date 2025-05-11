import { useRef, useState } from "react";
import Section from "@/components/shared/Section";
import SectionHeader from "../SectionHeader/SectionHeader";
import SliderWrapper from "@/components/shared/SliderWrapper";
import { SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { useGetAllCategoriesOptionQuery } from "@/redux/features/categories/categories.api";
import { TCategoryOptions } from "@/types/category.types";
import CategoryCardSkeletonLoader from "@/components/shared/loader/CategoryCardSkeltonLoader";
import { Link } from "react-router-dom";

const Categories = () => {
  const sliderRef = useRef<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(true);
  const { data: categoryOption, isLoading: categoryOptionLoading } = useGetAllCategoriesOptionQuery(undefined);
  const breakpoints = {
    0: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  };

  return (
    <div className="pt-24">
      <Section>
        <SectionHeader heading="Browse" subheading="Categories" />
        {categoryOptionLoading && <CategoryCardSkeletonLoader />}
        {!categoryOptionLoading && (
          <SliderWrapper
            sliderRef={sliderRef}
            isBeginning={isBeginning}
            setIsBeginning={setIsBeginning}
            isEnd={isEnd}
            setIsEnd={setIsEnd}
            breakpoints={breakpoints}
          >
            <div className="flex items-stretch">
              {categoryOption?.data?.map((item: TCategoryOptions) => (
                <SwiperSlide key={item?._id} className="h-full">
                  <Link to={`/category/${item?._id}`}>
                    <div className="grid h-full place-items-center hover:cursor-pointer ">
                      <div className="flex flex-col h-full items-center justify-between shadow-card-shadow rounded-3xl p-4 bg-transparent border-2 border-light-border dark:border-dark-border w-full min-h-[180px]">
                        <img src={item?.icon} alt="Category" className="rounded-3xl w-full h-32 object-fill hover:scale-105 duration-700" />
                        <h1 className="text-base font-bold text-light-primary-text dark:text-dark-primary-txt pt-3 text-center">{item?.name}</h1>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          </SliderWrapper>
        )}
      </Section>
    </div>
  );
};

export default Categories;
