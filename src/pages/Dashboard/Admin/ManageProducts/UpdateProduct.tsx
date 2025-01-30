/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useForm } from "react-hook-form";
import imageUpload from "@/utils/imageUpload";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundBack } from "react-icons/io";
import toast from "react-hot-toast";
import { useGetProductDetailsQuery, useUpdateProductMutation } from "@/redux/features/product/product.api";
import { BiLoaderCircle } from "react-icons/bi";
import { TProduct } from "@/types/product.types";
import Loader from "@/components/shared/Loader";
const UpdateProduct = () => {
  const { id } = useParams();
  const { data: productData, isLoading } = useGetProductDetailsQuery({ id });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [updateProduct] = useUpdateProductMutation(undefined);
  const categoryOptions = [
    { value: "Writing", label: "Writing" },
    { value: "Office Supplies", label: "Office Supplies" },
    { value: "Art Supplies", label: "Art Supplies" },
    { value: "Educational", label: "Educational" },
    { value: "Technology", label: "Technology" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  if (isLoading) {
    return <Loader />;
  }
  const { _id, brand, category, description, name, price, quantity, image } = productData?.data as TProduct;
  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      let imageData;
      if (data.image[0]) {
        const fileImage = data.image[0];
        imageData = await imageUpload(fileImage);
      }
      const productInfo = {
        name: data.name || name,
        brand: data.brand || brand,
        price: parseFloat(data.price) || price,
        quantity: parseFloat(data.quantity) || quantity,
        category: data.category || category,
        description: data.details || description,
        image: imageData || image,
      };
      const res = await updateProduct({ id: _id, data: productInfo }).unwrap();
      if (res?.success === true) {
        toast.success(res?.message);
        navigate("/dashboard/manage-products");
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
          <Button onClick={() => navigate(-1)}>
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
                type="text"
                defaultValue={name}
                placeholder="Enter Product name"
                className="border border-[#dddcdc] focus-within:outline-none block focus-within:bg-light-bg-200  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("name")}
              />
              {/* {errors.name && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product name is required</span>} */}
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="text"
                defaultValue={brand}
                placeholder="Enter Brand Name"
                className="border border-[#dddcdc] focus-within:outline-none block focus-within:bg-light-bg-200  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("brand")}
              />
              {errors.brand && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product Brand is required</span>}
            </div>
          </div>
          {/* form row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-3 md:mb-5">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                defaultValue={String(price)}
                placeholder="Enter Product Price"
                className="border border-[#dddcdc] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-200 w-full py-3 px-3 mt-1.5 rounded-md bg-transparent font-medium text-slate-600"
                {...register("price", {
                  validate: (value) => value === "" || (/^\d+(\.\d{1,2})?$/.test(value) && parseFloat(value) > 0) || "Enter a valid positive number",
                })}
              />
              {errors.price && <span className="text-red-600 text-xs font-medium mt-0 ml-1">{String(errors.price.message)}</span>}
            </div>

            <div className="w-full md:w-1/2">
              <input
                type="text"
                defaultValue={String(quantity)}
                placeholder="Enter Product Quantity"
                className="border border-[#dddcdc] dark:border-slate-800 focus-within:outline-none block focus-within:bg-light-bg-200 w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("quantity", {
                  validate: (value) => value === "" || (/^\d+(\.\d{1,2})?$/.test(value) && parseFloat(value) > 0) || "Enter a valid positive number",
                })}
              />
              {errors.quantity && <span className="text-red-600 text-xs font-medium mt-0 ml-1">{String(errors.quantity.message)}</span>}
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
                  Upload Image
                </label>

                {/* Hidden File Input */}
                <input className="hidden" id="file_input" type="file" accept="image/*" {...register("image")} />

                {/* Display Selected File Name */}
                <p className="text-sm text-slate-500 dark:text-dark-slate-700 font-medium flex-1">
                  {watch("image")?.[0]?.name ? `${watch("image")[0].name}` : "No file selected"}
                </p>
              </div>
              {/* {errors.image && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product Photo is required</span>} */}
            </div>
            <div className="w-full md:w-1/2">
              <select
                defaultValue={category}
                className="hover:cursor-pointer border border-[#c2c5c7] dark:border-slate-800 focus:outline-none block w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
                {...register("category")}
              >
                <option value="">Select Category</option>
                {categoryOptions.map((option) => (
                  <option defaultValue={category} key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {errors.category && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product Category is required</span>}
            </div>
          </div>

          {/* form row */}

          <div className=" mt-5">
            <textarea
              className="border border-[#c2c5c7] focus-within:outline-none block focus-within:bg-light-bg-200  w-full py-3 px-3 mt-2 rounded-md bg-transparent font-medium text-slate-600"
              id=""
              defaultValue={description}
              cols={30}
              rows={5}
              placeholder="Enter Product details...."
              {...register("details")}
            />
            {errors.details && <span className="text-red-600 text-xs font-medium mt-0 ml-1">Product details is required</span>}
          </div>

          {/* button */}
          <div className=" mt-8 ">
            <Button type="submit" disabled={loading} className="sm-mx:w-full">
              {loading ? <BiLoaderCircle className="animate-spin" /> : "Order Now"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
