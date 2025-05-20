import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaAmazonPay,
  FaApplePay,
  FaBitcoin,
  FaGooglePay,
  FaPaypal,
  FaCcVisa,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-[90%] mx-auto flex flex-col bs:flex-row md:justify-between md:items-start gap-8">
        {/* About Section */}
        <div className="space-y-4 w-full md:w-1/2 bs:w-1/3">
          <h2 className="text-lg font-semibold">About Us.</h2>
          <p className="text-sm text-gray-400">
            Minimal E-Commerce is a dynamic and innovative online retail platform that offers a wide range of products to customers worldwide.
          </p>
          <div className="flex space-x-4 text-xl text-white">
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
            <FaTiktok />
          </div>
          <div>
            <h3 className="font-semibold text-sm mt-4 mb-2">Guaranteed safe checkout</h3>
            <div className="flex flex-wrap items-center gap-3 text-2xl text-gray-300">
              <FaAmazonPay />
              <FaApplePay />
              <FaBitcoin />
              <FaGooglePay />
              <FaPaypal />
              <FaCcVisa />
            </div>
          </div>
        </div>

        {/* Accordions for mobile */}
        <div className="md:hidden col-span-3 space-y-4 ">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="quicklink">
              <AccordionTrigger>Quick Link</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>My Account</li>
                  <li>My Cart</li>
                  <li>Wishlist</li>
                  <li>Gift Card</li>
                  <li>Need Help?</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="information">
              <AccordionTrigger>Information</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>About us</li>
                  <li>Contact</li>
                  <li>Blogs</li>
                  <li>Size Chart</li>
                  <li>FAQ</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="policies">
              <AccordionTrigger>Policies</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Privacy Policy</li>
                  <li>Refund Policy</li>
                  <li>Terms of Service</li>
                  <li>Shipping Policy</li>
                  <li>Contact Information</li>
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
              <li>My Account</li>
              <li>My Cart</li>
              <li>Wishlist</li>
              <li>Gift Card</li>
              <li>Need Help?</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>About us</li>
              <li>Contact</li>
              <li>Blogs</li>
              <li>Size Chart</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-lg font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Terms of Service</li>
              <li>Shipping Policy</li>
              <li>Contact Information</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        © 2025 <strong className="text-white">Minimalin</strong>. All rights reserved.
      </div>
    </footer>
  );
}
