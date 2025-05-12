/* eslint-disable @typescript-eslint/no-explicit-any */
import ReviewChart from "./ReviewChart";
import StarRating from "./StarRating";
import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { formateDateTime } from "@/utils/formateDateTime";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useDeleteReviewMutation, useGetAllReviewsQuery } from "@/redux/features/review/review.api";
import { useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { TReview } from "@/types/review.types";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import UpdateReviewForm from "./UpdateReviewForm";
import { useState } from "react";
import toast from "react-hot-toast";
import DeleteConfirmationModal from "../Dashboard/shared/DeleteConfirmationModal";
import ReviewCardSkeleton from "@/components/shared/loader/ReviewCardSkeletonLoader";

const Review = ({ totalRating, totalReviews, id }: { totalRating: number; totalReviews: number; id: string }) => {
  const user = useAppSelector(useCurrentUser);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const { data: reviewData, isLoading, isFetching } = useGetAllReviewsQuery({ id });

  let yourReview: TReview | null = null;
  let publicReviews: TReview[] = reviewData?.data;

  if (user && reviewData?.data) {
    yourReview = reviewData.data.find((review: TReview) => review?.user?._id === user?.userId) || null;
    publicReviews = reviewData.data.filter((review: TReview) => review?.user?._id !== user?.userId) || [];
  }
  const [deleteReview] = useDeleteReviewMutation(undefined);

  const handleDelete = (id: string) => {
    setSelectedId(id);
    setDeleteModalOpen(true);
  };
  const handleDeleteConfirm = async () => {
    try {
      setIsDeleting(true);
      if (selectedId) {
        const res = await deleteReview({ id: selectedId }).unwrap();
        if (res?.success === true) {
          toast.success(res?.message);
          setDeleteModalOpen(false);
        } else {
          toast.error(res?.data?.message || "Something went wrong. Try again later.");
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-20">
        <div className="md:col-span-7 bs:col-span-8 xl:col-span-9 order-2 md:order-1 w-full">
          <h1 className="text-2xl border-b-2 border-light-border dark:border-dark-border pb-3 text-light-primary-text dark:text-dark-primary-txt font-semibold">
            Reviews
            {reviewData?.data?.length ? (
              <span className="text-light-secondary-text dark:text-dark-secondary-txt text-lg">({reviewData.data.length || 0})</span>
            ) : (
              <span className="text-light-secondary-text dark:text-dark-secondary-txt text-lg">(0)</span>
            )}
          </h1>

          <div className="w-full flex flex-col gap-4">
            {isLoading || isFetching ? (
              <div>
                {[1, 2, 3, 4, 5].map((item: number) => (
                  <div key={item}>
                    <ReviewCardSkeleton />
                  </div>
                ))}
              </div>
            ) : (
              <>
                {user && yourReview && (
                  <div className="p-4 rounded-2xl shadow-md shadow-slate-200 dark:shadow-dark-muted-bg border border-[#f1f1f1] dark:border-dark-border mt-3">
                    <div className="flex items-start gap-4 w-full">
                      <Avatar className="border-2 border-light-border dark:border-dark-muted-bg w-16 h-16 ">
                        <AvatarImage src={yourReview?.user?.profilePicture || "https://github.com/shadcn.png"} alt="@shadcn" />
                      </Avatar>
                      <div className="w-full">
                        <div className="flex items-center justify-between flex-wrap gap-4 w-full">
                          <div>
                            <h1 className="text-base sm:text-lg font-semibold text-light-primary-text dark:text-dark-primary-txt">
                              {yourReview?.user?.fullName}
                            </h1>
                            <span className="text-[10px] sm:text-xs font-medium text-light-secondary-text dark:text-dark-secondary-txt">
                              {formateDateTime(yourReview?.createdAt)}
                            </span>
                          </div>
                          <StarRating rating={yourReview?.rating} starSize={15} />
                        </div>
                        <div className="flex items-start justify-between flex-wrap gap-4">
                          <p className="text-sm sm:text-base mt-4 text-slate-600 dark:text-dark-secondary-txt font-medium">{yourReview?.review}</p>
                          <div className="flex items-center gap-3">
                            <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
                              <DialogTrigger asChild>
                                <CiEdit
                                  size={20}
                                  className="hover:scale-110 active:scale-95 text-light-secondary-text dark:text-dark-secondary-txt hover:text-primary dark:hover:text-primary hover:cursor-pointer duration-700"
                                />
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px] bg-white">
                                <DialogHeader>
                                  <DialogTitle className="text-lg font-semibold dark:text-dark-primary-txt text-light-primary-text">
                                    Update Your Review.
                                  </DialogTitle>
                                  <DialogDescription className="text-sm font-medium text-light-secondary-text dark:text-dark-secondary-txt">
                                    Edit your review and share your updated thoughts.
                                  </DialogDescription>
                                </DialogHeader>
                                <UpdateReviewForm yourReview={yourReview} setModalOpen={setModalOpen} />
                              </DialogContent>
                            </Dialog>

                            <MdDeleteOutline
                              onClick={() => {
                                handleDelete(yourReview?._id);
                              }}
                              size={20}
                              className="hover:scale-110 active:scale-95 text-light-secondary-text dark:text-dark-secondary-txt hover:text-primary dark:hover:text-primary  hover:cursor-pointer duration-700"
                            />
                            <DeleteConfirmationModal
                              isOpen={isDeleteModalOpen}
                              onOpenChange={setDeleteModalOpen}
                              onConfirm={handleDeleteConfirm}
                              isDeleting={isDeleting}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {publicReviews.length > 0
                  ? publicReviews.map((item: TReview) => <ReviewCard item={item} key={item._id} />)
                  : reviewData?.data?.length < 1 && (
                      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
                        <span className="text-slate-500 font-semibold text-lg sm:text-2xl text-center">
                          No reviews yet. Be the first to write one!
                        </span>
                      </div>
                    )}
              </>
            )}
          </div>
        </div>

        <div className="md:col-span-5 bs:col-span-4 xl:col-span-3 border-2 border-light-border dark:border-dark-border rounded-lg p-3 order-1 md:order-2">
          <h1 className="terxt-2xl font-semibold border-b-2 border-light-border dark:border-dark-border pb-2 text-light-primary-text dark:text-dark-primary-txt">
            Review Summary
          </h1>
          <div className="border-2 border-light-border dark:border-dark-border mt-3 flex items-center gap-3 rounded-lg p-3 shadow-md dark:shadow-dark-border">
            <h1 className="text-6xl font-bold text-primary">{totalRating || 0}</h1>
            <div>
              <StarRating rating={totalRating || 0} starSize={15} />
              <span className="text-sm text-light-primary-text dark:text-dark-primary-txt font-medium">Based on {totalReviews || 0} reviews</span>
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
