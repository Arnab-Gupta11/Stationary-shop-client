/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
import { useAppSelector } from "@/redux/hooks";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { BiLoaderCircle } from "react-icons/bi";
import toast from "react-hot-toast";
import { useAddNewReviewMutation } from "@/redux/features/review/review.api";
import { TReview } from "@/types/review.types";

const ReviewForm = ({ productId, yourReview }: { productId: string; yourReview: TReview | null }) => {
  const loginUser = useAppSelector(useCurrentUser);
  const [createReview] = useAddNewReviewMutation(undefined);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState({ rating: "", review: "" });
  const [loading, setLoading] = useState(false);

  // Handle Star Click
  const handleStarClick = (star: number) => {
    setRating(star);
    setErrors((prev) => ({ ...prev, rating: "" })); // Clear error if rating is selected
  };

  // Handle Mouse Hover
  const handleMouseOver = (star: number) => setHoverRating(star);
  const handleMouseLeave = () => setHoverRating(0);

  // Handle Review Input Change
  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
    setErrors((prev) => ({ ...prev, review: "" })); // Clear error when user types
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = { rating: "", review: "" };

    if (rating === 0) formErrors.rating = "Rating is required.";
    if (!review.trim()) formErrors.review = "Review cannot be empty.";

    if (formErrors.rating || formErrors.review) {
      setErrors(formErrors);
      return;
    }
    const reviewData = {
      product: productId,
      rating: rating,
      review: review,
    };
    try {
      setLoading(true);
      const res = await createReview(reviewData).unwrap();
      if (res?.success === true) {
        toast.success(res?.message);
        // Reset form
        setRating(0);
        setReview("");
      }
    } catch (err: any) {
      toast.error("We couldn't submit your review. Please check your connection and try again.");
      console.log("REveiw Error : ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-3">
      <h1 className="terxt-2xl font-semibold border-b border-light-border dark:border-dark-border pb-2 text-light-primary-text dark:text-dark-primary-txt">
        Leave a Review
      </h1>

      <div className="border-2 border-light-border dark:border-dark-border mt-3 rounded-lg p-3">
        <form onSubmit={handleSubmit}>
          {/* Star Rating Input */}
          <div className="flex gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                onClick={() => handleStarClick(star)}
                onMouseOver={() => handleMouseOver(star)}
                onMouseLeave={handleMouseLeave}
                className={`cursor-pointer ${(hoverRating || rating) >= star ? "text-yellow-400" : "text-slate-400 dark:text-dark-secondary-txt"}`}
                size={26}
              />
            ))}
          </div>
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}

          {/* Review Input */}
          <textarea
            value={review}
            onChange={handleReviewChange}
            placeholder="Write your review..."
            className="w-full p-2 border-2 rounded-2xl resize-none border-slate-100 dark:border-dark-muted-border px-3 py-1.5 text-light-secondary-text dark:text-dark-secondary-txt bg-slate-100 dark:bg-dark-muted-bg placeholder:text-muted-foreground shadow-sm focus-visible:outline-none focus-visible:ring-0  disabled:cursor-not-allowed disabled:opacity-50 font-Exo font-medium  overflow-y-auto custom-scrollbar mt-3 h-28"
          />
          {errors.review && <p className="text-red-500 text-sm">{errors.review}</p>}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading || loginUser?.role === "admin" || loginUser?.role !== "user" || yourReview?.user?._id === loginUser?.userId}
            className="w-full"
          >
            {loading ? <BiLoaderCircle className="animate-spin" /> : "Submit Review"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
