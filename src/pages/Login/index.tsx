/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomPassword from "@/components/form/CustomPassword";
import Logo from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useCustomForm from "@/hooks/useCustomForm";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser, TUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { loginFormDefaultValue, loginSchema } from "@/schemas/auth/austhSchema";
import { verifyToken } from "@/utils/verifyToken";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiLoaderCircle } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [loginUser] = useLoginMutation(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [form] = useCustomForm(loginSchema, loginFormDefaultValue);
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      setIsLoading(true);
      const userInfo = {
        email: values.email,
        password: values.password,
      };
      const res = await loginUser(userInfo).unwrap();
      if (res?.success === true) {
        const user = verifyToken(res.data?.token) as TUser;
        dispatch(setUser({ user: user, token: res.data?.token }));
        toast.success(res?.message);
        form.reset();
        navigate(location?.state ? location.state : "/");
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-primary-bg-light min-h-screen">
      <div className="grid place-items-center py-10 lg:py-28 mx-5 md:mx-0 ">
        <Card className="bg-white shadow-card-shadow-light border-none w-full xs:w-[400px] mx-3 xs:mx-5">
          <CardHeader className="rounded-t-xl rounded-b-3xl shadow-md shadow-slate-100">
            <CardTitle className="mx-auto">
              <Logo />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="mt-5 text-lg sm:text-xl font-bold text-slate-800 text-center">Welcome back</h1>
            <CustomForm onSubmit={onSubmit} form={form}>
              <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter your email"} />
              <CustomPassword form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter your password"} />

              <Button type="submit" disabled={isLoading} className=" w-full mt-8">
                {isLoading ? <BiLoaderCircle className="animate-spin" /> : "Sign In"}
              </Button>
            </CustomForm>
          </CardContent>
          <CardFooter className="text-sm font-medium text-slate-700 flex items-center justify-center">
            <div>
              Don&apos;t have an Account?
              <Link to="/register">
                <span className="font-semibold text-primary-text hover:underline ml-1">Sign Up</span>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
