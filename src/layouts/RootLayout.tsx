import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ScrollToTop from "@/components/shared/ScrollToTop";
import Promotion from "@/pages/Home/Promotion/Promotion";
import { Outlet, useLocation } from "react-router";

const RootLayout = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      {location?.pathname === "/" && <Promotion />}
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
