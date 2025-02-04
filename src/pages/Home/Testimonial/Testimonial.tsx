import Section from "@/components/shared/Section";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { A11y, Navigation, Pagination } from "swiper/modules";
import testimonialsData from "@/data/testimonial.data";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

const Testimonial = () => {
  const SlideRef = useRef<SwiperType | null>(null);
  const [slideBegOrNot, setSlideByState] = useState({
    isFirst: true,
    isLast: false,
  });

  const handleNext = () => {
    if (SlideRef.current) {
      SlideRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (SlideRef.current) {
      SlideRef.current.slidePrev();
    }
  };

  const onSlideChange = (swiper: SwiperType) => {
    setSlideByState({
      isFirst: swiper.isBeginning,
      isLast: swiper.isEnd,
    });
  };

  const { isLast, isFirst } = slideBegOrNot;

  return (
    <div className="pt-20 pb-24">
      <Section>
        <div className="text-center">
          <h1 className="text-base xsm:text-lg md:text-2xl font-bold mb-3 text-slate-900">
            What Our <span className="text-primary-bg">Clients Say</span>
          </h1>
          <p className="text-xs xsm:text-sm md:text-base font-medium text-slate-700 mb-10">
            Hear from our happy customers about their experience with us.
          </p>
        </div>

        <div className="relative">
          {/* Heading and Pagination Controls */}
          <div className="flex justify-end items-center mb-4">
            {/* Pagination and Navigation Buttons */}
            <div className="flex items-center gap-4 bg-white">
              {/* <p className="swiper-paginations text-sm font-medium text-gray-700"></p> */}
              <div className="flex items-center gap-2">
                {/* Previous Button */}
                <button
                  onClick={!isFirst ? handlePrev : undefined}
                  className={`w-10 h-10 flex items-center justify-center shadow-sm shadow-slate-200 hover:shadow-slate-300 rounded-md transition ${
                    isFirst ? "text-gray-400 cursor-not-allowed" : " hover:bg-primary hover:text-primary-bg duration-700 cursor-pointer"
                  }`}
                >
                  <BsArrowLeft className="text-xl " />
                </button>

                {/* Next Button */}
                <button
                  onClick={!isLast ? handleNext : undefined}
                  className={`w-10 h-10 flex items-center justify-center shadow-sm shadow-slate-200 hover:shadow-slate-300 rounded-md transition ${
                    isLast ? "text-gray-400 cursor-not-allowed" : " hover:bg-primary hover:text-primary-bg duration-700 cursor-pointer"
                  }`}
                >
                  <BsArrowRight className="text-xl pointer-events-none" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            className="mySwiper"
            onSwiper={(swiper) => (SlideRef.current = swiper)}
            onSlideChange={onSlideChange}
            pagination={{
              el: ".swiper-paginations",
              type: "fraction",
            }}
            navigation={false}
            modules={[Pagination, Navigation, A11y]}
            breakpoints={{
              0: { slidesPerView: 1 },
              390: { slidesPerView: 1.2 },
              // 502: { slidesPerView: 2 },
              750: { slidesPerView: 2 },
              // 992: { slidesPerView: 2.5 },
              1100: { slidesPerView: 3 },
            }}
          >
            {testimonialsData?.map((item) => (
              <SwiperSlide className="z-10 h-auto py-14 pr-5" key={item.id}>
                <TestimonialCard key={item.id} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Section>
    </div>
  );
};

export default Testimonial;
