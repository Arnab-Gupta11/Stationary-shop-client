import { useGetMetadataQuery } from "@/redux/features/meta/meta.slice";
import { TAdminMetaData } from "@/types/metadata.types";
import AdminStates from "./AdminStates";

const Overview = () => {
  const { data: metaData, isLoading, isFetching } = useGetMetadataQuery(undefined);
  const adminMetaData: TAdminMetaData = metaData?.data;
  console.log("Admin Data", adminMetaData);
  return (
    <div className="min-h-screen rounded-3xl ">
      <AdminStates statesData={adminMetaData?.stateData} />
    </div>
  );
};

export default Overview;
