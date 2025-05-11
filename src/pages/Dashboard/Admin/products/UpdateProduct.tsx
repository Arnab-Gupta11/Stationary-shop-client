/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomInput from "@/components/form/CustomInput";
import CustomSelect from "@/components/form/CustomSelect";
import { Button } from "@/components/ui/button";
import { SelectItem } from "@/components/ui/select";
import { Loader2, Plus } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { TCategoryOptions } from "@/types/category.types";

import CustomForm from "@/components/form/CustomForm";

import CustomTextArea from "@/components/form/CustomTextArea";
import DashboardPageSection from "../../shared/DashboardPageSection";
import { useGetAllSubCategoriesQuery } from "@/redux/features/categories/categories.api";
import { useGetProductDetailsQuery, useUpdateProductMutation } from "@/redux/features/product/product.api";
import { useGetAllBrandsQuery } from "@/redux/features/brand";
import { TBrand } from "@/types/brand.types";
import { updateProductValidationSchema } from "@/schemas/product";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoMdArrowRoundBack, IoMdRemove } from "react-icons/io";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { updateImageUpload } from "@/utils/updateImageUpload";
import { IProduct } from "@/types/product.types";
import UpdateImageUploader from "@/components/form/CustomImageUplaoder/UpdateImageUploader";
import Loader from "@/components/shared/Loader";
type TFormValues = z.infer<typeof updateProductValidationSchema>;

