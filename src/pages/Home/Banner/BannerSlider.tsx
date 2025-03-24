import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import banner1 from "../../../assets/images/banner/banner1.png";
import banner2 from "../../../assets/images/banner/banner2.png";
import banner3 from "../../../assets/images/banner/banner3.png";

const BannerSlider = () => {
  const bannerImages = [
    { src: banner1, alt: "banner1" },
    { src: banner2, alt: "banner2" },
    { src: banner3, alt: "banner3" },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {bannerImages.map((item, idx) => (
          <CarouselItem key={idx}>
            <motion.img
              src={item.src}
              alt={item.alt}
              className="w-full aspect-square bs:h-[500px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default BannerSlider;
