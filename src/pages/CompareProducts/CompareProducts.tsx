import { Button } from "@/components/ui/button";
import { TbTrash } from "react-icons/tb";
import img from "@/assets/images/banner/banner2.png";
import { useAppSelector } from "@/redux/hooks";
import { compareProductSelector } from "@/redux/features/compareProducts/compareProductsSlice";
import PageHeader from "@/components/shared/PageHeader";
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import Section from "@/components/shared/Section";
import { formatPrice } from "@/utils/formatePrice";
const products = [
  {
    id: 1,
    name: "A. Stylist Sunglass",
    image: img,
    price: 13600,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    availability: "Available In stock",
  },
  {
    id: 2,
    name: "Cb. M9 Bluetooth Earphone",
    image: img,
    price: 2400,
    description: "Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing.",
    availability: "Available In stock",
  },
  {
    id: 3,
    name: "Tb. Dark Lipstick",
    image: img,
    price: 4900,
    description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.",
    availability: "Available In stock",
  },
  {
    id: 4,
    name: "Zc. Silver Small Earring",
    image: img,
    price: 6800,
    description: "Separated they live in Bookmarksgrove right at the coast of the Semantics.",
    availability: "Available In stock",
  },
  {
    id: 5,
    name: "Xb. Wireless Mouse",
    image: img,
    price: 1500,
    description: "A sleek wireless mouse with ergonomic design and silent clicks. Perfect for office use.",
    availability: "Available In stock",
  },
];

const CompareProducts = () => {
  const compareProductList = useAppSelector(compareProductSelector);
  console.log(compareProductList);
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
              <BreadcrumbPage>compare-products</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </PageHeader>
      <div className="my-20">
        <Section>
          <div className="w-full overflow-x-auto border-l-4 border-b-4 border-r-2 border-light-muted-bg dark:border-[#121624] rounded-3xl">
            <table className="min-w-[1000px] border-collapse text-sm text-white text-center">
              <thead>
                <tr className="border-b-2 border-light-muted-bg dark:border-[#121624] bg-light-muted-bg dark:bg-[#121624]">
                  <th className="p-2 border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt font font-semibold">
                    Action
                  </th>
                  {compareProductList?.map((product) => (
                    <th key={product._id} className="font-semibold border-r-2 border-light-muted-bg dark:border-[#121624]">
                      <div className="text-red-400 flex items-center justify-center gap-2  rounded-t-xl hover:text-red-600 cursor-pointer">
                        <TbTrash />
                        <span className="mt-0.5">Remove</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-light-muted-bg dark:border-[#121624]">
                  <td className="p-2 border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt font font-semibold">
                    Product name
                  </td>
                  {compareProductList?.map((product) => (
                    <td
                      key={product._id}
                      className="p-2 border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt font font-medium"
                    >
                      {product.name}
                    </td>
                  ))}
                </tr>

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
                        <span className="mt-2 text-light-primary-text dark:text-dark-primary-txt font font-medium">
                          On Sale Tk <h1 className="text-gradient font-semibold">{formatPrice(product.price)}</h1>
                        </span>
                        <Button size="sm" variant="primary" className="mt-1">
                          View Product
                        </Button>
                      </div>
                    </td>
                  ))}
                </tr>

                <tr className="border-b-2 border-light-muted-bg dark:border-[#121624]">
                  <td className="p-2 text-light-primary-text dark:text-dark-primary-txt font font-semibold border-r-2 border-light-muted-bg dark:border-[#121624]">
                    Product description
                  </td>
                  {compareProductList.map((product) => (
                    <td
                      key={product._id}
                      className="p-3 text-xs leading-relaxed border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt font font-medium"
                    >
                      {product.description}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-2 text-light-primary-text dark:text-dark-primary-txt font font-semibold border-r-2 border-light-muted-bg dark:border-[#121624]">
                    Availability
                  </td>
                  {compareProductList.map((product) => (
                    <td
                      key={product._id}
                      className="p-2 border-r-2 border-light-muted-bg dark:border-[#121624] text-light-primary-text dark:text-dark-primary-txt font font-medium"
                    >
                      {product.inStock ? " Available in stock" : "Out of stock"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </>
  );
};

export default CompareProducts;
