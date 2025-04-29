import Banner from "./Banner";
import Categories from "./Categories/Categories";
import FeaturedProducts from "./FeaturedProducts";
import Testimonial from "./Testimonial/Testimonial";
import WhatWeOffer from "./WhatWeOffer";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <WhatWeOffer />
      <FeaturedProducts />
      <Testimonial />
    </div>
  );
};

export default HomePage;
