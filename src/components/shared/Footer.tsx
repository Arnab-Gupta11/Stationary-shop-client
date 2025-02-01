import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950  text-white">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-white text-2xl font-bold">
            Note<span className="text-primary-bg">fy</span>
          </h1>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to={"/"}>
                <span className="hover:underline me-4 md:me-6">Home</span>
              </Link>
            </li>
            <li>
              <Link to={"/shop"}>
                <span className="hover:underline me-4 md:me-6">Shop</span>
              </Link>
            </li>
            <li>
              <Link to={"/cart"}>
                <span className="hover:underline me-4 md:me-6">Cart</span>
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <span className="hover:underline me-4 md:me-6">About</span>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex items-center justify-center gap-3 mb-3">
          <a href="https://www.facebook.com/arnab.gupta11/">
            <FaInstagram className="hover:scale-110 hover:text-primary-bg duration-1000" />
          </a>
          <a href="https://www.facebook.com/arnab.gupta11/" target="_blank">
            <FaFacebook className="hover:scale-110 hover:text-primary-bg duration-1000" />
          </a>
        </div>
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400 ">© 2025 Notefy . All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
