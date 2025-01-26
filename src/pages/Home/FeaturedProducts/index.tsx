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
        <div className="grid grid-cols-1 sm:grid-cols-2 bs:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="rounded-lg group">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative">
              <img src={img1} alt="img1" className="object-contain h-full" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
            </div>
            <div className="p-2.5 space-y-2">
              <div className="flex items-center justify-between mt-4 ">
                <span className="bg-[#f9d1db] px-3 py-1 rounded-lg font-semibold text-slate-950 text-sm">Technology</span>
                <div className="flex items-center justify-center gap-3">
                  <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                  {/* <FaHeart className="text-red-600" /> */}
                  <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                </div>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame</h1>
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1">
                  <span>Details</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative">
              <img src={img1} alt="img1" className="object-contain h-full" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
            </div>
            <div className="p-2.5 space-y-2">
              <div className="flex items-center justify-between mt-4 ">
                <span className="bg-[#f9d1db] px-3 py-1 rounded-lg font-semibold text-slate-950 text-sm">Technology</span>
                <div className="flex items-center justify-center gap-3">
                  <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                  {/* <FaHeart className="text-red-600" /> */}
                  <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                </div>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame</h1>
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1">
                  <span>Details</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative">
              <img src={img1} alt="img1" className="object-contain h-full" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
            </div>
            <div className="p-2.5 space-y-2">
              <div className="flex items-center justify-between mt-4 ">
                <span className="bg-[#f9d1db] px-3 py-1 rounded-lg font-semibold text-slate-950 text-sm">Technology</span>
                <div className="flex items-center justify-center gap-3">
                  <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                  {/* <FaHeart className="text-red-600" /> */}
                  <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                </div>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame</h1>
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1">
                  <span>Details</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative">
              <img src={img1} alt="img1" className="object-contain h-full" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
            </div>
            <div className="p-2.5 space-y-2">
              <div className="flex items-center justify-between mt-4 ">
                <span className="bg-[#f9d1db] px-3 py-1 rounded-lg font-semibold text-slate-950 text-sm">Technology</span>
                <div className="flex items-center justify-center gap-3">
                  <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                  {/* <FaHeart className="text-red-600" /> */}
                  <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                </div>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame</h1>
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1">
                  <span>Details</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative">
              <img src={img1} alt="img1" className="object-contain h-full" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
            </div>
            <div className="p-2.5 space-y-2">
              <div className="flex items-center justify-between mt-4 ">
                <span className="bg-[#f9d1db] px-3 py-1 rounded-lg font-semibold text-slate-950 text-sm">Technology</span>
                <div className="flex items-center justify-center gap-3">
                  <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                  {/* <FaHeart className="text-red-600" /> */}
                  <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                </div>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame</h1>
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1">
                  <span>Details</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative">
              <img src={img1} alt="img1" className="object-contain h-full" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
            </div>
            <div className="p-2.5 space-y-2">
              <div className="flex items-center justify-between mt-4 ">
                <span className="bg-[#f9d1db] px-3 py-1 rounded-lg font-semibold text-slate-950 text-sm">Technology</span>
                <div className="flex items-center justify-center gap-3">
                  <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                  {/* <FaHeart className="text-red-600" /> */}
                  <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                </div>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame</h1>
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1">
                  <span>Details</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative">
              <img src={img1} alt="img1" className="object-contain h-full" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
            </div>
            <div className="p-2.5 space-y-2">
              <div className="flex items-center justify-between mt-4 ">
                <span className="bg-[#f9d1db] px-3 py-1 rounded-lg font-semibold text-slate-950 text-sm">Technology</span>
                <div className="flex items-center justify-center gap-3">
                  <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                  {/* <FaHeart className="text-red-600" /> */}
                  <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                </div>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame</h1>
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1">
                  <span>Details</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
          <div className="rounded-lg group">
            <div className="bg-[#F7F7F7] h-72 flex justify-center items-center relative">
              <img src={img1} alt="img1" className="object-contain h-full" />
              <span className="bg-primary-bg text-xs font-semibold text-white px-2 py-0.5 absolute top-2 right-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-700">
                Instock
              </span>
            </div>
            <div className="p-2.5 space-y-2">
              <div className="flex items-center justify-between mt-4 ">
                <span className="bg-[#f9d1db] px-3 py-1 rounded-lg font-semibold text-slate-950 text-sm">Technology</span>
                <div className="flex items-center justify-center gap-3">
                  <MdOutlineShoppingCart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                  {/* <FaHeart className="text-red-600" /> */}
                  <FaRegHeart className="text-xl hover:scale-110 active:scale-95 hover:text-primary-bg cursor-pointer transition-all duration-700" />
                </div>
              </div>
              <h1 className="text-lg font-bold text-slate-800">Lorem, ipsum dolor sit ame</h1>
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-slate-700 group-hover:text-primary-bg">Tk 48.00</h4>
                <Button className="group flex items-center gap-1">
                  <span>Details</span>
                  <GoArrowRight className="group-hover:-rotate-45 font-semibold transition-all duration-700" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FeaturedProducts;
