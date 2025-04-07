import Marquee from "react-fast-marquee";
import { FaCircle } from "react-icons/fa";
const Promotion = () => {
  const promotions = [
    "30-Day Hassle-Free Returns",
    "24/7 Customer Support",
    "100% Secure Payment",
    "No Final Sale Restrictions",
    "No Restocking Fees",
    "Free Return Shipping on Eligible Items",
    "Fast & Reliable Shipping",
    "Exclusive Member Discounts",
    "Eco-Friendly Packaging",
    "Price Match Guarantee",
    "Easy Order Tracking",
  ];
  return (
    <div className="bg-button-gradient py-1 text-white overflow-hidden w-full">
      <div className="max-w-screen-md mx-auto">
        <Marquee pauseOnHover direction="left" gradient={false}>
          {promotions.map((promotion, index) => (
            <div key={index} className="flex items-center gap-1 whitespace-nowrap">
              <FaCircle className="text-[8px]" />
              <span className="mr-6">{promotion}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Promotion;
