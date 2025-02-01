/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useForm } from "react-hook-form";
import imageUpload from "@/utils/imageUpload";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { updateUser, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useUpdateUserInfoMutation } from "@/redux/features/user/user.api";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
const AddNewProduct = () => {
  const loginUser = useAppSelector(useCurrentUser);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [updateUserInfo] = useUpdateUserInfoMutation(undefined);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      let imageData;
      if (data.image[0]) {
        const fileImage = data.image[0];
        imageData = await imageUpload(fileImage);
      }
      const userInfo = {
        fullName: data.name || loginUser?.name,
        profilePicture: imageData || loginUser?.profilePicture,
        phone: data.phone || String(loginUser?.phone),
        city: data.city || loginUser?.city,
        address: data.address || loginUser?.address,
      };
      const storeProfile = {
        name: data.fullName || loginUser?.name,
        userId: loginUser?.userId,
        userEmail: loginUser?.userEmail,
        profilePicture: imageData || loginUser?.profilePicture,
        role: loginUser?.role,
        phone: data.phone || String(loginUser?.phone),
        city: data.city || loginUser?.city,
        address: data.address || loginUser?.address,
      };
      const res = await updateUserInfo({ id: loginUser?.userId, data: userInfo }).unwrap();
      if (res?.success === true) {
        toast.success("User Profile Updated Successfully");
        dispatch(updateUser({ user: storeProfile }));
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-0">
      <div className="pt-10 px-4 bs:px-0">
        <div className="flex items-center justify-between mb-5 pt-8 md:px-14">
          <h2 className="text-base xsm:text-lg sm:text-xl bs:text-3xl font-bold text-light-text-100 dark:text-dark-text-100 ">Add New Product</h2>
          <Button>
            <IoMdArrowRoundBack />
          </Button>
        </div>

        <form
          className=" shadow-light-container-shadow dark:shadow-dark-container-shadow md:px-14   rounded-md pb-10"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          {/* form row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="w-full md:w-1/2">
              <input
                readOnly
                type="text"
                defaultValue={loginUser?.userEmail}
                placeholder="Enter Product name"
                className="border border-[#dddcdc] focus-within:outline-none block focus-within:bg-light-bg-200  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("name")}
              />
              {errors.name && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product name is required</span>}
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="text"
                defaultValue={loginUser?.name}
                placeholder="Enter You Full Name"
                className="border border-[#dddcdc] focus-within:outline-none block focus-within:bg-light-bg-200  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("fullName", { required: true })}
              />
              {errors.brand && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Name is required</span>}
            </div>
          </div>
          {/* form row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                defaultValue={loginUser?.address}
                placeholder="Enter Your Address"
                className="border border-[#dddcdc] focus-within:outline-none block focus-within:bg-light-bg-200  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("address")}
              />
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="text"
                defaultValue={loginUser?.city}
                placeholder="Enter Your City"
                className="border border-[#dddcdc] focus-within:outline-none block focus-within:bg-light-bg-200  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("city")}
              />
            </div>
          </div>

          {/* form row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="flex flex-col gap-3 w-full md:w-1/2">
              <div className="flex flex-col xs:flex-row items-center mt-4 gap-3 ">
                {/* File Upload Button */}
                <label
                  htmlFor="file_input"
                  className="cursor-pointer flex items-center justify-center px-4 py-2  text-slate-700 font-medium rounded-lg text-base transition-all duration-300 flex-1 w-full md:w-1/2 border-[#dddcdc] border"
                >
                  <FiUpload className="w-3 h-3 xs:w-5 xs:h-5 mr-2" />
                  Upload Profile Photo
                </label>

                {/* Hidden File Input */}
                <input className="hidden" id="file_input" type="file" accept="image/*" {...register("image")} />

                {/* Display Selected File Name */}
                <p className="text-sm text-slate-500 dark:text-dark-slate-700 font-medium flex-1">
                  {watch("image")?.[0]?.name ? `${watch("image")[0].name}` : "No file selected"}
                </p>
              </div>
              {errors.image && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product Photo is required</span>}
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="text"
                defaultValue={String(loginUser?.phone)}
                placeholder="Enter Your Phone No"
                className="border border-[#dddcdc] focus-within:outline-none block focus-within:bg-light-bg-200  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("phone")}
              />
            </div>
          </div>

          {/* button */}
          <div className=" mt-8 ">
            <Button type="submit" disabled={loading} className="sm-mx:w-full">
              {loading ? <BiLoaderCircle className="animate-spin" /> : "Update Profile"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
