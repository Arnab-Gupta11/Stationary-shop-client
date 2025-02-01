import Section from "@/components/shared/Section";
import about1 from "../../../public/images/about/about1.jpg";
import about2 from "../../../public/images/about/about2.jpg";
import "./about.css";
import AboutImage from "./AboutImage";
import AboutLeftSection from "./AboutLeftSection";
import AboutRightSection from "./AboutRightSection";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="h-40  bg-secondary-bg-light flex items-center justify-center my-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900">All Products</h1>
          <div className="flex justify-center mt-3">
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
          </div>
        </div>
      </div>
      <div className="bg-light-bg-100 dark:bg-dark-bg-200 my-20">
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
        </Section>
      </div>
    </>
  );
};

export default About;
