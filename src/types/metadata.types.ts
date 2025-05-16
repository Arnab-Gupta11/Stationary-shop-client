//Admin Metadata types
export type TAdminStateData = {
  totalCategories: number;
  totalSubCategories: number;
  totalUsers: number;
  totalProducts: number;
  totalBrands: number;
  totalOrders: number;
  totalIncome: number;
  totalReviews: number;
};
export type TLatestOrdersStates = {
  _id: string;
  totalOrderPrice: number;
  paymentStatus: "Paid" | "Unpaid" | string;
  orderId: string;
  totalProductsCount: number;
  orderStatus: "Pending" | "Confirmed" | "Delivered" | "Cancelled" | string;
  orderPlaced: string; // ISO date string
};
export type TLatestUsersStates = {
  _id: string;
  fullName: string;
  profilePicture: string;
  email: string;
};
export type TGetTopProducts = {
  _id: string;
  name: string;
  salesCount: number;
};
export type TGetProductDistributionByParentCategory = {
  productCount: number;
  name: string;
};

export type TAdminMetaData = {
  stateData: TAdminStateData;
  latestOrders: TLatestOrdersStates[];
  latestUsers: TLatestUsersStates[];
  getProductDistributionByParentCategory: TGetProductDistributionByParentCategory[];
  getTopProducts: TGetTopProducts[];
};

//User metadata types.

export type TUserMetadata = {
  totalOrders: number;
  totalPayments: number;
  totalReviews: number;
  totalPurchasedProducts: number;
};
export type TUserStatesChart = {
  name: "Total Payments" | "Total Orders" | "Total Purchased Products" | string;
  value: number;
  raw: number;
};
export type TUserMetaData = {
  stateData: TUserMetaData;
  userStatesChart: TUserStatesChart[];
  latestOrders: TLatestOrdersStates[];
};
