import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomSelect from "@/components/form/CustomSelect";
import CustomTextArea from "@/components/form/CustomTextArea";
import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import useCustomForm from "@/hooks/useCustomForm";
import { defaultAddProductValues, productValidationSchema } from "@/schemas/ProductSchem";
import { Plus } from "lucide-react";
import { z } from "zod";

const AddProduct = () => {
  const categoryOptions = [
    { value: "Writing", label: "Writing" },
    { value: "Office Supplies", label: "Office Supplies" },
    { value: "Art Supplies", label: "Art Supplies" },
    { value: "Educational", label: "Educational" },
    { value: "Technology", label: "Technology" },
  ];
  const [form] = useCustomForm(productValidationSchema, defaultAddProductValues);
  // console.log(form);
  const onSubmit = async (values: z.infer<typeof productValidationSchema>) => {
    console.log(values);
    console.log("hello");
    // try {
    //   setIsLoading(true);
    //   const userInfo = {
    //     email: values.email,
    //     password: values.password,
    //   };
    //   const res = await loginUser(userInfo).unwrap();
    //   console.log(res);
    //   console.log(res.success);
    //   if (res?.success === true) {
    //     const user = verifyToken(res.data?.token) as TUser;
    //     dispatch(setUser({ user: user, token: res.data?.token }));
    //     toast.success(res?.message);
    //     form.reset();
    //     navigate(location?.state ? location.state : "/");
    //   }
    // } catch (err: any) {
    //   toast.error(err?.data?.message);
    // } finally {
    //   setIsLoading(false);
    // }
  };
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <Plus />
            <span>Add Product</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-white overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
          </SheetHeader>
          <div className="">
            <h1 className="mt-5 text-2xl font-bold text-slate-800 text-center">Welcome back</h1>
            <CustomForm onSubmit={onSubmit} form={form}>
              <CustomInput form={form} fieldName={"name"} label={"Product Name"} inputType={"text"} placeholder={"Enter Product Name"} />
              <CustomInput form={form} fieldName={"brand"} label={"Brand Name"} inputType={"text"} placeholder={"Enter Product Brand Name"} />
              {/* <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel className="text-slate-800 dark:text-slate-200 text-start">Product Image</FormLabel>
                    <FormControl>
                      <Input type="file" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              /> */}
              <CustomSelect
                form={form}
                fieldName={"category"}
                label={"Product Category"}
                options={categoryOptions}
                placeholder={"Select Product Category"}
              />
              <CustomInput form={form} fieldName={"quantity"} label={"Product Quantity"} inputType={"text"} placeholder={"Enter Product Quantity"} />
              <CustomInput form={form} fieldName={"price"} label={"Product Price"} inputType={"text"} placeholder={"Enter Product Name"} />
              {/* <CustomTextArea form={form} fieldName={"description"} label={"Description"} placeholder={"Enter product description"} /> */}

              <Button type="submit" className="w-full mt-8">
                Submit
              </Button>
            </CustomForm>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AddProduct;