const UpdateProduct = () => {
  const { id } = useParams();
  const { data: productData, isLoading } = useGetProductDetailsQuery({ slug: id });
  const productDetails = productData?.data as IProduct;
  const defaultImages = productDetails?.images || [];
  const [updateProduct] = useUpdateProductMutation(undefined);
  const navigate = useNavigate();
  const { data: categoryOption, isLoading: isCategoryOptionLoading } = useGetAllSubCategoriesQuery(undefined);
  const { data: brandOption, isLoading: isBrandOptionLoading } = useGetAllBrandsQuery(undefined);

  // Initialize form with empty default values to avoid undefined issues
  const form = useForm<TFormValues>({
    resolver: zodResolver(updateProductValidationSchema),
    defaultValues: {
      name: "",
      description: "",
      price: "",
      category: "", // Will be updated in useEffect
      brand: "", // Will be updated in useEffect
      quantity: "",
      weight: "",
      images: {
        newImages: [],
        removedExisting: [],
      },
      specification: [{ key: "", value: "" }],
      keyFeatures: [{ value: "" }],
    },
  });

  // Reset form when productDetails is available
  useEffect(() => {
    if (productDetails) {
      form.reset({
        name: productDetails.name || "",
        description: productDetails.description || "",
        price: String(productDetails.price || ""),
        category: productDetails.category?._id || "", // Ensure _id is used
        brand: productDetails.brand?._id || "", // Ensure _id is used
        quantity: String(productDetails.quantity || ""),
        weight: String(productDetails.weight || ""),
        images: {
          newImages: [],
          removedExisting: [],
        },
        specification: Object.entries(productDetails?.specification || {}).map(([key, value]) => ({
          key,
          value,
        })) || [{ key: "", value: "" }],
        keyFeatures: productDetails?.keyFeatures?.map((feature) => ({
          value: feature,
        })) || [{ value: "" }],
      });
    }
  }, [productDetails, form]);

  console.log(productDetails);
  console.log("Params Id", id);

  const [uploading, setUploading] = useState(false);

  const {
    fields: featureFields,
    append: appendFeatures,
    remove: removeFeatures,
  } = useFieldArray({
    name: "keyFeatures",
    control: form.control,
    rules: { minLength: 1 },
  });

  const {
    fields: specificationFields,
    append: appendSpecification,
    remove: removeSpecification,
  } = useFieldArray({
    name: "specification",
    control: form.control,
    rules: { minLength: 1 },
  });

  const onSubmit = async (data: TFormValues) => {
    try {
      setUploading(true);

      const finalImages = await updateImageUpload(data.images.newImages, data.images.removedExisting, defaultImages, form, setUploading);

      if (!finalImages || finalImages.length === 0) {
        return;
      }

      const keyFeatures = data.keyFeatures.map((item) => item.value);
      const specification: { [key: string]: string } = {};
      data.specification.forEach((item: { key: string; value: string }) => {
        specification[item.key] = item.value;
      });

      const payload = {
        ...data,
        keyFeatures,
        specification,
        images: finalImages,
        price: parseFloat(data.price),
        quantity: parseInt(data.quantity),
        weight: parseFloat(data.weight),
      };

      const res = await updateProduct({ id: productDetails?._id, data: payload }).unwrap();
      if (res?.success === true) {
        toast.success(res?.message);
        form.reset();
        navigate("/dashboard/admin/manage-products");
      } else {
        toast.error(res?.data?.message || "Something went wrong. Try again later.");
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };
  return (
    <DashboardPageSection>
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="text-xl text-light-primary-text dark:text-dark-primary-txt font-bold font-Aclonica">Update Product</h1>
        <Button type="button" variant={"primary"} onClick={() => navigate(-1)} className="rounded-2xl py-5 px-4 mt-2 sm:mt-7">
          <IoMdArrowRoundBack />
        </Button>
      </div>
      {isLoading && <Loader />}

      {!isLoading && (
        <CustomForm form={form} onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInput fieldName="name" label="Product Name" placeholder="Enter product name" inputType="text" form={form} />
            <CustomInput fieldName="weight" label="Product Weight" placeholder="Enter product weight" inputType="text" form={form} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInput fieldName="price" label="Product Price" placeholder="Enter product price" inputType="text" form={form} />
            <CustomInput fieldName="quantity" label="Product Quantity" placeholder="Enter product quantity" inputType="text" form={form} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomSelect form={form} fieldName="category" label="Product Category" placeholder="Select category">
              {isCategoryOptionLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  Loading categories...
                </div>
              ) : (
                categoryOption?.data?.map((option: TCategoryOptions) => (
                  <SelectItem key={option._id} value={option._id}>
                    {option.name}
                  </SelectItem>
                ))
              )}
            </CustomSelect>
            <CustomSelect form={form} fieldName="brand" label="Product Brand" placeholder="Select brand">
              {isBrandOptionLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  Loading brands...
                </div>
              ) : (
                brandOption?.data?.map((option: TBrand) => (
                  <SelectItem key={option._id} value={option._id}>
                    {option.name}
                  </SelectItem>
                ))
              )}
            </CustomSelect>
          </div>
          <CustomTextArea fieldName="description" label="Product Description" placeholder="Enter product description" inputType="text" form={form} />

          {/* Image  */}
          <UpdateImageUploader
            control={form.control}
            name="images"
            label="Product Images"
            maxFiles={4}
            maxFileSize={4}
            existingImages={defaultImages}
          />

          {/* Specification */}
          <div>
            <div className="flex gap-3 border-light-border dark:border-dark-muted-bg items-center border-t border-b py-3 my-5">
              <p className="text-light-primary-text dark:text-dark-primary-txt font-semibold text-base">Specification</p>
              <span
                onClick={() => appendSpecification({ key: "", value: "" })}
                className="size-7 flex items-center justify-center border-2 dark:border-gray-900 rounded-xl hover:shadow-box-shadow-light hover:dark:shadow-box-shadow-dark cursor-pointer hover:scale-105 active:scale-95 transition-all ease-in-out hover:border-primary dark:hover:border-primary duration-500"
              >
                <Plus className="text-primary" />
              </span>
            </div>
            <div>
              {specificationFields.map((field, index) => (
                <div key={field.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-4">
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name={`specification.${index}.key`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-start ml-1 text-light-primary-text dark:text-dark-primary-txt font-semibold">
                            Specification Name {index + 1}
                          </FormLabel>
                          <FormControl>
                            <Input {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full">
                    <FormField
                      control={form.control}
                      name={`specification.${index}.value`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-start ml-1 text-light-primary-text dark:text-dark-primary-txt font-semibold">
                            Specification description {index + 1}
                          </FormLabel>
                          <FormControl>
                            <Input {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="button"
                    variant={"primary"}
                    onClick={() => index > 0 && removeSpecification(index)}
                    className="rounded-2xl py-5 px-4 mt-2 sm:mt-7"
                  >
                    <IoMdRemove />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="flex gap-3 border-light-border dark:border-dark-muted-bg items-center border-t border-b py-3 my-5">
              <p className="text-light-primary-text dark:text-dark-primary-txt font-semibold text-base">Key Features</p>
              <span
                onClick={() => appendFeatures({ value: "" })}
                className="size-7 flex items-center justify-center border-2 dark:border-gray-900 rounded-xl hover:shadow-box-shadow-light hover:dark:shadow-box-shadow-dark cursor-pointer hover:scale-105 active:scale-95 transition-all ease-in-out hover:border-primary dark:hover:border-primary duration-500"
              >
                <Plus className="text-primary" />
              </span>
            </div>
            <div>
              {featureFields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-2 mt-4">
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name={`keyFeatures.${index}.value`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-start ml-1 text-light-primary-text dark:text-dark-primary-txt font-semibold">
                            Key Feature {index + 1}
                          </FormLabel>
                          <FormControl>
                            <Input {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="button" variant={"primary"} onClick={() => index > 0 && removeFeatures(index)} className="rounded-2xl py-5 px-4 mt-7">
                    <IoMdRemove />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <Button variant="primary" type="submit" className="mt-8 py-6 px-6" disabled={uploading}>
            {uploading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin" />
                Updating Product...
              </div>
            ) : (
              "Update Product"
            )}
          </Button>
        </CustomForm>
      )}
    </DashboardPageSection>
  );
};

export default UpdateProduct;
