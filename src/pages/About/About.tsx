import Section from "@/components/shared/Section";
import about1 from "../../assets/images/about/about1.jpg";
import about2 from "../../assets/images/about/about2.jpg";
import "./about.css";
import AboutImage from "./AboutImage";
import AboutLeftSection from "./AboutLeftSection";
import AboutRightSection from "./AboutRightSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import PageHeader from "@/components/shared/PageHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { teamMembers } from "@/data/teamMember.data";

const About = () => {
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
    <>
      <PageHeader title="About Us">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>
      <div className="mt-20">
        <Section>
          {/* First section */}
          <div className="grid grid-cols-1 bs:grid-cols-2 gap-5 bs:gap-10 items-center group">
            <div className="">
              <AboutImage img={about1} />
            </div>
            <div>
              <AboutLeftSection
                title={"Company Overview"}
                description={
                  "Founded in 2024, Notefy was created to provide a seamless and convenient stationery shopping experience. Our mission is to offer high-quality, reliable, and creative stationery products to help students, professionals, and artists express their ideas, stay organized, and boost productivity. With a wide range of products designed for every need, we’re here to make your work, study, and creativity easier and more enjoyable."
                }
              />
              <AboutLeftSection
                title={"Achievements & Milestones"}
                description={
                  "Since our launch, Notefy has successfully served thousands of customers, providing them with high-quality stationery products to enhance their work and creativity. We're proud to be recognized by [Industry Publication] as one of the top emerging stationery brands in 2024."
                }
              />
            </div>
          </div>
          {/* second section */}
          <div className="grid grid-cols-1 bs:grid-cols-2 gap-5 bs:gap-10 items-center mt-5 md:mt-10 bs:mt-16 justify-end group">
            <div className="text-right order-2 bs:order-1">
              <AboutRightSection
                title={"Vision & Values"}
                description={
                  "Our vision is to be the leading provider of premium stationery products, offering innovative solutions that inspire creativity, productivity, and organization. We value quality, customer satisfaction, and integrity in every product we offer, ensuring that each item enhances your work, study, and artistic endeavors."
                }
              />
              <AboutRightSection
                title={"Our Commitment to Quality"}
                description={
                  "We are dedicated to delivering a top-notch product that evolves with your business. Our customer support team is here to help you every step of the way, ensuring that you get the most out of our system."
                }
              />
            </div>
            <div className="order-1 bs:order-1">
              <AboutImage img={about2} />
            </div>
          </div>

          <div className="pt-28">
            <Section>
              <div className="text-center">
                <h1 className="text-base xsm:text-lg md:text-3xl font-bold text-light-primary-text dark:text-dark-primary-txt  font-Aclonica mb-3">
                  Meet Our <span className="text-primary">Team</span>
                </h1>
                <p className="text-xs xsm:text-sm md:text-base font-medium text-light-secondary-text dark:text-dark-secondary-txt mb-10">
                  Meet our passionate stationery experts!
                </p>
              </div>

              <div className="relative">
                {/* Heading and Pagination Controls */}
                <div className="flex justify-end items-center mb-4">
                  {/* Pagination and Navigation Buttons */}
                  <div className="flex items-center gap-4">
                    {/* <p className="swiper-paginations text-sm font-medium text-gray-700"></p> */}
                    <div className="flex items-center gap-2">
                      {/* Previous Button */}
                      <button
                        onClick={!isFirst ? handlePrev : undefined}
                        className={`w-10 h-10 flex items-center justify-center shadow-sm shadow-slate-200 dark:shadow-slate-800 border-2 border-light-muted-bg dark:border-dark-border bg-button-gradient dark:hover:bg-button-gradient-hover rounded-xl transition-transform ${
                          isFirst ? "opacity-65 cursor-not-allowed" : "duration-700 cursor-pointer opacity-100"
                        }`}
                      >
                        <BsArrowLeft className="text-xl text-dark-primary-txt" />
                      </button>

                      {/* Next Button */}
                      <button
                        onClick={!isLast ? handleNext : undefined}
                        className={`w-10 h-10 flex items-center justify-center shadow-sm shadow-slate-200 dark:shadow-slate-800 border-2 border-light-border dark:border-dark-border bg-button-gradient dark:hover:bg-button-gradient-hover rounded-xl transition-transform ${
                          isLast ? "opacity-65 cursor-not-allowed" : "duration-700 cursor-pointer opacity-100"
                        }`}
                      >
                        <BsArrowRight className="text-xl text-dark-primary-txt pointer-events-none" />
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
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  onSwiper={(swiper) => (SlideRef.current = swiper)}
                  onSlideChange={onSlideChange}
                  pagination={{
                    el: ".swiper-paginations",
                    type: "fraction",
                  }}
                  navigation={false}
                  modules={[Pagination, Navigation, A11y, Autoplay]}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    390: { slidesPerView: 1.2 },
                    // 502: { slidesPerView: 2 },
                    750: { slidesPerView: 3 },
                    // 992: { slidesPerView: 2.5 },
                    1100: { slidesPerView: 4 },
                  }}
                >
                  {teamMembers?.map((item) => (
                    <SwiperSlide className="z-10 h-auto py-14 px-2.5" key={item.id}>
                      <div className="flex flex-col gap-6 mb-20 group relative shadow-box-shadow rounded-3xl overflow-hidden cursor-pointer hover:-translate-y-1 duration-500">
                        <div className="bg-light-muted-bg dark:bg-dark-muted-bg rounded-3xl group-hover:scale-105 duration-700 ease-in-out transition-transform">
                          <img className="w-full object-contain h-64 rounded-3xl" src={item.image} alt="team-member" />
                        </div>

                        <div className="flex flex-col gap-1 items-center">
                          <h1 className="text-lg sm:text-xl font-bold text-light-primary-text dark:text-dark-primary-txt text-center">{item.name}</h1>
                          <p className="text-sm text-center sm:text-base text-light-secondary-text dark:text-dark-secondary-txt font-medium pb-5">
                            {item.role}{" "}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Section>
          </div>
        </Section>
      </div>
    </>
  );
};

export default About;
