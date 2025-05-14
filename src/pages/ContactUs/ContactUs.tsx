import PageHeader from "@/components/shared/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { FaUser, FaPen, FaBook } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ContactUs() {
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
            <form className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full pl-10 pr-4 py-2 h-12 rounded-2xl focus:border  border-2 border-slate-100 dark:border-dark-muted-border bg-transparent px-3 bg-slate-50 dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm font-Exo font-medium focus-visible:shadow-md dark:focus-visible:shadow-dark-primary-bg"
                />
                <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full pl-10 pr-4 py-2 h-12 rounded-2xl focus:border  border-2 border-slate-100 dark:border-dark-muted-border bg-transparent px-3 bg-slate-50 dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm font-Exo font-medium focus-visible:shadow-md dark:focus-visible:shadow-dark-primary-bg"
                />
                <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full pl-10 pr-4 py-2 h-12 rounded-2xl focus:border  border-2 border-slate-100 dark:border-dark-muted-border bg-transparent px-3 bg-slate-50 dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm font-Exo font-medium focus-visible:shadow-md dark:focus-visible:shadow-dark-primary-bg"
                />
                <MdPhone className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full pl-10 pr-4 py-2 h-12 rounded-2xl focus:border  border-2 border-slate-100 dark:border-dark-muted-border bg-transparent px-3 bg-slate-50 dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm font-Exo font-medium focus-visible:shadow-md dark:focus-visible:shadow-dark-primary-bg"
                />
                <FaBook className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
              </div>

              <div className="md:col-span-2 relative">
                <textarea
                  placeholder="Enter message"
                  rows={5}
                  className="w-full pl-10 pr-4 pt-2.5 py-2 rounded-2xl focus:border  border-2 border-slate-100 dark:border-dark-muted-border bg-transparent px-3 bg-slate-50 dark:bg-dark-muted-bg text-light-primary-text dark:text-dark-primary-txt transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm font-Exo font-medium focus-visible:shadow-md dark:focus-visible:shadow-dark-primary-bg"
                ></textarea>
                <FaPen className="absolute top-3.5 left-3 text-gray-500" />
              </div>

              <div className="md:col-span-2">
                <Button type="submit" variant={"primary"} className="px-8 py-4">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
