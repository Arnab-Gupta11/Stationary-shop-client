import { Button } from "@/components/ui/button";

import Section from "@/components/shared/Section";
import BannerSlider from "./BannerSlider";
const Banner = () => {
  return (
    <div>
      <div className="bg-secondary-bg-light ">
        <Section>
          {/* <div className="flex justify-between items-start "> */}
          <div className="grid grid-cols-1 bs:grid-cols-2 justify-between h-fit pt-28">
            <div className="lg:w-full h-full flex justify-center  bs:justify-start order-2 bs:order-1 items-center bs-mx:pb-16">
              <div>
                <div className=" flex bs-mx:justify-center">
                  <span className="bg-primary-bg-light dark:bg-secondary-bg-dark  px-3 rounded-lg text-slate-600 font-bold text-[9px] xsm:text-xs md:text-sm py-1 shadow-md text-center bs:text-left">
                    ⭐ Special Offer: Flat <span className="text-primary-bg">20%</span> off on your first order! ⭐
                  </span>
                </div>
                <h2 className="text-xl text-light-text-100 dark:text-dark-text-100 md:text-4xl lg:text-6xl font-bold mb-4 md:mb-5 text-center bs:text-left mt-5 text-slate-900">
                  Your One-Stop <span className="text-primary-bg">Stationery</span> Haven!
                </h2>
                <div className=" flex bs-mx:justify-center">
                  <span className="text-slate-700 font-semibold text-[10px] xsm:text-xs md:text-base py-1 mb-8 text-center bs:text-left">
                    Discover premium stationery for work, school, and creativity.
                    <br /> Shop now for quality you can trust!
                  </span>
                </div>
                <div className="flex justify-center bs:justify-start">
                  <Button>Shop Now</Button>
                </div>
              </div>
            </div>
            <div className="w-4/5 bs:w-full h-full mx-auto order-1 bs:order-2  bs:mt-0 xl:ml-10 my-auto ">
              <BannerSlider />
            </div>
          </div>
          {/* </div> */}
        </Section>
      </div>
    </div>
  );
};

export default Banner;
