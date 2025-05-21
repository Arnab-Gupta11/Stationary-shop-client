/* eslint-disable @typescript-eslint/no-explicit-any */
import PageHeader from "@/components/shared/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useSendContactMessageMutation } from "@/redux/features/contact/contact.api";
import { TContact } from "@/types/contact.types";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaUser, FaPen, FaBook } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [sendContactMessage] = useSendContactMessageMutation(undefined);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<TContact>();
  const onSubmit: SubmitHandler<TContact> = async (data) => {
    try {
      setLoading(true);

      const res = await sendContactMessage(data).unwrap();
      if (res?.success === true) {
        toast.success(res?.message);
        reset();
      } else {
        toast.error(res?.data?.message || "Something went wrong. Try again later.");
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <PageHeader title="Contact Us">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Contact-Us</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>
      <div className="pt-12 pb-28">
        <section className="max-w-7xl mx-auto px-4 py-12">
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-dashboard-page-shadow-light dark:shadow-dashboard-page-shadow-dark rounded-3xl p-6 text-center border-2 border-light-border dark:border-dark-border">
              <h3 className="text-xl text-light-primary-text dark:text-dark-primary-txt font-bold mb-2">Email Address</h3>
              <p className="text-light-secondary-text dark:text-dark-secondary-txt">example@example.com</p>
              <p className="text-light-secondary-text dark:text-dark-secondary-txt">example2@example.com</p>
            </div>
            <div className="bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-dashboard-page-shadow-light dark:shadow-dashboard-page-shadow-dark rounded-3xl p-6 text-center border-2 border-light-border dark:border-dark-border">
              <h3 className="text-xl text-light-primary-text dark:text-dark-primary-txt font-bold mb-2">Phone Number</h3>
              <p className="text-light-secondary-text dark:text-dark-secondary-txt">+0123-456789</p>
              <p className="text-light-secondary-text dark:text-dark-secondary-txt">+9879-654321</p>
            </div>
            <div className="bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-dashboard-page-shadow-light dark:shadow-dashboard-page-shadow-dark rounded-3xl p-6 text-center border-2 border-light-border dark:border-dark-border">
              <h3 className="text-xl font-bold text-light-primary-text dark:text-dark-primary-txt mb-2">Location</h3>
              <p className="text-light-secondary-text dark:text-dark-secondary-txt">House 123, Road 4, Dhanmondi, Dhaka 1205, Bangladesh.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-light-secondary-bg dark:bg-dark-secondary-bg rounded-3xl shadow-box-shadow-light dark:shadow-box-shadow-dark border-2 border-light-border dark:border-dark-border p-6">
            <h2 className="text-2xl font-semibold text-light-primary-text dark:text-dark-primary-txt mb-6">Send Message</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className={`w-full pl-10 pr-4 py-2 h-12 rounded-2xl border-2 dark:border-dark-border border-light-border bg-slate-50 dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt text-sm font-Exo font-medium focus:outline-none focus-visible:shadow-md dark:focus-visible:shadow-dark-primary-bg transition-colors`}
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                    />
                    <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name.message}</p>}
                </div>

                {/* Email */}
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className={`w-full pl-10 pr-4 py-2 h-12 rounded-2xl border-2 dark:border-dark-border border-light-border  bg-slate-50 dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt text-sm font-Exo font-medium focus:outline-none focus-visible:shadow-md dark:focus-visible:shadow-dark-primary-bg transition-colors`}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email.message}</p>}
                </div>

                {/* Phone */}
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className={`w-full pl-10 pr-4 py-2 h-12 rounded-2xl border-2 dark:border-dark-border border-light-border bg-slate-50 dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt text-sm font-Exo font-medium focus:outline-none focus-visible:shadow-md dark:focus-visible:shadow-dark-primary-bg transition-colors`}
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10,15}$/,
                          message: "Invalid phone number",
                        },
                      })}
                    />
                    <MdPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone.message}</p>}
                </div>

                {/* Subject */}
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter subject"
                      className={`w-full pl-10 pr-4 py-2 h-12 rounded-2xl border-2 dark:border-dark-border border-light-border  bg-slate-50 dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt text-sm font-Exo font-medium focus:outline-none focus-visible:shadow-md dark:focus-visible:shadow-dark-primary-bg transition-colors`}
                      {...register("subject", {
                        required: "Subject is required",
                        minLength: {
                          value: 3,
                          message: "Subject must be at least 3 characters",
                        },
                      })}
                    />
                    <FaBook className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                  </div>
                  {errors.subject && <p className="text-red-500 text-xs mt-1 ml-1">{errors.subject.message}</p>}
                </div>
              </div>

              {/* Message */}
              <div>
                <div className=" relative mt-4">
                  <textarea
                    placeholder="Enter message"
                    rows={5}
                    className={`w-full pl-10 pr-4 pt-2.5 py-2 rounded-2xl border-2 dark:border-dark-border border-light-border bg-slate-50 dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt text-sm font-Exo font-medium focus:outline-none focus-visible:shadow-md dark:focus-visible:shadow-dark-primary-bg transition-colors`}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message should be at least 10 characters",
                      },
                    })}
                  ></textarea>
                  <FaPen className="absolute top-3.5 left-3 text-gray-500" />
                </div>
                {errors.message && <p className="text-red-500 text-xs ml-1">{errors.message.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 my-8">
                <Button type="submit" variant={"primary"} className="px-8 py-4 md:px-12 md:py-5" disabled={loading}>
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="animate-spin" />
                      Submitting...
                    </div>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
