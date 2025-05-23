import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { formateDateTime } from "@/utils/formateDateTime";
import StarRating from "./StarRating";
import { TReview } from "@/types/review.types";
const ReviewCard = ({ item }: { item: TReview }) => {
  return (
    <div className="p-4 rounded-2xl border-2 border-[#f1f1f1] dark:border-dark-border mt-3">
      <div className="flex items-start gap-4 w-full">
        <Avatar className="border-2 border-light-border dark:border-dark-border w-16 h-16 ">
          <AvatarImage src={item?.user?.profilePicture || "https://github.com/shadcn.png"} alt="@shadcn " />
        </Avatar>
        <div className=" w-full">
          <div className="flex items-center justify-between flex-wrap gap-4 w-full">
            <div>
              <h1 className="text-base sm:text-lg font-semibold text-light-primary-text dark:text-dark-primary-txt">{item?.user?.fullName}</h1>
              <span className="text-[10px] sm:text-xs font-medium text-light-secondary-text dark:text-dark-secondary-txt">
                {formateDateTime(item?.createdAt)}
              </span>
            </div>
            <StarRating rating={item?.rating} starSize={15} />
          </div>
          <div>
            <p className="text-sm sm:text-base mt-4 text-slate-600 dark:text-dark-secondary-txt font-medium">{item?.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
