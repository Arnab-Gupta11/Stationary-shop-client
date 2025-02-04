import Banner from "./Banner";
import FeaturedProducts from "./FeaturedProducts";
import Testimonial from "./Testimonial/Testimonial";
import WhatWeOffer from "./WhatWeOffer";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <WhatWeOffer />
      <FeaturedProducts />
      <Testimonial />
    </div>
  );
};

export default HomePage;
