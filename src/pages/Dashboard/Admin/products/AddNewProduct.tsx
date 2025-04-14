/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomInput from "@/components/form/CustomInput";
import CustomSelect from "@/components/form/CustomSelect";
import { Button } from "@/components/ui/button";
import { SelectItem } from "@/components/ui/select";
import { Loader2, Plus } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import CreateImageUploader from "@/components/form/CustomImageUplaoder/CreateImageUploader";
import { TCategoryOptions } from "@/types/category.types";

import CustomForm from "@/components/form/CustomForm";

import CustomTextArea from "@/components/form/CustomTextArea";
import DashboardPageSection from "../../shared/DashboardPageSection";
import { useGetAllSubCategoriesQuery } from "@/redux/features/categories/categories.api";
import { useAddNewProductMutation } from "@/redux/features/product/product.api";
import { useGetAllBrandsQuery } from "@/redux/features/brand";
import { TBrand } from "@/types/brand.types";
import { createProductValidationSchema } from "@/schemas/product";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IoMdRemove } from "react-icons/io";
import { uploadFile } from "@/utils/uploadFile";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
type TFormValues = z.infer<typeof createProductValidationSchema>;

const createProductDefaultValue = {
  name: "",
  description: "",
  price: "",
  category: "",
  brand: "",
  quantity: "",
  weight: "",
  images: [],
  keyFeatures: [{ value: "" }],
  specification: [{ key: "", value: "" }],
};

const AddNewProduct = () => {
  const [addNewProduct] = useAddNewProductMutation(undefined);
  const navigate = useNavigate();
  const { data: categoryOption, isLoading: isCategoryOptionLoading } = useGetAllSubCategoriesQuery(undefined);
  const { data: brandOption, isLoading: isBrandOptionLoading } = useGetAllBrandsQuery(undefined);

  const form = useForm<TFormValues>({
    resolver: zodResolver(createProductValidationSchema),
    defaultValues: createProductDefaultValue,
    mode: "onChange",
  });
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

      // Validate icon field
      if (data.images.length === 0) {
        form.trigger("images");
        setUploading(false);
        return;
      }

      const imageUrls = await uploadFile(data.images);
      if (imageUrls.length !== data.images.length) {
        toast("Some images failed to upload. Try again later.");
        setUploading(false);
        return;
      }
      const keyFeatures = data.keyFeatures.map((item) => item.value);
      const specification: { [key: string]: string } = {};
      data.specification.forEach((item: { key: string; value: string }) => (specification[item.key] = item.value));

      const payload = {
        ...data,
        keyFeatures,
        specification,
        images: imageUrls,
        price: parseFloat(data.price),
        quantity: parseInt(data.quantity),
        weight: parseFloat(data.weight),
      };
      const res = await addNewProduct(payload).unwrap();
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
    <>
      <DashboardPageSection>
        <h1 className="text-lg text-light-primary-text dark:text-dark-primary-txt font-bold">Add New Product</h1>

        <CustomForm form={form} onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInput fieldName="name" label="Product Name" placeholder="Enter product name" inputType="text" form={form} />
            <CustomInput fieldName="weight" label="Product Weight" placeholder="Enter product weight" inputType="number" form={form} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomInput fieldName="price" label="Product Price" placeholder="Enter product price" inputType="number" form={form} />
            <CustomInput fieldName="quantity" label="Product Quantity" placeholder="Enter product quantity" inputType="number" form={form} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CustomSelect form={form} fieldName="category" label="Product Category" placeholder="Select category">
              {isCategoryOptionLoading && (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                </div>
              )}
              {!isCategoryOptionLoading &&
                categoryOption?.data?.length > 0 &&
                categoryOption?.data?.map((option: TCategoryOptions) => (
                  <SelectItem key={option._id} value={option._id}>
                    {option.name}
                  </SelectItem>
                ))}
            </CustomSelect>
            <CustomSelect form={form} fieldName="brand" label="Product Brand" placeholder="Select brand">
              {isBrandOptionLoading && (
                <div className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                </div>
              )}
              {!isBrandOptionLoading &&
                brandOption?.data?.length > 0 &&
                brandOption?.data?.map((option: TBrand) => (
                  <SelectItem key={option._id} value={option._id}>
                    {option.name}
                  </SelectItem>
                ))}
            </CustomSelect>
          </div>
          <CustomTextArea fieldName="description" label="Product Description" placeholder="Enter product description" inputType="text" form={form} />

          <CreateImageUploader control={form.control} name="images" label="Product images" maxFiles={4} />
          {/* Specification  */}
          <div>
            <div className="flex justify-between border-light-border dark:border-dark-muted-bg items-center border-t border-b py-3 my-5">
              <p className="text-light-primary-text dark:text-dark-primary-txt font-semibold text-base">Specification</p>
              <Button onClick={() => appendSpecification({ key: "", value: "" })} variant="primary" className="size-10" type="button">
                <Plus />
              </Button>
            </div>
            <div>
              {specificationFields.map((field, index) => {
                return (
                  <div key={field.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mt-4">
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name={`specification.${index}.key`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-start ml-1 text-light-primary-text dark:text-dark-primary-txt">
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
                            <FormLabel className="text-start ml-1 text-light-primary-text dark:text-dark-primary-txt">
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
                      className="rounded-2xl py-5 px-4 mt-2  sm:mt-7"
                    >
                      <IoMdRemove />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Features  */}
          <div>
            <div className="flex justify-between border-light-border dark:border-dark-muted-bg items-center border-t border-b py-3 my-5">
              <p className="text-light-primary-text dark:text-dark-primary-txt font-semibold text-base">Key Features</p>
              <Button onClick={() => appendFeatures({ value: "" })} variant="primary" className="size-10" type="button">
                <Plus />
              </Button>
            </div>
            <div>
              {featureFields.map((field, index) => {
                return (
                  <div key={field.id} className="flex items-center gap-2 mt-4">
                    <div className="flex-1">
                      <FormField
                        control={form.control}
                        name={`keyFeatures.${index}.value`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-start ml-1 text-light-primary-text dark:text-dark-primary-txt">
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
                    <Button
                      type="button"
                      variant={"primary"}
                      onClick={() => index > 0 && removeFeatures(index)}
                      className="rounded-2xl py-5 px-4 mt-7"
                    >
                      <IoMdRemove />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          <Button variant="primary" type="submit" className="mt-8 py-6 px-6" disabled={uploading}>
            {uploading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin" />
                Adding Product...
              </div>
            ) : (
              "Add Product"
            )}
          </Button>
        </CustomForm>
      </DashboardPageSection>
    </>
  );
};

export default AddNewProduct;
