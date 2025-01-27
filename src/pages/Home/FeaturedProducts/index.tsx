import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import img1 from "../../../../public/images/banner/banner1.png";
import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/button";
const FeaturedProducts = () => {
  return (
    <div className="pt-20 pb-24">
      <Section>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-3 text-slate-900">
            Featured <span className="text-primary-bg">Products</span>
          </h1>
          <p className="text-base font-medium text-slate-700 mb-10">Shop our exclusive selection of top-rated products.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 bs:grid-cols-3 lg:grid-cols-4 gap-5 ">
          <div className="rounded-lg group product-card hover:shadow-md">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative  px-10">
              <img src={img1} alt="img1" className="object-contain h-full group-hover:scale-110 transition-all duration-1000" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
              <div className="flex flex-col items-center justify-center gap-3 absolute right-1 bottom-1 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
                <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
              </div>
            </div>
            <div className="p-2.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600 text-sm">Technology</span>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame dfdfsdf</h1>
              <div className="flex items-start justify-between mt-2">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1 py-1 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-1 transition-all duration-700">
                  <span>View</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group product-card hover:shadow-md">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative  px-10">
              <img src={img1} alt="img1" className="object-contain h-full group-hover:scale-110 transition-all duration-1000" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
              <div className="flex flex-col items-center justify-center gap-3 absolute right-1 bottom-1 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
                <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
              </div>
            </div>
            <div className="p-2.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600 text-sm">Technology</span>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame dfdfsdf</h1>
              <div className="flex items-start justify-between mt-2">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1 py-1 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-1 transition-all duration-700">
                  <span>View</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group product-card hover:shadow-md">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative  px-10">
              <img src={img1} alt="img1" className="object-contain h-full group-hover:scale-110 transition-all duration-1000" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
              <div className="flex flex-col items-center justify-center gap-3 absolute right-1 bottom-1 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
                <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
              </div>
            </div>
            <div className="p-2.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600 text-sm">Technology</span>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame dfdfsdf</h1>
              <div className="flex items-start justify-between mt-2">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1 py-1 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-1 transition-all duration-700">
                  <span>View</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group product-card hover:shadow-md">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative  px-10">
              <img src={img1} alt="img1" className="object-contain h-full group-hover:scale-110 transition-all duration-1000" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
              <div className="flex flex-col items-center justify-center gap-3 absolute right-1 bottom-1 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
                <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
              </div>
            </div>
            <div className="p-2.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600 text-sm">Technology</span>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame dfdfsdf</h1>
              <div className="flex items-start justify-between mt-2">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1 py-1 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-1 transition-all duration-700">
                  <span>View</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group product-card hover:shadow-md">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative  px-10">
              <img src={img1} alt="img1" className="object-contain h-full group-hover:scale-110 transition-all duration-1000" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
              <div className="flex flex-col items-center justify-center gap-3 absolute right-1 bottom-1 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
                <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
              </div>
            </div>
            <div className="p-2.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600 text-sm">Technology</span>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame dfdfsdf</h1>
              <div className="flex items-start justify-between mt-2">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1 py-1 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-1 transition-all duration-700">
                  <span>View</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group product-card hover:shadow-md">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative  px-10">
              <img src={img1} alt="img1" className="object-contain h-full group-hover:scale-110 transition-all duration-1000" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
              <div className="flex flex-col items-center justify-center gap-3 absolute right-1 bottom-1 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
                <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
              </div>
            </div>
            <div className="p-2.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600 text-sm">Technology</span>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame dfdfsdf</h1>
              <div className="flex items-start justify-between mt-2">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1 py-1 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-1 transition-all duration-700">
                  <span>View</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group product-card hover:shadow-md">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative  px-10">
              <img src={img1} alt="img1" className="object-contain h-full group-hover:scale-110 transition-all duration-1000" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
              <div className="flex flex-col items-center justify-center gap-3 absolute right-1 bottom-1 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
                <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
              </div>
            </div>
            <div className="p-2.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600 text-sm">Technology</span>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame dfdfsdf</h1>
              <div className="flex items-start justify-between mt-2">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1 py-1 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-1 transition-all duration-700">
                  <span>View</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group product-card hover:shadow-md">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative  px-10">
              <img src={img1} alt="img1" className="object-contain h-full group-hover:scale-110 transition-all duration-1000" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
              <div className="flex flex-col items-center justify-center gap-3 absolute right-1 bottom-1 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
                <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700 shadow-sm p-1 w-8 h-8" />
              </div>
            </div>
            <div className="p-2.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-600 text-sm">Technology</span>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame dfdfsdf</h1>
              <div className="flex items-start justify-between mt-2">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1 py-1 text-xs opacity-0 group-hover:opacity-100 translate-y-2 group-hover:-translate-y-1 transition-all duration-700">
                  <span>View</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button variant={"primary"} className="group flex items-center gap-1 text-center">
            <span>View All</span>
            <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default FeaturedProducts;
