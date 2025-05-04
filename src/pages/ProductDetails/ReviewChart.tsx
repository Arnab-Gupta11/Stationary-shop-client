import { Progress } from "@/components/ui/progress";
import { TReview } from "@/types/review.types";
import { FaStar } from "react-icons/fa";

const ReviewChart = ({ review }: { review: TReview[] }) => {
  // Total number of reviews
  const totalReviews = review?.length;

  // Calculate percentages and store in an object
  const ratingPercentages: number[] = [];

  [1, 2, 3, 4, 5].forEach((star) => {
    const count = review?.filter((r) => r.rating === star).length;
    ratingPercentages[star - 1] = Number(((count * 100) / totalReviews).toFixed(2));
  });

  const ratingProgress = ratingPercentages.reverse();

  return (
    <div className="flex flex-col gap-3 border-2 border-light-border dark:border-dark-border mt-3 rounded-lg p-3">
      {ratingProgress?.map((item, idx) => {
        return (
          <div key={idx} className="flex items-center justify-evenly gap-3">
            <div className="flex items-center flex-shrink-0">
              <span className="mt-1 font-semibold text-light-primary-text dark:text-dark-primary-txt flex-shrink-0">
                {ratingPercentages.length - idx}
              </span>
              <FaStar size={14} className="text-yellow-400 ml-1" />
            </div>
            <Progress key={idx} value={item} className="bg-light-muted-bg dark:bg-dark-muted-bg" />
            <span className="text-sm text-light-secondary-text dark:text-dark-secondary-txt font-medium">{item || 0}%</span>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewChart;
