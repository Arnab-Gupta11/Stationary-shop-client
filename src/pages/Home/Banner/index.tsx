import { Button } from "@/components/ui/button";
import Section from "@/components/shared/Section";
import BannerSlider from "./BannerSlider";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
};

const Banner = () => {
  return (
    <div className="bg-secondary-bg-light">
      <Section>
        <div className="grid grid-cols-1 bs:grid-cols-2 justify-between h-fit pt-28">
          <motion.div
            className="lg:w-full h-full flex justify-center bs:justify-start order-2 bs:order-1 items-center bs-mx:pb-16"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div>
              <motion.div className="flex bs-mx:justify-center" variants={textVariants}>
                <span className="bg-primary-bg-light dark:bg-secondary-bg-dark px-3 rounded-lg text-slate-600 font-bold text-[9px] xsm:text-xs md:text-sm py-1 shadow-md text-center bs:text-left">
                  ⭐ Special Offer: Flat <span className="text-primary-bg">20%</span> off on your first order! ⭐
                </span>
              </motion.div>

              <motion.h2
                className="text-xl text-light-text-100 dark:text-dark-text-100 md:text-4xl lg:text-6xl font-bold mb-4 md:mb-5 text-center bs:text-left mt-5 text-slate-900"
                variants={textVariants}
              >
                Your One-Stop <span className="text-primary-bg">Stationery</span> Haven!
              </motion.h2>

              <motion.div className="flex bs-mx:justify-center" variants={textVariants}>
                <span className="text-slate-700 font-semibold text-[10px] xsm:text-xs md:text-base py-1 mb-8 text-center bs:text-left">
                  Discover premium stationery for work, school, and creativity.
                  <br /> Shop now for quality you can trust!
                </span>
              </motion.div>

              <motion.div className="flex justify-center bs:justify-start" variants={textVariants}>
                <Button>Shop Now</Button>
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
