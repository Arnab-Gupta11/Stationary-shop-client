import { IProduct } from "@/types/product.types";
import { createSlice } from "@reduxjs/toolkit";

type TWishlistItem = {
  wishlistItem: IProduct[];
};
const initialState: TWishlistItem = {
  wishlistItem: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
});
export default wishlistSlice.reducer;
