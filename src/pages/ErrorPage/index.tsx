import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="text-center p-10 bg-light-secondary-bg dark:bg-dark-secondary-bg shadow-lg rounded-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold text-gradient">404</h1>
        <p className="text-xl text-light-primary-text dark:text-dark-primary-txt mt-2">Oops! Page Not Found</p>
        <Link to="/" className="mt-6 inline-block">
          <Button variant="primary">Go to Home</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
