import { Button } from "@/components/ui/button";
import { TbTrash } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { compareProductSelector, removeProductFromCompareProductsList } from "@/redux/features/compareProducts/compareProductsSlice";
import PageHeader from "@/components/shared/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import Section from "@/components/shared/Section";
import { formatPrice } from "@/utils/formatePrice";
import toast from "react-hot-toast";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
const CompareProducts = () => {
  const compareProductList = useAppSelector(compareProductSelector);
  const dispatch = useAppDispatch();
  console.log(compareProductList);
  const handleRemoveProduct = (id: string) => {
    dispatch(removeProductFromCompareProductsList(id));
    toast.success("Product removed from compare product list.");
  };
  return (
    <>
      <PageHeader title="Compare Products">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Compare-Products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>
      <div className="my-20">
        <Section>
          {compareProductList.length === 0 && (
            <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
              <div className="text-slate-500 flex flex-col items-center justify-center  px-4 gap-4 ">
                <MdOutlineRemoveShoppingCart className="text-7xl sm:text-[120px]" />
                <span className="font-semibold text-lg sm:text-2xl text-center">
                  Your comparison list is empty. Add products to compare them side by side!
                </span>
              </div>
            </div>
          )}
          {compareProductList.length > 0 && (
            <div className="overflow-hidden rounded-3xl">
              <div className="w-full overflow-x-auto  border-l-4 border-b-4 border-r-2 border-light-muted-bg dark:border-[#121624] rounded-3xl">
                <table className="min-w-[1000px] lg:w-full border-collapse text-sm text-white text-center">
                  {/* Heading row  */}
                  <thead>
                    <tr className="border-b-2 border-light-muted-bg dark:border-[#121624] bg-light-muted-bg dark:bg-[#121624]">
                      <th className="p-2 border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt font font-semibold">
                        Action
                      </th>
                      {compareProductList?.map((product) => (
                        <th key={product._id} className="font-semibold border-r-2 border-light-muted-bg dark:border-[#121624]">
                          <div
                            className="text-red-400 flex items-center justify-center gap-2  rounded-t-xl hover:text-red-600 cursor-pointer"
                            onClick={() => {
                              handleRemoveProduct(product._id);
                            }}
                          >
                            <TbTrash />
                            <span className="mt-0.5">Remove</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Name Row  */}
                    <tr className="border-b-2 border-light-muted-bg dark:border-[#121624]">
                      <td className="p-2 border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt font font-semibold">
                        Product name
                      </td>
                      {compareProductList?.map((product) => (
                        <td
                          key={product._id}
                          className="p-2 border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt text-sm font-medium"
                        >
                          {product.name}
                        </td>
                      ))}
                    </tr>

                    {/* Image Row  */}
                    <tr className="border-b-2 border-light-muted-bg dark:border-[#121624]">
                      <td className="p-2 border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt font font-semibold">
                        Product image
                      </td>
                      {compareProductList.map((product) => (
                        <td key={product._id} className="p-4 border-r-2 border-light-muted-bg dark:border-[#121624]">
                          <div className="flex flex-col items-center">
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-40 h-40 object-contain rounded-3xl p-2 bg-light-muted-bg dark:bg-dark-muted-bg"
                            />
                            <span className="mt-2 text-light-primary-text dark:text-dark-primary-txt text-xs sm:text-sm font font-medium">
                              On Sale Tk <h1 className="text-gradient font-semibold">{formatPrice(product.price)}</h1>
                            </span>
                            <Link to={`/products/slug/${product?.slug}`}>
                              <Button size="sm" variant="primary" className="mt-1">
                                View Product
                              </Button>
                            </Link>
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Category Row  */}
                    <tr className="border-b-2 border-light-muted-bg dark:border-[#121624]">
                      <td className="p-2 border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt font font-semibold">
                        Product Category
                      </td>
                      {compareProductList?.map((product) => (
                        <td
                          key={product._id}
                          className="p-2 border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt text-sm font-medium"
                        >
                          {product?.category.name}
                        </td>
                      ))}
                    </tr>
                    {/* Brand Row  */}
                    <tr className="border-b-2 border-light-muted-bg dark:border-[#121624]">
                      <td className="p-2 border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt font font-semibold">
                        Product Brand
                      </td>
                      {compareProductList?.map((product) => (
                        <td
                          key={product._id}
                          className="p-2 border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt text-sm font-medium"
                        >
                          {product?.brand.name}
                        </td>
                      ))}
                    </tr>

                    {/* Description row  */}
                    <tr className="border-b-2 border-light-muted-bg dark:border-[#121624]">
                      <td className="p-2 text-light-primary-text dark:text-dark-primary-txt font font-semibold border-r-2 border-light-muted-bg dark:border-[#121624]">
                        Product description
                      </td>
                      {compareProductList.map((product) => (
                        <td
                          key={product._id}
                          className="p-3 text-xs sm:text-sm leading-relaxed border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt font-medium"
                        >
                          {product.description}
                        </td>
                      ))}
                    </tr>

                    {/* Specification row  */}
                    <tr className="border-b-2 border-light-muted-bg dark:border-[#121624]">
                      <td className="p-2 text-light-primary-text dark:text-dark-primary-txt font font-semibold border-r-2 border-light-muted-bg dark:border-[#121624]">
                        Product Specification
                      </td>
                      {compareProductList.map((product) => (
                        <td
                          key={product._id}
                          className="p-3 text-xs leading-relaxed border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt font font-medium"
                        >
                          <div className="flex flex-col items-center gap-1 ml-2">
                            {Object.entries(product.specification).map(([key, value], idx) => {
                              return (
                                <h4 key={idx} className="text-light-secondary-text dark:text-dark-secondary-txt mt-1 font-medium text-xs sm:text-sm">
                                  <span className="font-semibold text-light-primary-text dark:text-dark-primary-txt">{key}:</span> {value}
                                </h4>
                              );
                            })}
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Key Feature row  */}
                    <tr className="border-b-2 border-light-muted-bg dark:border-[#121624]">
                      <td className="p-2 text-light-primary-text dark:text-dark-primary-txt font font-semibold border-r-2 border-light-muted-bg dark:border-[#121624]">
                        Key Features
                      </td>
                      {compareProductList.map((product) => (
                        <td
                          key={product._id}
                          className="p-3 text-xs leading-relaxed border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt font font-medium "
                        >
                          <div className="flex flex-col items-center gap-1 ml-2">
                            {product.keyFeatures.map((item, idx) => (
                              <div
                                key={idx}
                                className="flex flex-col items-center gap-1 border-b border-light-muted-bg dark:border-[#121624] py-2 text-xs sm:text-sm w-full"
                              >
                                <span className="font-medium text-light-primary-text dark:text-dark-primary-txt ">{item}</span>
                              </div>
                            ))}
                          </div>
                        </td>
                      ))}
                    </tr>

                    {/* Availablity row  */}
                    <tr>
                      <td className="p-2 text-light-primary-text dark:text-dark-primary-txt font font-semibold border-r-2 border-light-muted-bg dark:border-[#121624]">
                        Availability
                      </td>
                      {compareProductList.map((product) => (
                        <td
                          key={product._id}
                          className="p-2 border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt text-xs sm:text-sm font-medium"
                        >
                          {product.inStock ? " Available in stock" : "Out of stock"}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </Section>
      </div>
    </>
  );
};

export default CompareProducts;
