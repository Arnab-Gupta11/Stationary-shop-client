/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from "@/components/shared/Loader";

import { Button } from "@/components/ui/button";

import toast from "react-hot-toast";
import { useGetAllUsersQuery, useUpdateUserStatusMutation } from "@/redux/features/user/user.api";
const ManageUsers = () => {
  const [updateStatus] = useUpdateUserStatusMutation(undefined);
  const { data: userData, isLoading } = useGetAllUsersQuery(undefined);

  const handleUpdateUserStatus = async (_id: string, staues: boolean) => {
    try {
      const statusInfo = {
        isBlocked: !staues,
      };
      const res = await updateStatus({ id: _id, data: statusInfo }).unwrap();
      if (res?.success === true) {
        toast.success(res?.message);
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  return (
    <div>
      <div className="mb-5 flex flex-col xs:flex-row items-center xs:justify-between gap-5"></div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-sm pb-10">
          <table className="w-full bg-white border border-[#f1f1f1] mb-5">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left border w-32 border-[#f1f1f1]">Image</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Name</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Email</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Status</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Action</th>
              </tr>
            </thead>
            <tbody>
              {userData?.data?.map((item: any) => (
                <tr key={item?._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border w-32 border-[#f1f1f1]">
                    <img src={item?.profilePicture} alt="Product Image" className="w-16 h-16 bg-[#F7F7F7] p-2 rounded-lg flex-shrink-0" />
                  </td>
                  <td className="px-4 py-2 border border-[#f1f1f1]">{item?.fullName}</td>
                  <td className="px-4 py-2 border border-[#f1f1f1]">{item?.email}</td>
                  <td className="px-4 py-2 border border-[#f1f1f1]">
                    <span
                      className={`px-2 py-1 rounded-md
                          ${
                            item?.isBlocked === true
                              ? "bg-[#FDEEEF] text-[#ff6a62] border border-[#f5f4f4]"
                              : "bg-[#EDFBF3] text-[#71d057] border border-[#f5f4f4]"
                          }`}
                    >
                      {item?.isBlocked === true ? "Blocked" : "Active"}
                    </span>
                  </td>
                  <td className="px-4 py-2 border w-20 border-[#f1f1f1]">
                    <Button
                      onClick={() => {
                        handleUpdateUserStatus(item?._id, item?.isBlocked);
                      }}
                      type="submit"
                      disabled={item?.status === "Shipping"}
                      className="sm-mx:w-full"
                    >
                      Change Status
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
