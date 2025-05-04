import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.5 },
    },
  },
  exit: {
    zIndex: 0,
    opacity: 0.5,
    scale: 0.9,
    transition: {
      x: { type: "spring", stiffness: 100, damping: 100 },
      opacity: { duration: 0.1 },
    },
  },
};
const ProductImages = ({ images }: { images: string[] }) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [prevImgIdx, setPrevImgIdx] = useState(0);
  return (
    <div>
      <div className="bg-light-muted-bg dark:bg-dark-muted-bg  h-[300px] xs:h-[380px] sm:h-[500px] lg:h-[400px] xl:h-[500px] flex justify-center rounded-3xl rounded-b-none overflow-x-hidden relative group">
        <AnimatePresence mode="wait">
          {images[activeImgIdx] && (
            <motion.img
              key={`product-image-${activeImgIdx}`}
              src={images[activeImgIdx]}
              alt={"Product Images"}
              className="h-full w-full object-fill aspect-square rounded-3xl p-3"
              custom={activeImgIdx > prevImgIdx ? 1 : -1}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
            />
          )}
        </AnimatePresence>

        {/* Left Arrow */}
        {activeImgIdx > 0 && (
          <span
            className="absolute left-4 top-1/2 w-8 h-8 flex items-center justify-center rounded-xl bg-light-muted-bg shadow-box-shadow-light hover:scale-105 active:scale-95 text-slate-900 hover:text-primary duration-700 transition-transform opacity-0 group-hover:opacity-100 group-hover:duration-700 group-hover:transition-opacity cursor-pointer z-10"
            onClick={() => {
              setPrevImgIdx(activeImgIdx);
              setActiveImgIdx((prev) => prev - 1);
            }}
          >
            <TbArrowBadgeLeft className="text-3xl" />
          </span>
        )}

        {/* Right Arrow */}
        {activeImgIdx < images.length - 1 && (
          <span
            className="absolute right-4 top-1/2 w-8 h-8 flex items-center justify-center rounded-xl bg-light-muted-bg shadow-box-shadow-light hover:scale-105 active:scale-95 text-slate-900 hover:text-primary duration-700 transition-transform opacity-0 group-hover:opacity-100 group-hover:duration-700 group-hover:transition-opacity cursor-pointer z-10"
            onClick={() => {
              setPrevImgIdx(activeImgIdx);
              setActiveImgIdx((prev) => prev + 1);
            }}
          >
            <TbArrowBadgeRight className="text-3xl" />
          </span>
        )}
      </div>
      <div className="bg-light-muted-bg dark:bg-dark-muted-bg rounded-3xl grid grid-cols-4 px-3 pb-3 rounded-t-none gap-2.5">
        {images.map((img, idx) => {
          return (
            <img
              key={idx}
              src={img}
              alt=""
              className={`rounded-xl cursor-pointer w-full h-12 xsm:h-16 xs:h-20 sm:h-28 object-fill ${
                activeImgIdx === idx && "border-primary border-4 brightness-50"
              }`}
              onClick={() => {
                setPrevImgIdx(activeImgIdx);
                setActiveImgIdx(idx);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
