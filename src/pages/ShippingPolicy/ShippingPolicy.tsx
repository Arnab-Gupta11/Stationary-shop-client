import PageHeader from "@/components/shared/PageHeader";
import Section from "@/components/shared/Section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const ShippingPolicy = () => {
  return (
    <>
      <PageHeader title="Shipping Policy">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Shipping-Policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>

      <Section>
        <div className="space-y-6 mt-10 mb-20 leading-relaxed">
          <h1 className="text-2xl font-semibold text-light-primary-text dark:text-dark-primary-txt">Shipping Policy</h1>

          <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
            At <span className="text-primary font-semibold">Notefy</span>, we are committed to delivering your orders swiftly and efficiently. Our
            Shipping Policy outlines the details of our shipping process to ensure a seamless shopping experience for you.
          </p>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">1. Processing Time</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              Orders are typically processed within <strong>1–2 business days</strong> from the time of purchase. During peak seasons or promotional
              events, processing times may be slightly extended.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">2. Shipping Methods</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              We offer several shipping options to cater to your preferences. Our standard shipping option provides reliable delivery within{" "}
              <strong>5–7 business days</strong>. For expedited needs, we offer express shipping within <strong>2–4 business days</strong>. Delivery
              times may vary based on your location.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">3. Shipping Costs</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              Costs are calculated based on weight, size, destination, and method. The total cost is visible during checkout. We occasionally offer{" "}
              <strong>free shipping promotions</strong>, so be sure to watch for those!
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">4. Order Tracking</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              Once shipped, you'll receive an email with a tracking number. Tracking may take up to 24 hours to update.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">5. Shipping Restrictions</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              We currently ship to <strong>USA, Canada, UK, Europe, Australia</strong>. Ensure your shipping address is accurate to avoid delivery
              issues. Some products may have restrictions due to local laws.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">6. Customs and Duties</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              For international orders, additional customs fees may apply depending on your country. These charges are the responsibility of the
              recipient. Contact your local customs office for more info.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">7. Address Accuracy</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              Please double-check your shipping details before placing your order. We are not responsible for delays caused by incorrect addresses.
            </p>
          </section>

          <section>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              If you have any questions, feel free to reach out to our support team at{" "}
              <a href="mailto:support@minimalin.com" className="underline text-primary">
                support@minimalin.com
              </a>
              .
            </p>
          </section>

          <p className="mt-8 font-medium text-light-secondary-text dark:text-dark-secondary-txt">
            Thank you for choosing <span className="font-semibold">Notefy</span>. We look forward to delivering your order with care and efficiency!
          </p>
        </div>
      </Section>
    </>
  );
};

export default ShippingPolicy;
