import { ITestimonial } from "@/data/testimonial.data";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarRating from "@/pages/ProductDetails/StarRating";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const TestimonialCard = ({ item }: { item: ITestimonial }) => {
  return (
    <div className="shadow-box-shadow rounded-lg min-h-64">
      <div className="relative w-full h-20">
        <Avatar className="border border-[#f1f1f1] w-24 h-24 absolute left-1/2 transform -translate-x-1/2 -top-10 z-10">
          <AvatarImage src={item.image} alt="@shadcn" />
          <AvatarFallback>DP</AvatarFallback>
        </Avatar>
        <RiDoubleQuotesL className="absolute text-3xl top-5 left-5" />
        <RiDoubleQuotesR className="absolute text-3xl top-5 right-5" />
      </div>
      <div className="px-5 pb-5 flex flex-col items-center ">
        <h1 className="text-slate-900 text-lg font-medium text-center mb-2">{item.name}</h1>
        <p className="text-slate-700 text-sm font-normal text-center mb-3">{item.feedback}</p>
        <StarRating rating={item.rating} starSize={17} />
      </div>
    </div>
  );
};

export default TestimonialCard;
