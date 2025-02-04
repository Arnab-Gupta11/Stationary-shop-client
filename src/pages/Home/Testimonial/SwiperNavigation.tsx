import { GrFormPreviousLink } from "react-icons/gr";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>
        <GrFormPreviousLink />
      </button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
};
