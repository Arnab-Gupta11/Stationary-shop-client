import { TUserStatedata } from "@/types/metadata.types";
import {
  HiOutlineCreditCard, // Total Payments
  HiOutlineShoppingBag, // Total Orders
  HiOutlineCube, // Total Purchased Product
  HiOutlineStar, // Total Reviews
} from "react-icons/hi2";
import OverviewStateCard from "../../Admin/overview/OverviewStateCard";

type TAdminStatesProp = {
  statesData: TUserStatedata;
};

const UserStates: React.FC<TAdminStatesProp> = ({ statesData }) => {
  console.log(statesData);
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5">
      <OverviewStateCard label="Total Payments" state={statesData?.totalPayments} Icon={HiOutlineCreditCard} />
      <OverviewStateCard label="Total Orders" state={statesData?.totalOrders} Icon={HiOutlineShoppingBag} />
      <OverviewStateCard label="Total Purchased Product" state={statesData?.totalPurchasedProducts} Icon={HiOutlineCube} />
      <OverviewStateCard label="Total Reviews" state={statesData?.totalReviews} Icon={HiOutlineStar} />
    </div>
  );
};

export default UserStates;
