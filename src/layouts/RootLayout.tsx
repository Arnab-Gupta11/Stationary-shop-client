import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ScrollToTop from "@/components/shared/ScrollToTop";
import Promotion from "@/pages/Home/Promotion/Promotion";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Promotion />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
