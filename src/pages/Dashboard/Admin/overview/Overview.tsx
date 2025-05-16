import Loader from "@/components/shared/Loader";
import AdminStates from "./AdminStates";
import CategoryProductDistributionChart from "./CategoryProductDistributionChart";
import { useGetMetadataQuery } from "@/redux/features/meta/meta.api";

const Overview = () => {
  const { data: metaData, isLoading, error } = useGetMetadataQuery(undefined);
  console.log("Admin meta data :", metaData);
  console.log("Error meta data :", error);
  return (
    <div className="min-h-screen rounded-3xl p-3 sm:p-0">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <AdminStates statesData={metaData?.data?.stateData} />
          <div className="grid grid-cols-1 bs:grid-cols-2 gap-5 mt-5">
            <CategoryProductDistributionChart data={metaData?.data?.getProductDistributionByParentCategory} />
            {/* <AdminConditionDistributionChart data={result?.data?.listingConditionDistribution} /> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Overview;
