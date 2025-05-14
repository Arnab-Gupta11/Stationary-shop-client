import PageHeader from "@/components/shared/PageHeader";
import Section from "@/components/shared/Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

// FAQ data array
const faqData = [
  {
    question: "How can I track my order?",
    answer: "Once your order has been shipped, you'll receive a confirmation email with a tracking number and a link to track your package.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be unused and in their original packaging. Please visit our returns page for more info.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping usually takes 3–7 business days. Expedited options are available at checkout.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping times and costs vary depending on the destination.",
  },
  {
    question: "How can I cancel or change my order?",
    answer: "You can cancel or modify your order within 2 hours of placing it by contacting our support team.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit/debit cards, PayPal, Apple Pay, Google Pay, and more.",
  },
];

export default function FAQ() {
  return (
    <>
      <PageHeader title="Frequently Asked Questions">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Faq</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>
      <div className="pt-12 pb-28">
        <Section>
          <div className="max-w-3xl mx-auto px-4 py-10">
            <Accordion type="single" collapsible className="w-full space-y-2 ">
              {faqData.map((faq, index) => (
                <AccordionItem
                  className="border-2 border-light-border dark:border-dark-border px-3 rounded-2xl shadow-dashboard-page-shadow-light dark:shadow-dashboard-page-shadow-dark"
                  key={index}
                  value={`item-${index + 1}`}
                >
                  <AccordionTrigger className="text-base sm:text-lg text-light-primary-text dark:text-dark-primary-txt font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-base text-light-secondary-text dark:text-dark-secondary-txt font-medium">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Section>
      </div>
    </>
  );
}
