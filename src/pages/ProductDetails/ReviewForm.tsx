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

const ReviewForm = ({ productId }: { productId: string }) => {
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-3">
      <h1 className="terxt-2xl font-semibold border-b border-[#f1f1f1] pb-2">Leave a Review</h1>

      <div className="border border-gray-200 mt-3 rounded-lg p-3">
        <form onSubmit={handleSubmit}>
          {/* Star Rating Input */}
          <div className="flex gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                onClick={() => handleStarClick(star)}
                onMouseOver={() => handleMouseOver(star)}
                onMouseLeave={handleMouseLeave}
                className={`cursor-pointer ${(hoverRating || rating) >= star ? "text-yellow-400" : "text-gray-300"}`}
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
            className="w-full p-2 border rounded-md focus:outline-none mt-3"
          />
          {errors.review && <p className="text-red-500 text-sm">{errors.review}</p>}

          {/* Submit Button */}
          <Button type="submit" disabled={loading || loginUser?.role === "admin" || loginUser?.role !== "user"} className="w-full">
            {loading ? <BiLoaderCircle className="animate-spin" /> : "Submit Review"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
