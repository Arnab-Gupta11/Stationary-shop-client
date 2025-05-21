import PageHeader from "@/components/shared/PageHeader";
import Section from "@/components/shared/Section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <PageHeader title="Privacy Policy">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Privacy-Policy</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>
      <Section>
        <div className="space-y-6 mt-10 mb-20 leading-relaxed">
          <h1 className="text-2xl font-semibold text-light-primary-text dark:text-dark-primary-txt">Privacy Policy</h1>
          <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">Last updated: May 17, 2025</p>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">1. Introduction</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              This Privacy Policy describes how <span className="font-semibold text-primary">Notefy</span> ("the Site", "we", "us", or "our")
              collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from{" "}
              <a
                href="https://stationery-shop-server-jet.vercel.app/"
                className="underline underline-offset-2 text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://stationery-shop-server-jet.vercel.app
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">2. Information We Collect</h2>

            <div className="space-y-2 text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              <div>
                <h3 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Information You Provide Directly</h3>
                <ul className="list-disc list-inside">
                  <li>Name: John Doe</li>
                  <li>Address: 1234 Market Street, Apt 12B, San Francisco, CA, 94103</li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>Email: johndoe@example.com</li>
                  <li>Account Info: johndoe92 (username), [encrypted password]</li>
                  <li>Order Info: Billing/shipping address, order #2345, payment confirmation</li>
                  <li>Support Message: "I need help with my recent order #2345."</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Information Collected Automatically</h3>
                <ul className="list-disc list-inside">
                  <li>IP Address: 192.168.1.101</li>
                  <li>Device Info: Chrome on Windows 11</li>
                  <li>Browsing Behavior: Viewed “Men’s Hoodie”, added to cart, removed</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Information from Third Parties</h3>
                <ul className="list-disc list-inside">
                  <li>Payment Processor: Surjopay — credit card ending in 4242</li>
                  <li>Service Provider: Shopify</li>
                  <li>Advertising Partner: Facebook Pixel, Google Ads</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              <li>To process orders, fulfill deliveries, and manage your account</li>
              <li>To send transactional emails and order confirmations</li>
              <li>For customer service and support</li>
              <li>To personalize marketing messages and product suggestions</li>
              <li>For analytics and performance improvement</li>
              <li>For fraud prevention and security</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">4. Cookies</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">We use cookies for:</p>
            <ul className="list-disc list-inside text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              <li>Session management</li>
              <li>Cart storage</li>
              <li>Analytics (e.g., Google Analytics)</li>
              <li>Ad targeting</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">5. Sharing of Personal Information</h2>
            <ul className="list-disc list-inside text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              <li>Vendors: e.g., ShipStation, Klaviyo</li>
              <li>Payment Providers: Stripe, PayPal</li>
              <li>Marketing Partners: Facebook, Google</li>
              <li>Analytics Providers: Google Analytics, Hotjar</li>
              <li>Affiliates: Minimalin Canada Ltd.</li>
            </ul>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              We do not sell sensitive personal information to infer characteristics about you.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">
              6. Sale or Sharing of Personal Data (for Marketing Purposes)
            </h2>

            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium mb-2">
              We may have shared the following categories of personal information with business and marketing partners in the last 12 months:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left border border-gray-300 dark:border-gray-600 text-light-secondary-text dark:text-dark-secondary-txt font-medium">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 font-semibold text-light-primary-text dark:text-dark-primary-txt">Category</th>
                    <th className="border px-4 py-2 font-semibold text-light-primary-text dark:text-dark-primary-txt">Recipients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Identifiers (Name, Email, etc.)</td>
                    <td className="border px-4 py-2">Facebook Ads, Google Ads</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Commercial Info (Purchase History)</td>
                    <td className="border px-4 py-2">Shopify Audiences, Klaviyo</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Internet Activity (Browsing Data)</td>
                    <td className="border px-4 py-2">Google Analytics, Facebook Pixel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">7. User-Generated Content</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              Any reviews, comments, or feedback you post publicly on our Site are visible to others. Please do not share sensitive personal
              information in these submissions.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">8. Third-Party Links</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              Our Site may include links to third-party websites. We are not responsible for their privacy practices. Please review their policies
              before interacting with those websites.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">9. Contact Us</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              If you have questions about this Privacy Policy or would like to make a privacy request, please contact us:
            </p>
            <address className="not-italic text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              Minimalin
              <br />
              1234 Market Street, Apt 12B
              <br />
              San Francisco, CA 94103
              <br />
              Email:{" "}
              <a href="mailto:support@minimalin.com" className="underline">
                support@minimalin.com
              </a>
              <br />
              Phone: +1 (555) 123-4567
            </address>
          </section>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPolicy;
