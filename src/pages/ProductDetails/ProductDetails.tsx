import Section from "@/components/shared/Section";
import { useGetProductDetailsQuery } from "@/redux/features/product/product.api";
import { useParams } from "react-router-dom";
import { IProduct } from "@/types/product.types";
import { formatPrice } from "@/utils/formatePrice";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addProductIntoCart, useCartItems } from "@/redux/features/auth/authSlice";
import Review from "./Review";
import StarRating from "./StarRating";
import { AnimatePresence, motion } from "framer-motion";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PiDotDuotone } from "react-icons/pi";
import ProductDetailsSkeletonLoader from "@/components/shared/loader/ProdctDetailsSkeletonLoader";
const imageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.5 },
    },
  },
  exit: {
    zIndex: 0,
    opacity: 0.5,
    scale: 0.9,
    transition: {
      x: { type: "spring", stiffness: 100, damping: 100 },
      opacity: { duration: 0.1 },
    },
  },
};

const ProductDetails = () => {
  const cartItems = useAppSelector(useCartItems);
  const dispatch = useAppDispatch();
  const { slug } = useParams();
  const [productQuantity, setProductQuantity] = useState(1);
  const { data: productData, isLoading } = useGetProductDetailsQuery({ slug });
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [prevImgIdx, setPrevImgIdx] = useState(0);

  if (isLoading) {
    return <ProductDetailsSkeletonLoader />;
  }
  const {
    _id,
    brand: { name: brandName },
    category: { name: categoryName },
    description,
    inStock,
    name,
    price,
    quantity,
    images,
    rating,
    totalReviews,
    keyFeatures,
    specification,
  } = productData?.data as IProduct;

  const handleReduceQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity((prev) => prev - 1);
    }
  };
  const handleIncreaseQuantity = () => {
    if (productQuantity >= quantity) {
      toast.error(`We apologize, but only ${quantity} items are currently in stock.`);
    } else {
      setProductQuantity((prev) => prev + 1);
    }
  };
  const addProductToCart = () => {
    if (!inStock) {
      toast.error(`This item is out of stock. Check back soon or explore similar products!`);
    } else if (cartItems.length > 0) {
      const existingItem = cartItems.find((item) => item.product === _id);
      if (!existingItem) {
        dispatch(
          addProductIntoCart({
            product: _id,
            quantity: productQuantity,
            price,
            productName: name,
            brand: brandName,
            inStock: quantity,
            image: images[0],
          })
        );
        toast.success("Item added to your cart successfully!");
      } else {
        toast.error("This Item is already in the cart.");
      }
    } else {
      dispatch(
        addProductIntoCart({
          product: _id,
          quantity: productQuantity,
          price,
          productName: name,
          brand: brandName,
          inStock: quantity,
          image: images[0],
        })
      );
      toast.success("Item added to your cart successfully!");
    }
  };

  return (
    <div className="mb-20">
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">
          <div>
            <div className="bg-light-muted-bg dark:bg-dark-muted-bg  h-[300px] xs:h-[380px] sm:h-[500px] lg:h-[400px] xl:h-[500px] flex justify-center rounded-3xl rounded-b-none overflow-x-hidden relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[activeImgIdx]}
                  src={images[activeImgIdx]}
                  alt={name}
                  className="h-full w-full object-fill aspect-square rounded-3xl p-3"
                  custom={activeImgIdx > prevImgIdx ? 1 : -1} // <-- pass 1 or -1
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                />
                <span
                  className={`absolute left-4 top-1/2 w-8 h-8 flex items-center justify-center rounded-xl bg-light-muted-bg shadow-box-shadow-light hover:scale-105 active:scale-95 text-slate-900 hover:text-primary duration-700 transition-transform opacity-0 group-hover:opacity-100 group-hover:duration-700 group-hover:transition-opacity cursor-pointer z-10 ${
                    activeImgIdx === 0 && "hidden"
                  }`}
                  onClick={() => {
                    setPrevImgIdx(activeImgIdx);
                    setActiveImgIdx((prev) => prev - 1);
                  }}
                >
                  <TbArrowBadgeLeft className="text-3xl" />
                </span>
                <span
                  className={`absolute right-4 top-1/2 w-8 h-8 flex items-center justify-center rounded-xl bg-light-muted-bg shadow-box-shadow-light hover:scale-105 active:scale-95 text-slate-900 hover:text-primary duration-700 transition-transform opacity-0 group-hover:opacity-100 group-hover:duration-700 group-hover:transition-opacity cursor-pointer z-10 ${
                    activeImgIdx === images.length - 1 && "hidden"
                  }`}
                  onClick={() => {
                    setPrevImgIdx(activeImgIdx);
                    setActiveImgIdx((prev) => prev + 1);
                  }}
                >
                  <TbArrowBadgeRight className="text-3xl " />
                </span>
              </AnimatePresence>
            </div>
            <div className="bg-light-muted-bg dark:bg-dark-muted-bg rounded-3xl grid grid-cols-4 px-3 pb-3 rounded-t-none gap-2.5">
              {images.map((img, idx) => {
                return (
                  <img
                    key={idx}
                    src={img}
                    alt=""
                    className={`rounded-xl cursor-pointer w-full h-12 xsm:h-16 xs:h-20 sm:h-28 object-fill ${
                      activeImgIdx === idx && "border-primary border-4 brightness-50"
                    }`}
                    onClick={() => {
                      setPrevImgIdx(activeImgIdx);
                      setActiveImgIdx(idx);
                    }}
                  />
                );
              })}
            </div>
          </div>
          {/* Product Details  */}
          <div>
            <div className="mt-1">
              {inStock ? (
                <span className="bg-[#e8fbe6] dark:bg-[#192B1D] text-green-900 dark:text-white px-2 py-0.5 border-2 border-[#45bf51] dark:border-[#378C40] text-sm font-semibold rounded-lg">
                  In Stock
                </span>
              ) : (
                <span className="bg-[#FBE6EC] text-primary-bg px-2 py-0.5 text-sm font-semibold rounded-md">Out of Stock</span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-light-primary-text dark:text-dark-primary-txt mt-3">{name}</h1>
            <div className="flex items-center gap-2 flex-wrap mt-1">
              <StarRating rating={rating} starSize={15} />
              <span className="text-sm text-light-secondary-text dark:text-dark-secondary-txt">({totalReviews} customer reviews)</span>
            </div>
            <p className="text-xl font-semibold text-primary mt-3">{formatPrice(price)}</p>
            <p className="text-light-secondary-text dark:text-dark-secondary-txt font-medium mt-5">{description}</p>
            <h4 className="text-light-secondary-text dark:text-dark-secondary-txt font-medium mt-2">
              <span className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Categorie:</span> {categoryName}
            </h4>
            <h4 className="text-light-secondary-text dark:text-dark-secondary-txt mt-1 font-medium">
              <span className="font-semibold text-light-primary-text dark:text-dark-primary-txt">Brand:</span> {brandName}
            </h4>

            <div className="border-t-2 border-light-border dark:border-dark-border mt-5" />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base font-semibold text-light-primary-text dark:text-dark-primary-txt">
                  Key Features
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-1">
                  {keyFeatures.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <PiDotDuotone className="text-2xl text-primary" />
                      <span className="font-medium text-light-secondary-text dark:text-dark-secondary-txt text-base">{item}</span>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base font-semibold text-light-primary-text dark:text-dark-primary-txt">
                  Specification
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-1 ml-2">
                    {Object.entries(specification).map(([key, value], idx) => {
                      return (
                        <h4 key={idx} className="text-light-secondary-text dark:text-dark-secondary-txt mt-1 font-medium text-base">
                          <span className="font-semibold text-light-primary-text dark:text-dark-primary-txt">{key}:</span> {value}
                        </h4>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="mt-5 flex flex-col xsm:flex-row items-center gap-4">
              <div className="flex w-full xsm:w-36 border-[2px] items-center justify-around py-2 text-xl border-[#e5e5e5] dark:border-dark-muted-bg rounded-xl">
                <span className="bg-light-muted-bg dark:bg-dark-muted-bg rounded-md p-1 group" onClick={handleReduceQuantity}>
                  <Minus className="hover:scale-105 active:scale-95 duration-700 hover:cursor-pointer text-light-primary-text dark:text-dark-primary-txt group-hover:text-primary" />
                </span>

                <span className="font-medium text-slate-800 dark:text-dark-primary-txt select-none">{productQuantity}</span>
                <span className="bg-light-muted-bg dark:bg-dark-muted-bg rounded-md p-1 group" onClick={handleIncreaseQuantity}>
                  <Plus className="hover:scale-105 active:scale-95 duration-700 hover:cursor-pointer text-light-primary-text dark:text-dark-primary-txt group-hover:text-primary" />
                </span>
              </div>
              <div className="flex items-center gap-4 w-full">
                <Button className="flex xsm-mx:w-full items-center justify-center gap-3 py-6 select-none" onClick={addProductToCart}>
                  <MdOutlineShoppingCart />
                  <span>Add To Cart</span>
                </Button>
                {/* <Button className="py-7 rounded-lg group  bg-none border-[#e5e5e5] border-[2px] hover:bg-none hover:border-primary-bg duration-700 ">
                  <Heart size={234} className="text-[#d1c6c6] font-bold text-2xl group-hover:text-primary-bg duration-700" />
                </Button> */}
              </div>
            </div>
          </div>
        </div>
        <Review totalRating={rating} totalReviews={totalReviews} />
      </Section>
    </div>
  );
};

export default ProductDetails;
