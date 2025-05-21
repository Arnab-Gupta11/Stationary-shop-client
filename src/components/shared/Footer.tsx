import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-[90%] mx-auto flex flex-col bs:flex-row md:justify-between md:items-start gap-8">
        {/* About Section */}
        <div className="space-y-4 w-full md:w-1/2 bs:w-1/3">
          <Logo />
          <p className="text-sm text-gray-400">
            Notefy is a dynamic and innovative online stationary shop that offers a wide range of products to customers worldwide.
          </p>
          <div className="flex space-x-4 text-xl text-white">
            <FaFacebookF className="hover:text-primary hover:scale-105 cursor-pointer" />
            <FaTwitter className="hover:text-primary hover:scale-105 cursor-pointer" />
            <FaYoutube className="hover:text-primary hover:scale-105 cursor-pointer" />
            <FaInstagram className="hover:text-primary hover:scale-105 cursor-pointer" />
            <FaTiktok className="hover:text-primary hover:scale-105 cursor-pointer" />
          </div>
        </div>

        {/* Accordions for mobile */}
        <div className="md:hidden col-span-3 space-y-4 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="quicklink" className="border-dark-border dark:border-dark-border">
              <AccordionTrigger>Quick Link</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="hover:text-primary transition duration-500 font-medium">
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li className="hover:text-primary transition duration-500 font-medium">
                    <Link to="/cart">My Cart</Link>
                  </li>
                  <li className="hover:text-primary transition duration-500 font-medium">
                    <Link to="/wishlist">Wishlist</Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="information" className="border-dark-border dark:border-dark-border">
              <AccordionTrigger>Information</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="hover:text-primary transition duration-500 font-medium">
                    <Link to="/about">About us</Link>
                  </li>
                  <li className="hover:text-primary  transition duration-500 font-medium">
                    <Link to="/contact-us">Contact us</Link>
                  </li>
                  <li className="hover:text-primary transition duration-500 font-medium">
                    <Link to="/faq">FAQ</Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="policies" className="border-dark-border dark:border-dark-border">
              <AccordionTrigger>Policies</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="hover:text-primary transition duration-500 font-medium">
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="hover:text-primary transition duration-500 font-medium">
                    <Link to="/shipping-policy">Shipping Policy</Link>
                  </li>
                  <li className="hover:text-primary transition duration-500 font-medium">
                    <Link to="/terms-of-service">Terms of Service</Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Desktop lists */}
        <div className="hidden md:flex gap-24 xl:gap-40 justify-between bs:justify-end items-start w-full bs:w-2/3 ">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-primary hover:scale-105 transition duration-500 font-medium">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="hover:text-primary hover:scale-105 transition duration-500 font-medium">
                <Link to="/cart">My Cart</Link>
              </li>
              <li className="hover:text-primary hover:scale-105 transition duration-500 font-medium">
                <Link to="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-primary hover:scale-105 transition duration-500 font-medium">
                <Link to="/about">About us</Link>
              </li>
              <li className="hover:text-primary hover:scale-105 transition duration-500 font-medium">
                <Link to="/contact-us">Contact us</Link>
              </li>
              <li className="hover:text-primary hover:scale-105 transition duration-500 font-medium">
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-primary hover:scale-105 transition duration-500 font-medium">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="hover:text-primary hover:scale-105 transition duration-500 font-medium">
                <Link to="/shipping-policy">Shipping Policy</Link>
              </li>
              <li className="hover:text-primary hover:scale-105 transition duration-500 font-medium">
                <Link to="/terms-of-service">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t-2 border-dark-muted-bg pt-4 text-center text-sm text-gray-500">
        © 2025 <strong className="text-white">Notefy</strong>. All rights reserved.
      </div>
    </footer>
  );
}
