import { Button } from "@/components/ui/button";
import { TbTrash } from "react-icons/tb";
import img from "@/assets/images/banner/banner2.png";
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
  return (
    <div className="w-full overflow-x-auto border border-gray-700 rounded-lg">
      <table className="min-w-[1000px] border-collapse text-sm text-white text-center">
        <thead>
          <tr className="border-b border-gray-700 bg-gray-800">
            <th className="p-2">Action</th>
            {products.map((product) => (
              <th key={product.id} className="p-2 font-semibold">
                <Button size="sm" variant="ghost" className="text-red-500">
                  <TbTrash className="mr-1" /> Remove
                </Button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-700">
            <td className="p-2 font-medium">Product name</td>
            {products.map((product) => (
              <td key={product.id} className="p-2">
                {product.name}
              </td>
            ))}
          </tr>

          <tr className="border-b border-gray-700">
            <td className="p-2 font-medium">Product image</td>
            {products.map((product) => (
              <td key={product.id} className="p-4">
                <div className="flex flex-col items-center">
                  <img src={product.image} alt={product.name} className="w-40 h-40 rounded-md object-contain" />
                  <span className="text-red-500 mt-2 font-medium">On Sale Tk {product.price.toLocaleString()}</span>
                  <Button size="sm" variant="link" className="text-white text-xs mt-1">
                    View Product
                  </Button>
                </div>
              </td>
            ))}
          </tr>

          <tr className="border-b border-gray-700">
            <td className="p-2 font-medium">Product description</td>
            {products.map((product) => (
              <td key={product.id} className="p-3 text-xs leading-relaxed">
                {product.description}
              </td>
            ))}
          </tr>

          <tr>
            <td className="p-2 font-medium">Availability</td>
            {products.map((product) => (
              <td key={product.id} className="p-2">
                {product.availability}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompareProducts;
