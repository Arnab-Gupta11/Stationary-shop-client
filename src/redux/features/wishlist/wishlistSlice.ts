import { RootState } from "@/redux/store";
import { IProduct } from "@/types/product.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TWishlistItem = {
  wishlistItem: IProduct[];
};
const initialState: TWishlistItem = {
  wishlistItem: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IProduct>) => {
      state.wishlistItem.push(action.payload);
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.wishlistItem = state.wishlistItem.filter((item) => item._id !== action.payload);
    },
  },
});
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;

export const wishlistSelector = (state: RootState) => state.wishlist.wishlistItem;
