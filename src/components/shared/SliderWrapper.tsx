/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

type TSliderProps = {
  children: ReactNode;
  sliderRef: React.MutableRefObject<SwiperCore | null>;
  isBeginning: boolean;
  setIsBeginning: React.Dispatch<React.SetStateAction<boolean>>;
  isEnd: boolean;
  setIsEnd: React.Dispatch<React.SetStateAction<boolean>>;
  breakpoints?: any;
};

const defaultBreakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 20,
  },
};

const SliderWrapper = ({ children, sliderRef, isBeginning, setIsBeginning, isEnd, setIsEnd, breakpoints = defaultBreakpoints }: TSliderProps) => {
  const handleSwiperEvents = (swiper: SwiperCore) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="relative group/slider">
      <Swiper
        onSwiper={(swiper) => {
          sliderRef.current = swiper;
          handleSwiperEvents(swiper);
        }}
        onSlideChange={handleSwiperEvents}
        breakpoints={breakpoints}
        modules={[Navigation]}
        className="mySwiper z-0"
      >
        {children}
      </Swiper>

      {!isBeginning && (
        <button
          onClick={() => sliderRef.current?.slidePrev()}
          className="absolute z-10 top-1/2 -translate-y-1/2 bg-button-gradient text-white shadow hover:bg-button-gradient-hover font-semibold rounded-[10px] w-7 h-7 flex items-center justify-center cursor-pointer opacity-0 left-0 group-hover/slider:opacity-100 group-hover/slider:left-2 duration-700 transition-all"
        >
          <TbArrowBadgeLeft className="text-lg" />
        </button>
      )}

      {!isEnd && (
        <button
          onClick={() => sliderRef.current?.slideNext()}
          className="absolute z-10 top-1/2 -translate-y-1/2 bg-button-gradient text-white shadow hover:bg-button-gradient-hover font-semibold rounded-[10px] w-7 h-7 flex items-center justify-center cursor-pointer opacity-0 right-0 group-hover/slider:opacity-100 group-hover/slider:right-2 duration-700 transition-all"
        >
          <TbArrowBadgeRight className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default SliderWrapper;
