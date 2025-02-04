import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { formateDateTime } from "@/utils/formateDateTime";
import StarRating from "./StarRating";
import { TReview } from "@/types/review.types";
const ReviewCard = ({ item }: { item: TReview }) => {
  return (
    <div className="p-4 rounded-lg shadow-sm shadow-slate-200">
      <div className="flex items-start gap-4 w-full">
        <Avatar className="border border-[#f1f1f1] w-16 h-16 ">
          <AvatarImage src={item?.user?.profilePicture || "https://github.com/shadcn.png"} alt="@shadcn " />
        </Avatar>
        <div className=" w-full">
          <div className="flex items-center justify-between flex-wrap gap-4 w-full">
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-slate-900">{item?.user?.fullName}</h1>
              <span className="text-xs sm:text-sm font-medium text-slate-500">{formateDateTime(item?.updatedAt)}</span>
            </div>
            <StarRating rating={item?.rating} starSize={15}/>
          </div>
          <div>
            <p className="text-sm sm:text-base mt-4 text-slate-700">{item?.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
