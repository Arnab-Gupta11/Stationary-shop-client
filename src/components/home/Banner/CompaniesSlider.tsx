import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { companies } from "@/data/companies";
import Autoplay from "embla-carousel-autoplay";
// import companies from "../../../../data/Co";
import Image from "next/image";
const CompaniesSlider = () => {
  return (
    <div className="bg-secondary-bg-light dark:bg-secondary-bg-dark rounded-sm mt-5 mx-5">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full py-10"
      >
        <CarouselContent className="flex gap-5 sm:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem key={id} className="basis-1/3 lg:basis-1/6 ">
              <Image src={path} alt={name} width={100} height={100} className="h-9 sm:h-14 object-contain" />
              {/* <span>{name}</span> */}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CompaniesSlider;
