import Banner from "./Banner";
import Categories from "./Categories/Categories";
import FeaturedProducts from "./FeaturedProducts";
import NewArrivalsProducts from "./NewArrivalsProducts/NewArrivalProducts";
import Testimonial from "./Testimonial/Testimonial";
import Trending from "./Trending/Trending";
import WhatWeOffer from "./WhatWeOffer";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <FeaturedProducts />
      <NewArrivalsProducts />
      <WhatWeOffer />
      <Trending />
      <Testimonial />
    </div>
  );
};

export default HomePage;
