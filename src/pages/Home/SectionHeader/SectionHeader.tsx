import { motion } from "framer-motion";
const SectionHeader = ({ heading, subheading }: { heading: string; subheading: string }) => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-base xsm:text-lg md:text-3xl font-bold text-light-primary-text dark:text-dark-primary-txt  font-Aclonica mb-12">
        {heading} <span className="text-primary">{subheading}</span>
      </h1>
    </motion.div>
  );
};

export default SectionHeader;
