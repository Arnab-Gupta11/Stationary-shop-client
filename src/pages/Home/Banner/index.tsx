import { Button } from "@/components/ui/button";

import Section from "@/components/shared/Section";
import BannerSlider from "./BannerSlider";
const Banner = () => {
  return (
    <div>
      <div className="bg-secondary-bg-light pb-10">
        <Section>
          <div className="flex justify-between items-start pt-5 sm:pt-10 bs:pt-20 ">
            <div className="grid grid-cols-1 bs:grid-cols-2 gap-3 bs:gap-7 justify-between items-center mx-5 bs:px-20 lg:mx-0 ">
              <div className="lg:w-full h-full flex justify-start  bs:justify-start items-center order-2 bs:order-1">
                <div>
                  <div className=" flex bs-mx:justify-center">
                    <span className="bg-primary-bg-light dark:bg-secondary-bg-dark  px-3 rounded-lg text-slate-600 dark:text-slate-300 font-bold text-[9px] xsm:text-xs md:text-sm py-1 shadow-md text-center bs:text-left">
                      ⭐ Special Offer: Flat <span className="text-primary-bg">20%</span> off on your first order! ⭐
                    </span>
                  </div>
                  <h2 className="text-xl text-light-text-100 dark:text-dark-text-100 md:text-4xl lg:text-6xl font-Cormorant-Garamond font-bold mb-4 md:mb-5 text-center bs:text-left mt-5 text-slate-900 dark:text-slate-200">
                    Your One-Stop <span className="text-primary-bg">Stationery</span> Haven!
                  </h2>
                  <div className=" flex bs-mx:justify-center">
                    <span className="text-slate-600 font-semibold text-[10px] xsm:text-xs md:text-base py-1 mb-8 text-center bs:text-left">
                      Discover premium stationery for work, school, and creativity. Shop now for quality you can trust!
                    </span>
                  </div>
                  <div className="flex justify-center bs:justify-start">
                    <Button>Shop Now</Button>
                  </div>
                </div>
              </div>
              <div className="w-4/5 bs:w-full mx-auto order-1 bs:order-2 mt-8 bs:mt-0 xl:ml-10">
                <BannerSlider />
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Banner;
