import Loader from "@/components/shared/Loader";
import { useGetMetadataQuery } from "@/redux/features/meta/meta.api";
import { TUserMetaData } from "@/types/metadata.types";
import UserStates from "./UserStates";
import UserStatesChart from "./UserStatesChart";

const OverviewUser = () => {
  const { data: metaData, isLoading } = useGetMetadataQuery(undefined);
  const userMetadata: TUserMetaData = metaData?.data;
  return (
    <div className="min-h-screen rounded-3xl p-3 sm:p-0">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          {/* States card  */}
          <UserStates statesData={userMetadata?.stateData} />
          {/* Charts  */}
          <UserStatesChart data={userMetadata?.userStatesChart} />
          {/* Table  */}
          {/* <LatestOrdersByAdmin orderData={adminMetadata?.latestOrders} /> */}
        </>
      )}
    </div>
  );
};

export default OverviewUser;
