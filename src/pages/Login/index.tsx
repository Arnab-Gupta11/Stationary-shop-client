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
  const [isGuestLoading, setIsGuestLoading] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(false);
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
  const credentialLogin = async (data: { email: string; password: string }) => {
    try {
      if (data.email === "guest@gmail.com") {
        setIsGuestLoading(true);
      } else {
        setIsAdminLoading(true);
      }

      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await loginUser(userInfo).unwrap();
      if (res?.success === true) {
        const user = verifyToken(res.data?.token) as TUser;
        dispatch(setUser({ user: user, token: res.data?.token }));
        toast.success(res?.message);
        if (data.email === "guest@gmail.com") {
          navigate(location?.state ? location.state : "/");
        } else {
          navigate("/dashboard/admin/overview");
        }
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    } finally {
      if (data.email === "guest@gmail.com") {
        setIsGuestLoading(false);
      } else {
        setIsAdminLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen">
      <div className="grid place-items-center py-10 lg:py-28 mx-5 md:mx-0 ">
        <Card className="bg-light-secondary-bg dark:bg-dark-secondary-bg w-full xs:w-[400px] mx-3 xs:mx-5 border-2 border-light-border dark:border-dark-border rounded-3xl shadow-dashboard-page-shadow-light dark:shadow-dashboard-page-shadow-dark">
          <CardHeader className="rounded-t-3xl rounded-b-[40px] shadow-lg shadow-light-muted-bg dark:shadow-dark-muted-bg">
            <CardTitle className="mx-auto">
              <Link to={"/"}>
                <Logo />
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="mt-5 text-lg sm:text-xl font-bold text-light-primary-text dark:text-dark-primary-txt text-center">Welcome back</h1>
            <CustomForm onSubmit={onSubmit} form={form}>
              <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter your email"} />
              <CustomPassword form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter your password"} />

              <Button variant={"primary"} type="submit" disabled={isLoading} className=" w-full mt-8">
                {isLoading ? <BiLoaderCircle className="animate-spin" /> : "Sign In"}
              </Button>
            </CustomForm>
          </CardContent>
          <CardFooter className="text-sm font-medium text-slate-700 dark:text-dark-secondary-txt flex items-center justify-center">
            <div>
              Don&apos;t have an Account?
              <Link to="/register">
                <span className="font-semibold text-primary hover:underline ml-1">Sign Up</span>
              </Link>
            </div>
          </CardFooter>

          <h1 className="mx-6 border-t-2 border-gray-300 dark:border-dark-border text-lg text-light-primary-text dark:text-dark-primary-txt font-semibold py-4">
            Credential
          </h1>
          <div className="grid grid-cols-2 pb-8 px-6  gap-5">
            <Button
              onClick={() => credentialLogin({ email: "guest@gmail.com", password: "12345678" })}
              type="submit"
              disabled={isGuestLoading}
              className=" w-full"
              variant={"primary"}
            >
              {isGuestLoading ? <BiLoaderCircle className="animate-spin" /> : "Guest User"}
            </Button>
            <Button
              onClick={() => credentialLogin({ email: "admin@gmail.com", password: "12345678" })}
              type="submit"
              disabled={isAdminLoading}
              className=" w-full"
              variant={"primary"}
            >
              {isAdminLoading ? <BiLoaderCircle className="animate-spin" /> : "Admin"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
