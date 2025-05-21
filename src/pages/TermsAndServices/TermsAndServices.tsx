import PageHeader from "@/components/shared/PageHeader";
import Section from "@/components/shared/Section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const TermsAndServices = () => {
  return (
    <>
      <PageHeader title="Terms and Services">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Terms-and-Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>

      <Section>
        <div className="space-y-6 mt-10 mb-20 leading-relaxed">
          <h1 className="text-2xl font-semibold text-light-primary-text dark:text-dark-primary-txt">Terms and Services</h1>
          <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">Last updated: May 17, 2025</p>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">1. Acceptance of Terms</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              By accessing or using <span className="text-primary font-semibold">Notefy</span> (the "Site", "we", "us", or "our"), you agree to be
              bound by these Terms and Conditions. If you do not agree with any part of the terms, then you may not access the Site.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">2. Use of the Site</h2>
            <ul className="list-disc list-inside text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              <li>You must be at least 18 years old or have parental consent to use this site.</li>
              <li>You agree not to use the Site for any illegal or unauthorized purpose.</li>
              <li>Violation of any of the Terms may result in termination of your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">3. User Accounts</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              When creating an account, you must provide accurate and complete information. You are responsible for safeguarding your password and for
              any activities under your account.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">4. Purchases</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              If you purchase a product or service through the Site, you agree to provide valid payment information and authorize us to charge the
              applicable fees.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">5. Intellectual Property</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              All content on the Site, including text, graphics, logos, and images, is the property of Notefy or its licensors and is protected by
              intellectual property laws. You may not use any content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">6. Termination</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              We reserve the right to suspend or terminate your access to the Site at any time, without notice or liability, for any reason, including
              if you violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">7. Limitation of Liability</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              In no event shall Notefy or its affiliates be liable for any indirect, incidental, special, or consequential damages arising from your
              use of the Site or products purchased.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">8. Governing Law</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of
              law principles.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">9. Changes to These Terms</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              We may update these Terms from time to time. Continued use of the Site after such changes constitutes your acceptance of the revised
              terms.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-light-primary-text dark:text-dark-primary-txt">10. Contact Us</h2>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              For any questions about these Terms and Conditions, please contact us:
            </p>
            <address className="not-italic text-light-secondary-text dark:text-dark-secondary-txt font-medium">
              Notefy
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

export default TermsAndServices;
