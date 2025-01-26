"use client";
import Lottie from "lottie-react";
import banner from "../../../../../public/image/banner/banner.json";
import { Button } from "@/components/ui/button";
import CompaniesSlider from "./CompaniesSlider";
const Banner = () => {
  return (
    <div>
      <div className="bg-primary-bg-light dark:bg-[#010917] pb-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex justify-center items-start pt-5 sm:pt-10 bs:pt-20">
            <div className="grid grid-cols-1 bs:grid-cols-2 gap-3 bs:gap-7 justify-center items-center mx-5 bs:px-20 lg:mx-0 ">
              <div className="lg:w-full h-full flex justify-center bs:ml-5 bs:justify-start items-center order-2 bs:order-1">
                <div>
                  <div className=" flex bs-mx:justify-center">
                    <span className="bg-secondary-bg-light dark:bg-secondary-bg-dark  px-3 rounded-lg text-slate-600 dark:text-slate-300 font-semibold text-[9px] xsm:text-xs md:text-sm py-1">
                      One Platform, Endless Career Possibilities
                    </span>
                  </div>
                  <h2 className="text-xl text-light-text-100 dark:text-dark-text-100 md:text-4xl lg:text-6xl font-Cormorant-Garamond font-bold mb-5 md:mb-10 text-center bs:text-left mt-5 text-slate-900 dark:text-slate-200">
                    Find Your Dream Job and Build a Thriving Career Community
                  </h2>
                  <div className="flex justify-center bs:justify-start">
                    <Button>Find Jobs</Button>
                    <Button className="ml-5" variant={"secondary"}>
                      Post New Job
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-4/5 bs:w-full mx-auto order-1 bs:order-2 mt-8 bs:mt-0 xl:ml-10">
                <Lottie animationData={banner} loop={true} />
              </div>
            </div>
          </div>
          <div className="mt-16 text-center font-semibold text-sm xsm:text-base sm:text-xl text-slate-800 dark:text-slate-300 mx-5">
            <p>
              Over <span className="text-primary-text">50,000</span> big companies
            </p>
            <p>
              trust NextHire for their <span className="text-primary-text">Hiring</span>.
            </p>
          </div>
          <CompaniesSlider />
        </div>
      </div>
    </div>
  );
};

export default Banner;
