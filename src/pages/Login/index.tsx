"use client";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomPassword from "@/components/form/CustomPassword";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import useCustomForm from "@/hooks/useCustomForm";
import { loginFormDefaultValue, loginSchema } from "@/schemas/auth/austhSchema";
import { Link } from "react-router-dom";
import { z } from "zod";

const LoginPage = () => {
  const [form] = useCustomForm(loginSchema, loginFormDefaultValue);
  // console.log(form);
  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <div className="bg-primary-bg-light min-h-screen">
      <div className="grid place-items-center py-10 lg:py-28 mx-5 md:mx-0 ">
        <Card className="bg-white shadow-card-shadow-light border-none w-full xs:w-[400px] mx-3 xs:mx-5">
          <CardHeader className="rounded-t-xl rounded-b-3xl shadow-md shadow-slate-100">
            <CardTitle className="mx-auto">Logo</CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="mt-5 text-2xl font-bold text-slate-800 text-center">Welcome back</h1>
            <CustomForm onSubmit={onSubmit} form={form}>
              <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter your email"} />
              <CustomPassword form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter your password"} />

              <Button type="submit" className="w-full mt-8">
                Sign In
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
