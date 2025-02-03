import ReviewChart from "./ReviewChart";
import StarRating from "./StarRating";
import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { formateDateTime } from "@/utils/formateDateTime";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useGetAllReviewsQuery } from "@/redux/features/review/review.api";
import { useParams } from "react-router-dom";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { TReview } from "@/types/review.types";
import Loader from "@/components/shared/Loader";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import UpdateReviewForm from "./UpdateReviewForm";

const Review = ({ totalRating, totalReviews }: { totalRating: number; totalReviews: number }) => {
  const { id } = useParams();
  const user = useAppSelector(useCurrentUser);
  const { data: reviewData, isLoading } = useGetAllReviewsQuery({ id });

  let yourReview: TReview | null = null;
  let publicReviews: TReview[] = [];

  if (user && reviewData?.data) {
    yourReview = reviewData.data.find((review: TReview) => review?.user?._id === user?.userId) || null;
    publicReviews = reviewData.data.filter((review: TReview) => review?.user?._id !== user?.userId) || [];
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-20">
        <div className="md:col-span-7 bs:col-span-8 xl:col-span-9 order-2 md:order-1 w-full">
          <h1 className="text-2xl border-b border-[#f1f1f1] pb-3 text-slate-950">
            Reviews{" "}
            {reviewData?.data?.length ? (
              <span className="text-slate-500 text-lg">({reviewData.data.length || 0})</span>
            ) : (
              <span className="text-slate-500 text-lg">(0)</span>
            )}
          </h1>

          <div className="w-full flex flex-col gap-4">
            {isLoading ? (
              <Loader />
            ) : (
              <>
                {user && yourReview && (
                  <div className="p-4 rounded-lg shadow-sm shadow-slate-200 border border-[#f1f1f1] mt-3">
                    <div className="flex items-start gap-4 w-full">
                      <Avatar className="border border-[#f1f1f1] w-16 h-16 ">
                        <AvatarImage src={yourReview?.user?.profilePicture || "https://github.com/shadcn.png"} alt="@shadcn" />
                      </Avatar>
                      <div className="w-full">
                        <div className="flex items-center justify-between flex-wrap gap-4 w-full">
                          <div>
                            <h1 className="text-lg sm:text-xl font-semibold text-slate-900">{yourReview?.user?.fullName}</h1>
                            <span className="text-xs sm:text-sm font-medium text-slate-500">{formateDateTime(yourReview?.updatedAt)}</span>
                          </div>
                          <StarRating rating={yourReview?.rating} />
                        </div>
                        <div className="flex items-start justify-between flex-wrap gap-4">
                          <p className="text-sm sm:text-base mt-4 text-slate-700">{yourReview?.review}</p>
                          <div className="flex items-center gap-3">
                            <Dialog>
                              <DialogTrigger asChild>
                                <CiEdit
                                  size={20}
                                  className="hover:scale-110 active:scale-95 hover:text-primary-bg hover:cursor-pointer duration-700"
                                />
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px] bg-white">
                                <DialogHeader>
                                  <DialogTitle className="text-lg font-semibold text-slate-900">Update Your Review.</DialogTitle>
                                  <DialogDescription className="text-sm font-medium text-slate-600">
                                    Edit your review and share your updated thoughts.
                                  </DialogDescription>
                                </DialogHeader>
                                <UpdateReviewForm yourReview={yourReview} />
                              </DialogContent>
                            </Dialog>

                            <MdDeleteOutline size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {user && publicReviews.length > 0 ? (
                  publicReviews.map((item: TReview) => <ReviewCard item={item} key={item._id} />)
                ) : reviewData?.data?.length > 0 ? (
                  reviewData.data.map((item: TReview) => <ReviewCard item={item} key={item._id} />)
                ) : (
                  <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
                    <span className="text-slate-500 font-semibold text-xl sm:text-2xl">No reviews yet. Be the first to write one!</span>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div className="md:col-span-5 bs:col-span-4 xl:col-span-3 border border-[#f1f1f1] rounded-lg p-3 order-1 md:order-2">
          <h1 className="text-2xl font-semibold border-b border-[#f1f1f1] pb-2">Review Summary</h1>
          <div className="border border-gray-200 mt-3 flex items-center gap-3 rounded-lg p-3 shadow-md">
            <h1 className="text-6xl font-bold text-primary-text">{totalRating || 0}</h1>
            <div>
              <StarRating rating={totalRating || 0} />
              <span className="text-sm text-slate-700 font-medium">Based on {totalReviews || 0} reviews</span>
            </div>
          </div>
          <ReviewChart review={reviewData?.data} />
          <ReviewForm productId={id as string} yourReview={yourReview} />
        </div>
      </div>
    </div>
  );
};

export default Review;
