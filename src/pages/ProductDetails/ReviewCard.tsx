import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { formateDateTime } from "@/utils/formateDateTime";
import StarRating from "./StarRating";
const ReviewCard = () => {
  return (
    <div className="p-4 rounded-lg shadow-sm shadow-slate-200">
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
          <div>
            <p className="text-sm sm:text-base mt-4 text-slate-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
