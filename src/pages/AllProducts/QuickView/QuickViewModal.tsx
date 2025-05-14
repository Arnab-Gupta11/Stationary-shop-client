import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { X } from "lucide-react";
type TQuickViewModal = {
  images: string[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
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
const QuickViewModal: React.FC<TQuickViewModal> = ({ images, open, setOpen }) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [prevImgIdx, setPrevImgIdx] = useState(0);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0">
          <DialogClose asChild>
            <button
              className="absolute right-5 top-5 sm:right-8 sm:top-8 p-2 rounded-full transition z-10"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setOpen(false);
              }}
            >
              <X className="w-8 h-8 sm:w-10 sm:h-10 text-light-primary-text dark:text-light-primary-text hover:text-primary hover:dark:text-primary duration-700 scale-105" />
              <span className="sr-only">Close</span>
            </button>
          </DialogClose>
          <div className="p-2 sm:p-6 overflow-y-auto w-full h-full">
            <div className="bg-light-muted-bg dark:bg-dark-muted-bg  h-[300px] xs:h-[380px] sm:h-[500px] lg:h-[400px] xl:h-[500px] flex justify-center rounded-3xl overflow-x-hidden relative group">
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
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Left Arrow */}
              {activeImgIdx > 0 && (
                <button
                  className="absolute left-4 top-1/2 w-8 h-8 flex items-center justify-center rounded-xl bg-light-muted-bg shadow-box-shadow-light hover:scale-105 active:scale-95 text-slate-900 hover:text-primary duration-700 transition-transform opacity-0 group-hover:opacity-100 group-hover:duration-700 group-hover:transition-opacity cursor-pointer z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setPrevImgIdx(activeImgIdx);
                    setActiveImgIdx((prev) => prev - 1);
                  }}
                >
                  <TbArrowBadgeLeft className="text-3xl" />
                </button>
              )}

              {/* Right Arrow */}
              {activeImgIdx < images.length - 1 && (
                <button
                  className="absolute right-4 top-1/2 w-8 h-8 flex items-center justify-center rounded-xl bg-light-muted-bg shadow-box-shadow-light hover:scale-105 active:scale-95 text-slate-900 hover:text-primary duration-700 transition-transform opacity-0 group-hover:opacity-100 group-hover:duration-700 group-hover:transition-opacity cursor-pointer z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    setPrevImgIdx(activeImgIdx);
                    setActiveImgIdx((prev) => prev + 1);
                  }}
                >
                  <TbArrowBadgeRight className="text-3xl" />
                </button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuickViewModal;
