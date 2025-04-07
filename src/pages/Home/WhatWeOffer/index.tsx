import Section from "@/components/shared/Section";
import { motion } from "framer-motion";
import { MdOutlineLocalShipping } from "react-icons/md";
import { PiShippingContainerBold } from "react-icons/pi";
import { LuHandCoins } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";
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
    <div className="bg-primary-bg-light pt-20 pb-24">
      <Section>
        {/* Heading Animation */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-base xsm:text-lg md:text-2xl font-bold mb-3 text-slate-900">
            What We <span className="text-primary-bg">Offer</span>
          </h1>
          <p className="text-xs xsm:text-sm md:text-base font-medium text-slate-700 mb-10">Making shopping simple, secure, and stress-free.</p>
        </motion.div>

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
                className="flex items-center justify-center gap-5 shadow-card-shadow-light rounded-3xl py-6 px-8 bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <motion.div className="flex-shrink-0" whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}>
                  <Logo className="text-primary-bg text-4xl" />
                </motion.div>
                <div>
                  <h1 className="text-base font-bold text-slate-800">{item.title}</h1>
                  <p className="text-sm text-slate-600 font-medium">{item.description}</p>
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
