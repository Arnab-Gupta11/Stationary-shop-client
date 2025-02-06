import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="text-center p-10 bg-white shadow-lg rounded-2xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-2">Oops! Page Not Found</p>
        <Link to="/" className="mt-6 inline-block">
          <motion.button
            className="px-6 py-3 bg-gradient-to-b from-gray-700 to-gray-900 font-medium text-white shadow hover:bg-gradient-to-br rounded-lg duration-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            Go to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
