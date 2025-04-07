import { Button } from "@/components/ui/button";
import Section from "@/components/shared/Section";
import BannerSlider from "./BannerSlider";
import { motion } from "framer-motion";
import { TbShoppingBag } from "react-icons/tb";
import { Link } from "react-router-dom";
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
};
const Banner = () => {
  return (
    <div className="bg-main-bg-light dark:bg-main-bg-dark overflow-x-hidden">
      <Section>
        <div className="grid grid-cols-1 bs:grid-cols-2 items-center  justify-between py-12 h-full">
          <motion.div
            className="lg:w-full flex justify-center bs:justify-start order-2 bs:order-1 items-center bs-mx:pb-16"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div>
              <motion.div className="flex bs-mx:justify-center" variants={textVariants}></motion.div>

              <motion.p
                className="text-xl text-light-primary-text dark:text-dark-primary-txt sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-5 text-center bs:text-left mt-5 font-Aclonica"
                style={{ lineHeight: "1.4" }}
                variants={textVariants}
              >
                Your One-Stop <span className="text-primary-bg">Stationery</span> Haven!
              </motion.p>

              <motion.div
                className="flex bs-mx:justify-center text-light-secondary-text dark:text-dark-secondary-txt font-semibold text-xs md:text-base bs:text-lg py-1 mb-8 text-center bs:text-left"
                variants={textVariants}
              >
                <div>
                  <p className="mb-0.5">Discover premium stationery for work, school, and creativity.</p>
                  <p> Shop now for quality you can trust!</p>
                </div>
              </motion.div>

              <motion.div className="flex justify-center bs:justify-start" variants={textVariants}>
                <Link to={"/shop"}>
                  <Button variant={"primary"} className="sm:py-6 sm:px-12 flex items-center gap-2">
                    <TbShoppingBag />
                    <span> Shop Now</span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="w-4/5 bs:w-full h-full mx-auto order-1 bs:order-2 bs:mt-0 xl:ml-10 my-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <BannerSlider />
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Banner;
