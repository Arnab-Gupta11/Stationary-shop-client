import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import darkLogo from "../../assets/images/logo/DarkLogo.png";

const Footer = () => {
  return (
    <footer className="bg-black  text-white">
      <div className="w-full max-w-[90%] mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between">
          <img src={darkLogo} alt="logo" className="w-28 h-10" />
          <ul className="flex  flex-wrap items-center mb-6 text-sm font-medium text-slate-300 sm:mb-0 mt-6 ">
            <li>
              <Link to={"/"}>
                <span className="hover:border-b pb-0.5 hover:text-primary-bg hover:border-primary-bg duration-700 ease-in-out">Home</span>
              </Link>
            </li>
            <li>
              <Link to={"/shop"}>
                <span className="hover:border-b pb-0.5 hover:text-primary-bg hover:border-primary-bg duration-700 ease-in-out ml-4 md:ml-6 hover:">
                  Shop
                </span>
              </Link>
            </li>
            <li>
              <Link to={"/cart"}>
                <span className="hover:border-b pb-0.5 hover:text-primary-bg hover:border-primary-bg duration-700 ease-in-out ml-4 md:ml-6">
                  Cart
                </span>
              </Link>
            </li>
            <li>
              <Link to={"/about"}>
                <span className="hover:border-b pb-0.5 hover:text-primary-bg hover:border-primary-bg duration-700 ease-in-out ml-4 md:ml-6">
                  About
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="mb-6 border-gray-600 sm:mx-auto sm:mt-6 lg:my-4" />
        <div className="flex items-center justify-center gap-3 mb-3">
          <a href="https://www.facebook.com/arnab.gupta11/">
            <FaInstagram className="hover:scale-110 hover:text-primary-bg duration-1000" />
          </a>
          <a href="https://www.facebook.com/arnab.gupta11/" target="_blank">
            <FaFacebook className="hover:scale-110 hover:text-primary-bg duration-1000" />
          </a>
          <a href="https://www.facebook.com/arnab.gupta11/" target="_blank">
            <FaTwitter className="hover:scale-110 hover:text-primary-bg duration-1000" />
          </a>
        </div>
        <span className="block text-sm text-gray-500 text-center dark:text-gray-100 ">© 2025 Notefy . All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
