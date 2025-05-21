/* eslint-disable @typescript-eslint/no-explicit-any */
import { BiLoaderCircle } from "react-icons/bi";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomPassword from "@/components/form/CustomPassword";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useCustomForm from "@/hooks/useCustomForm";
import { registerFormDefaultValue, registerSchema } from "@/schemas/auth/austhSchema";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useAddUserMutation } from "@/redux/features/auth/authApi";
import Logo from "@/components/shared/Logo";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // const dispatch = useAppDispatch();
  const [registerUser] = useAddUserMutation(undefined);
  const [form] = useCustomForm(registerSchema, registerFormDefaultValue);

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    try {
      setIsLoading(true);
      const userInfo = {
        fullName: values.fullName,
        email: values.email,
        password: values.password,
        confirmedPassword: values.confirmedPassword,
      };
      const res = await registerUser(userInfo).unwrap();
      if (res?.success === true) {
        toast.success(res?.message);
        form.reset();
        navigate("/login");
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-light-primary-bg dark:bg-dark-primary-bg min-h-screen">
      <div className="grid place-items-center py-10 lg:py-20 mx-5 md:mx-0 ">
        <Card className="bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-light-border dark:border-dark-border rounded-3xl shadow-dashboard-page-shadow-light dark:shadow-dashboard-page-shadow-dark w-full xs:w-[400px] mx-3 xs:mx-5">
          <CardHeader className="rounded-t-3xl rounded-b-[40px] shadow-lg shadow-light-muted-bg dark:shadow-dark-muted-bg">
            <CardTitle className="mx-auto">
              <CardTitle className="mx-auto">
                <Link to={"/"}>
                  <Logo />
                </Link>
              </CardTitle>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="mt-5 text-lg xs:text-xl font-bold text-light-primary-text dark:text-dark-primary-txt text-center">Create Your Account</h1>
            <CustomForm onSubmit={onSubmit} form={form}>
              <CustomInput form={form} fieldName={"fullName"} label={"Full Name"} inputType={"text"} placeholder={"Enter your full name"} />
              <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter your email"} />
              <CustomPassword form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter your password"} />
              <CustomPassword
                form={form}
                fieldName={"confirmedPassword"}
                label={"Confirmed Password"}
                inputType={"password"}
                placeholder={"Confirm your password"}
              />
              <Button type="submit" disabled={isLoading} className=" w-full mt-8">
                {isLoading ? <BiLoaderCircle className="animate-spin" /> : "Sign Up"}
              </Button>
            </CustomForm>
          </CardContent>
          <CardFooter className="text-sm font-medium text-slate-700 dark:text-dark-secondary-txt flex items-center justify-center">
            <div>
              Already have an Account?
              <Link to="/login">
                <span className="font-semibold text-primary hover:underline ml-1">Sign In</span>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
