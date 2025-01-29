import { useGetAllProductsQuery } from "@/redux/features/product/product.api";
import { BsThreeDots } from "react-icons/bs";
import { TProduct } from "@/types/product.types";
import img from "../../../../../public/images/banner/banner3.png";
const ManageProducts = () => {
  const { data: productData, isLoading } = useGetAllProductsQuery([]);
  console.log(productData?.data);
  return (
    <div>
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left border w-32">Image</th>
              <th className="px-4 py-2 text-left border">Name</th>
              <th className="px-4 py-2 text-left border">Category</th>
              <th className="px-4 py-2 text-left border">Price</th>
              <th className="px-4 py-2 text-left border">Status</th>
              <th className="px-4 py-2 text-left border">Action</th>
            </tr>
          </thead>
          <tbody>
            {productData?.data?.map((item: TProduct) => (
              <tr key={item?._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border w-32">
                  <img src={img} alt="Product Image" className="w-16 h-16 bg-[#F7F7F7] p-2 rounded-lg flex-shrink-0" />
                </td>
                <td className="px-4 py-2 border">{item?.name}</td>
                <td className="px-4 py-2 border">{item?.category}</td>
                <td className="px-4 py-2 border">{item?.price}</td>
                <td className="px-4 py-2 border">
                  {item?.inStock ? (
                    <span className="bg-[#e8fbe6] text-green-900 px-2 py-0.5 text-sm font-semibold rounded-md">In Stock</span>
                  ) : (
                    <span className="bg-[#FBE6EC] text-primary-bg px-2 py-0.5 text-sm font-semibold rounded-md">Out of Stock</span>
                  )}
                </td>
                <td className="px-4 py-2 border w-20">
                  <BsThreeDots className="mt-2" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
