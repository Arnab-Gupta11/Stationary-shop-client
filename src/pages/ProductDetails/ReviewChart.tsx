import { Progress } from "@/components/ui/progress";
import { FaStar } from "react-icons/fa";

const ReviewChart = () => {
  const review = [
    {
      user: "650a1b2c3d4e5f6789012345",
      product: "660b2c3d4e5f678901234567",
      rating: 5,
      review: "Excellent product! Highly recommended.",
    },
    {
      user: "650a1b2c3d4e5f6789012346",
      product: "660b2c3d4e5f678901234568",
      rating: 4,
      review: "Very good quality, but shipping took longer than expected.",
    },
    {
      user: "650a1b2c3d4e5f6789012347",
      product: "660b2c3d4e5f678901234569",
      rating: 3,
      review: "Average product, could be better.",
    },
    {
      user: "650a1b2c3d4e5f6789012348",
      product: "660b2c3d4e5f678901234570",
      rating: 5,
      review: "Perfect! Exactly what I was looking for.",
    },
    {
      user: "650a1b2c3d4e5f6789012349",
      product: "660b2c3d4e5f678901234571",
      rating: 2,
      review: "Not satisfied with the quality.",
    },
    {
      user: "650a1b2c3d4e5f6789012350",
      product: "660b2c3d4e5f678901234572",
      rating: 1,
      review: "Very poor experience, wouldn't recommend.",
    },
    {
      user: "650a1b2c3d4e5f6789012351",
      product: "660b2c3d4e5f678901234573",
      rating: 4,
      review: "Good value for the price!",
    },
    {
      user: "650a1b2c3d4e5f6789012352",
      product: "660b2c3d4e5f678901234574",
      rating: 5,
      review: "Absolutely love it! Will buy again.",
    },
    {
      user: "650a1b2c3d4e5f6789012353",
      product: "660b2c3d4e5f678901234575",
      rating: 3,
      review: "Decent product, but expected more.",
    },
    {
      user: "650a1b2c3d4e5f6789012354",
      product: "660b2c3d4e5f678901234576",
      rating: 2,
      review: "Not worth the price.",
    },
  ];

  // Total number of reviews
  const totalReviews = review.length;

  // Calculate percentages and store in an object
  const ratingPercentages: number[] = [];

  [1, 2, 3, 4, 5].forEach((star) => {
    const count = review.filter((r) => r.rating === star).length;
    ratingPercentages[star - 1] = Number(((count * 100) / totalReviews).toFixed(2));
  });

  const ratingProgress = ratingPercentages.reverse();
  console.log(ratingProgress);

  return (
    <div className="flex flex-col gap-3 border border-gray-200 mt-3 rounded-lg p-3">
      {ratingProgress.map((item, idx) => {
        console.log(item);
        return (
          <div className="flex items-center gap-3">
            <div className="flex items-center flex-shrink-0">
              <span className="mt-1 font-semibold text-slate-700 flex-shrink-0">{ratingPercentages.length - idx}</span>
              <FaStar size={14} className="text-yellow-400 ml-1" />
            </div>
            <Progress key={idx} value={item} />
            <span className="text-sm text-slate-500 font-medium">{item}%</span>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewChart;
