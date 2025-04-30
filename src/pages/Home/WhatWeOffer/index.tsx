import Section from "@/components/shared/Section";
import { motion } from "framer-motion";
import { MdOutlineLocalShipping } from "react-icons/md";
import { PiShippingContainerBold } from "react-icons/pi";
import { LuHandCoins } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";
import SectionHeader from "../SectionHeader/SectionHeader";
const WhatWeOffer = () => {
  const offers = [
    {
      Logo: PiShippingContainerBold,
      title: "Free Shipping",
      description: "Free shipping on orders over $65.",
    },
    {
      Logo: MdOutlineLocalShipping,
      title: "Free Returns",
      description: "30-days free return policy.",
    },
    {
      Logo: LuHandCoins,
      title: "Secured Payments",
      description: "We accept all major credit cards.",
    },
    {
      Logo: MdSupportAgent,
      title: "Customer Service",
      description: "Top-notch customer service.",
    },
  ];

  return (
    <div className="pt-24">
      <Section>
        {/* Heading*/}
        <SectionHeader heading="What We" subheading="Offer" />

        {/* Cards Animation */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {offers.map((item) => {
            const { Logo } = item;
            return (
              <motion.div
                key={item.title}
                className="flex items-center justify-center gap-5 shadow-card-shadow rounded-3xl py-6 px-8 bg-light-secondary-bg dark:bg-dark-secondary-bg border-2 border-light-card-border dark:border-dark-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <motion.div className="flex-shrink-0" whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}>
                  <Logo className="text-primary text-4xl" />
                </motion.div>
                <div>
                  <h1 className="text-base font-bold text-light-primary-text dark:text-dark-primary-txt">{item.title}</h1>
                  <p className="text-sm text-light-secondary-text dark:text-dark-secondary-txt font-medium">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </div>
  );
};

export default WhatWeOffer;
