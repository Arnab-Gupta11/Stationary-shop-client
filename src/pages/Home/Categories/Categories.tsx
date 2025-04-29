import { useRef, useState } from "react";
import Section from "@/components/shared/Section";
import SectionHeader from "../SectionHeader/SectionHeader";
import SliderWrapper from "@/components/shared/SliderWrapper";
import { SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import product from "@/assets/images/banner/banner1.png";

const Categories = () => {
  const sliderRef = useRef<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const categories = [1, 2, 3, 4, 5, 6, 7, 8];

  // Breakpoints same as SliderWrapper
  const breakpoints = {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  };

  return (
    <div className="pt-24">
      <Section>
        <SectionHeader heading="Browse" subheading="Categories" />
        <SliderWrapper
          sliderRef={sliderRef}
          isBeginning={isBeginning}
          setIsBeginning={setIsBeginning}
          isEnd={isEnd}
          setIsEnd={setIsEnd}
          breakpoints={breakpoints}
        >
          {categories.map((item) => (
            <SwiperSlide key={item}>
              <div className="flex flex-col items-center justify-center shadow-card-shadow-light rounded-3xl p-4 bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-light-card-border dark:border-dark-border w-full">
                <img src={product} alt="Category" className="border rounded-3xl w-full h-40 object-fill" />
                <h1 className="text-base font-bold text-light-primary-text dark:text-dark-primary-txt pt-3">Bags and Cases</h1>
              </div>
            </SwiperSlide>
          ))}
        </SliderWrapper>
      </Section>
    </div>
  );
};

export default Categories;
