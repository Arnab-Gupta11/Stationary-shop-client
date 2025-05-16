import Loader from "@/components/shared/Loader";
import AdminStates from "./AdminStates";
import CategoryProductDistributionChart from "./CategoryProductDistributionChart";
import { useGetMetadataQuery } from "@/redux/features/meta/meta.api";
import AdminTopSellingProductsChart from "./AdminTopSellingProductsChart";
import { TAdminMetaData } from "@/types/metadata.types";

const Overview = () => {
  const { data: metaData, isLoading } = useGetMetadataQuery(undefined);
  const adminMetadata: TAdminMetaData = metaData?.data;
  return (
    <div className="min-h-screen rounded-3xl p-3 sm:p-0">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <AdminStates statesData={adminMetadata?.stateData} />
          <div className="grid grid-cols-1 bs:grid-cols-2 gap-5 mt-5">
            <CategoryProductDistributionChart data={adminMetadata?.getProductDistributionByParentCategory} />
            <AdminTopSellingProductsChart data={adminMetadata?.getTopProducts} />
          </div>
        </>
      )}
    </div>
  );
};

export default Overview;
