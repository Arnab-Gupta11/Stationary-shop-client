import ReviewChart from "./ReviewChart";
import StarRating from "./StarRating";
import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { formateDateTime } from "@/utils/formateDateTime";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Review = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-20">
        <div className="md:col-span-7 bs:col-span-8 xl:col-span-9 order-2 md:order-1 w-full">
          <h1 className="text-2xl border-b border-[#f1f1f1] pb-3 text-slate-950">Reviews {<span className="text-slate-500 text-lg">(3)</span>}</h1>
          <div className="w-full flex flex-col gap-4">
            <div className="p-4 rounded-lg shadow-sm shadow-slate-200 border border-[#f1f1f1] mt-3">
              <div className="flex items-start gap-4 w-full">
                <Avatar className="border border-[#f1f1f1] w-16 h-16 ">
                  <AvatarImage src={"https://github.com/shadcn.png"} alt="@shadcn " />
                </Avatar>
                <div className=" w-full">
                  <div className="flex items-center justify-between flex-wrap gap-4 w-full">
                    <div>
                      <h1 className="text-lg sm:text-xl font-semibold text-slate-900">Arnab Gupta</h1>
                      <span className="text-xs sm:text-sm font-medium text-slate-500">{formateDateTime("2025-02-02T16:10:45.924+00:00")}</span>
                    </div>
                    <StarRating />
                  </div>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <p className="text-sm sm:text-base mt-4 text-slate-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium.</p>
                    <div className="flex items-center gap-3">
                      <CiEdit size={20} />
                      <MdDeleteOutline size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ReviewCard />
          </div>
        </div>
        <div className="md:col-span-5 bs:col-span-4 xl:col-span-3 border border-[#f1f1f1] rounded-lg p-3 order-1 md:order-2">
          <h1 className="terxt-2xl font-semibold border-b border-[#f1f1f1] pb-2">Review Summary</h1>
          <div className="border border-gray-200 mt-3 flex items-center gap-3 rounded-lg p-3 shadow-md">
            <h1 className="text-6xl font-bold text-primary-text">4.8</h1>
            <div>
              <span>
                <StarRating />
              </span>
              <span className="text-sm text-slate-700 font-medium">Bases on 20 reviews</span>
            </div>
          </div>
          <div>
            <ReviewChart />
            <ReviewForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
