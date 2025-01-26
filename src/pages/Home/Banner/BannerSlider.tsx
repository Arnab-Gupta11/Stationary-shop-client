import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import banner1 from "../../../../public/images/banner/banner1.png";
import banner2 from "../../../../public/images/banner/banner2.png";
import banner3 from "../../../../public/images/banner/banner3.png";
const BannerSlider = () => {
  const bannerImages = [
    {
      src: banner1,
      alt: "banner1",
    },
    {
      src: banner2,
      alt: "banner2",
    },
    {
      src: banner3,
      alt: "banner3",
    },
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
            <img src={item.src} alt={item.alt} className=" object-contain" />
            {/* <span>{name}</span> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
  <CarouselNext /> */}
    </Carousel>
  );
};

export default BannerSlider;
