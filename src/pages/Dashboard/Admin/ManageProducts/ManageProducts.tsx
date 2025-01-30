import { useGetAllProductsQuery } from "@/redux/features/product/product.api";
import { BsThreeDots } from "react-icons/bs";
import { TProduct } from "@/types/product.types";
import img from "../../../../../public/images/banner/banner3.png";
import { formatPrice } from "@/utils/formatePrice";
import Loader from "@/components/shared/Loader";
import React, { useState } from "react";
import { PaginationProduct } from "@/pages/AllProducts/Pagination";
import { TMeta } from "@/types/global";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import AddProduct from "./AddProduct";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const ManageProducts = () => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const { data: productData, isLoading } = useGetAllProductsQuery([
    { name: "page", value: page },
    { name: "searchTerm", value: searchValue },
  ]);
  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div>
      <div className="mb-5 flex flex-col xs:flex-row items-center xs:justify-between gap-5">
        <div className="relative">
          <Search className="absolute top-3 left-2 text-slate-500" size={14} />
          <Input
            type="text"
            onChange={handleSearchValue}
            placeholder="Search Products..."
            className="rounded-lg focus-visible:ring-0 w-full sm:w-56 pl-8 text-slate-700 font-normal"
          />
        </div>
        {/* <AddProduct /> */}
        <Link to="/dashboard/manage-products/add-product">
          <Button>
            <Plus />
            <span>Add Product</span>
          </Button>
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-sm pb-10">
          <table className="w-full bg-white border border-[#f1f1f1] mb-5">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left border w-32 border-[#f1f1f1]">Image</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Name</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Category</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Price</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Status</th>
                <th className="px-4 py-2 text-left border border-[#f1f1f1]">Action</th>
              </tr>
            </thead>
            <tbody>
              {productData?.data?.map((item: TProduct) => (
                <tr key={item?._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border w-32 border-[#f1f1f1]">
                    <img src={img} alt="Product Image" className="w-16 h-16 bg-[#F7F7F7] p-2 rounded-lg flex-shrink-0" />
                  </td>
                  <td className="px-4 py-2 border border-[#f1f1f1]">{item?.name}</td>
                  <td className="px-4 py-2 border border-[#f1f1f1]">{item?.category}</td>
                  <td className="px-4 py-2 border border-[#f1f1f1]">{formatPrice(item?.price)}</td>
                  <td className="px-4 py-2 border border-[#f1f1f1]">
                    {item?.inStock ? (
                      <span className="bg-[#e8fbe6] text-green-900 px-2 py-0.5 text-sm font-semibold rounded-md">In Stock</span>
                    ) : (
                      <span className="bg-[#FBE6EC] text-primary-bg px-2 py-0.5 text-sm font-semibold rounded-md">Out of Stock</span>
                    )}
                  </td>
                  <td className="px-4 py-2 border w-20 border-[#f1f1f1]">
                    <BsThreeDots className="mt-2" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <PaginationProduct meta={productData?.meta as TMeta} page={page} setPage={setPage} />
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
