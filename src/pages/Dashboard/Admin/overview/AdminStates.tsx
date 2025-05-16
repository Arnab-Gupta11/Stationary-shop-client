import { TAdminStateData } from "@/types/metadata.types";
import {
  HiOutlineSquares2X2,
  HiOutlineListBullet,
  HiOutlineUsers,
  HiOutlineCube,
  HiOutlineClipboardDocumentList,
  HiOutlineBanknotes,
  HiOutlineStar,
} from "react-icons/hi2";
import { FiTag } from "react-icons/fi";
import OverviewStateCard from "./OverviewStateCard";
type TAdminStatesProp = {
  statesData: TAdminStateData;
};

const AdminStates: React.FC<TAdminStatesProp> = ({ statesData }) => {
  console.log(statesData);
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5">
      <OverviewStateCard label="Total Products" state={statesData?.totalProducts} Icon={HiOutlineCube} />
      <OverviewStateCard label="Total Categories" state={statesData?.totalCategories} Icon={HiOutlineSquares2X2} />
      <OverviewStateCard label="Total Sub-categories" state={statesData?.totalSubCategories} Icon={HiOutlineListBullet} />
      <OverviewStateCard label="Total Brands" state={statesData?.totalBrands} Icon={FiTag} />
      <OverviewStateCard label="Total Orders" state={statesData?.totalOrders} Icon={HiOutlineClipboardDocumentList} />
      <OverviewStateCard label="Total Income" state={statesData?.totalIncome} Icon={HiOutlineBanknotes} />
      <OverviewStateCard label="Total Users" state={statesData?.totalUsers} Icon={HiOutlineUsers} />
      <OverviewStateCard label="Total Reviews" state={statesData?.totalReviews} Icon={HiOutlineStar} />
    </div>
  );
};

export default AdminStates;
