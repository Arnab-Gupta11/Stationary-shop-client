export type TReviewUser = {
  _id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  role: string;
  isBlocked: boolean;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
};

export type TReview = {
  _id: string;
  user: TReviewUser;
  product: string;
  rating: number;
  review: string;
  createdAt: string;
  updatedAt: string;
};
