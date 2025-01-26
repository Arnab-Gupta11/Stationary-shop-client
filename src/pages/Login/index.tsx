"use client";
import CustomForm from "@/components/form/CustomForm";
import CustomInput from "@/components/form/CustomInput";
import CustomPassword from "@/components/form/CustomPassword";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
    <div>
      <Card className="bg-primary-bg-light dark:bg-primary-bg-dark shadow-card-shadow-light dark:shadow-card-shadow-dark border-none">
        <CardHeader>
          <CardTitle className="mx-auto">Logo</CardTitle>
          <CardDescription className="text-center text-sm font-medium text-slate-800 dark:text-slate-200">
            Welcome back! Log in to access your account and stay connected.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CustomForm onSubmit={onSubmit} form={form}>
            <CustomInput form={form} fieldName={"email"} label={"Email"} inputType={"text"} placeholder={"Enter your email"} />
            <CustomPassword form={form} fieldName={"password"} label={"Password"} inputType={"password"} placeholder={"Enter your password"} />
            <p className="text-sm font-semibold text-primary-text hover:underline mt-2">
              <Link to="/account/reset-password-link">Forgot password?</Link>
            </p>

            <Button type="submit" className="w-full mt-8">
              Sign In
            </Button>
          </CustomForm>
        </CardContent>
        <CardFooter>
          <p className="text-sm font-medium text-center text-slate-700 dark:text-slate-300">
            <Link to="/account/register">
              Don&apos;t have an Account? <span className="font-semibold text-primary-text hover:underline">Sign Up</span>
            </Link>
          </p>
        </CardFooter>
      </Card>
      {/* </TabsContent> */}
    </div>
  );
};

export default LoginPage;
