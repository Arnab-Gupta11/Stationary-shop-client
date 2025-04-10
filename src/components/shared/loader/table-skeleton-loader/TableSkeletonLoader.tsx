import { Skeleton } from "@/components/ui/skeleton";

const TableSkeletonLoader = () => {
  return (
    <div className="overflow-x-auto rounded-2xl pb-10">
      <table className="w-full rounded-2xl border border-[#e9eefc] dark:border-[#101417] mb-5 select-none -z-10">
        <thead className="bg-light-primary-bg dark:bg-dark-primary-bg">
          <tr>
            <th className="px-4 py-4 text-left border w-32 border-[#e9eefc] dark:border-[#101417] rounded-t-2xl">
              <Skeleton className="w-32 h-6" />
            </th>
            <th className="px-4 py-2 text-left border border-[#e9eefc] dark:border-[#101417]">
              <Skeleton className="w-32 h-6" />
            </th>
            <th className="px-4 py-2 text-left border border-[#e9eefc] dark:border-[#101417]">
              <Skeleton className="w-40 h-6" />
            </th>
            <th className="px-4 py-2 text-left border border-[#e9eefc] dark:border-[#101417]">
              <Skeleton className="w-24 h-6" />
            </th>
            <th className="px-4 py-2 text-left border border-[#e9eefc] dark:border-[#101417]">
              <Skeleton className="w-20 h-6" />
            </th>
          </tr>
        </thead>
        <tbody className="rounded-2xl">
          {[...Array(9)].map((_, index) => (
            <tr key={index} className="hover:bg-light-primary-bg dark:hover:bg-dark-primary-bg">
              <td className="px-4 py-2 border w-32 border-[#e9eefc] dark:border-[#101417]">
                <Skeleton className="w-16 h-16" />
              </td>
              <td className="px-4 py-2 border border-[#e9eefc] dark:border-[#101417]">
                <Skeleton className="w-32 h-6" />
              </td>
              <td className="px-4 py-2 border border-[#e9eefc] dark:border-[#101417]">
                <Skeleton className="w-40 h-6" />
              </td>
              <td className="px-4 py-2 border border-[#e9eefc] dark:border-[#101417]">
                <Skeleton className="w-24 h-6" />
              </td>
              <td className="px-4 py-2 border border-[#e9eefc] dark:border-[#101417]">
                <Skeleton className="w-20 h-6" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeletonLoader;
