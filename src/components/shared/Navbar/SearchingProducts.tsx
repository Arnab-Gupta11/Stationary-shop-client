/* eslint-disable react-hooks/exhaustive-deps */
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import StarRating from "@/pages/ProductDetails/StarRating";
import { IProduct } from "@/types/product.types";
import { formatPrice } from "@/utils/formatePrice";
import { MoveUpRight, SearchIcon, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaBoxOpen } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
const SearchingProducts = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[] | []>([]);
  const [chacheProductList, setCacheProductList] = useState<Record<string, IProduct[]>>({});
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const [sheetOpen, setSheetOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const fetchData = async () => {
    try {
      if (chacheProductList[input]) {
        setProducts(chacheProductList[input]);
        return;
      }
      setLoading(true);
      const res = await fetch(`http://localhost:5000/api/v1/products?searchTerm=${input}&limit=6`);
      const result = await res.json();
      setProducts(result?.data);
      setCacheProductList((prev) => ({ ...prev, [input]: result?.data }));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sheetOpen) {
      setTimeout(() => {
        searchRef.current?.focus();
      }, 10);
    }
  }, [sheetOpen]);

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const handleArrowUpDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (products.length === 0) return;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex + 1) % products.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
        break;
      case "Enter":
        if (selectedIndex >= 0 && selectedIndex < products.length) {
          navigate(`/products/slug/${products[selectedIndex].slug}`);
          setProducts([]);
          setInput("");
          setSelectedIndex(-1);
          setSheetOpen(false);
        }
        break;
    }
  };

  return (
    <div>
      <Sheet open={sheetOpen}>
        <SheetTrigger>
          <span
            onClick={() => setSheetOpen(true)}
            className="rounded-xl border-2 border-slate-100 dark:border-gray-900 flex items-center justify-center h-9 w-9 mr-3"
          >
            <IoSearch className="text-xl text-light-primary-text dark:text-dark-primary-txt hover:text-primary dark:hover:text-primary transition hover:scale-105 cursor-pointer" />
          </span>
        </SheetTrigger>
        <SheetContent side={"top"} className="h-screen w-full font-Exo  overflow-y-scroll">
          <SheetClose asChild>
            <button
              className="absolute right-5 sm:right-12 top-8 p-2 rounded-full transition"
              onClick={() => {
                setProducts([]);
                setInput("");
                setSelectedIndex(-1);
                setSheetOpen(false);
              }}
            >
              <X className="w-8 h-8 sm:w-10 sm:h-10 text-light-secondary-text dark:text-dark-secondary-txt hover:text-primary hover:dark:text-primary duration-700 scale-105" />
              <span className="sr-only">Close</span>
            </button>
          </SheetClose>
          <div className="w-[95%] xsm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto mt-24">
            {/* Search Input  */}
            <div className="flex items-center justify-center border-b-[3px] border-slate-300 dark:border-dark-border">
              <input
                type="text"
                ref={searchRef}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleArrowUpDown}
                className="w-full h-10 sm:h-16 text-base xsm:text-lg xs:text-xl sm:text-4xl outline-none bg-transparent px-1 xsm:px-3 py-2 text-light-primary-text dark:text-dark-primary-txt"
                placeholder="Type to search products..."
              />
              <span
                onClick={() => {
                  navigate(`/shop?searchTerm=${input}`);
                  setProducts([]);
                  setInput("");
                  setSelectedIndex(-1);
                  setSheetOpen(false);
                }}
                className="text-light-primary-text dark:text-dark-primary-txt hover:text-primary dark:hover:text-primary duration-700 hover:scale-105 cursor-pointer"
              >
                <LuSearch className="text-xl sm:text-4xl " />
              </span>
            </div>

            {/* Product List  */}
            {input && (
              <div className=" border-none p-3">
                {loading ? (
                  <div className="flex flex-row items-center justify-center gap-3 text-lg font-medium text-center max-w-screen-sm mx-auto p-8 animate-pulse">
                    <SearchIcon size={12} className="text-light-secondary-text dark:text-dark-secondary-txt" />
                    <h1 className="text-light-secondary-text dark:text-dark-secondary-txt">Searching....</h1>
                  </div>
                ) : products?.length > 0 ? (
                  <div>
                    {products?.map((item, index) => (
                      <div
                        className={`w-full py-2 px-1 sm:px-4 rounded-md cursor-pointer border-b-2 border-light-border dark:border-dark-border space-y-2 flex items-center justify-between group ${
                          selectedIndex === index ? "bg-light-muted-bg dark:bg-dark-muted-bg" : ""
                        }`}
                        onClick={() => {
                          navigate(`/products/slug/${item?.slug}`);
                          setProducts([]);
                          setInput("");
                          setSelectedIndex(-1);
                          setSheetOpen(false);
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <img
                            src={item?.images[0]}
                            alt={item?.name}
                            className="w-12 h-12 md:w-16 md:h-16 bg-light-muted-bg dark:bg-dark-muted-bg p-2 rounded-2xl flex-shrink-0 object-contain"
                          />
                          <div>
                            <h1
                              className={`text-light-primary-text dark:text-dark-primary-txt text-xs xsm:text-sm sm:text-lg mb-1 font-semibold group-hover:text-primary ${
                                selectedIndex === index ? "text-primary dark:text-primary" : ""
                              }`}
                            >
                              {item?.name}
                            </h1>
                            <StarRating rating={item?.rating} starSize={12} />
                            <h4 className="text-light-primary-text dark:text-dark-primary-txt mt-2 text-[9px] xsm:text-[10px] sm:text-xs font-medium">
                              {formatPrice(item?.price)}
                            </h4>
                          </div>
                        </div>
                        <span
                          className={`text-light-primary-text dark:text-dark-primary-txt text-lg mb-1 font-semibold group-hover:text-primary hidden sm:block ${
                            selectedIndex === index ? "text-primary dark:text-primary" : ""
                          }`}
                        >
                          <MoveUpRight />
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3 text-lg font-medium text-center max-w-screen-sm mx-auto p-8">
                    <FaBoxOpen className="text-2xl text-light-secondary-text dark:text-dark-secondary-txt opacity-35" />
                    <h1 className="text-light-secondary-text dark:text-dark-secondary-txt">No results found for your search.</h1>
                  </div>
                )}
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default SearchingProducts;
