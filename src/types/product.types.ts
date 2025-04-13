/* eslint-disable @typescript-eslint/no-explicit-any */
import { TBrand } from "./brand.types";
import { TCategory } from "./category.types";

export type TProduct = {
  _id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
  image: string;
  createdAt: string;
  updatedAt: string;
  rating: number;
  totalReviews: number;
  totalRating: number;
};

export interface IProduct {
  _id: string;
  name: string;
  quantity: number;
  price: number;
  offerPrice: number | null;
  category: TCategory;
  brand: TBrand;
  description: string;
  specification: Record<string, any>;
  keyFeatures: string[];
  inStock: boolean;
  images: string[];
  isActive: boolean;
  isFeatured: boolean;
  rating: number;
  totalReviews: number;
  totalRating: number;
  weight: number;
  salesCount: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  sku: string;
  flashSale?: {
    active: boolean;
    discountPrice: number;
    startTime: Date;
    endTime: Date;
  };
}
