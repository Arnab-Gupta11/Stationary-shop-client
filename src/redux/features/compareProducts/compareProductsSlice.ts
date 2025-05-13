import { RootState } from "@/redux/store";
import { IProduct } from "@/types/product.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TCompareProductsItem = {
  items: IProduct[];
};
const initialState: TCompareProductsItem = {
  items: [],
};

const compareProductSlice = createSlice({
  name: "compareProduct",
  initialState,
  reducers: {
    addProductIntoCompareProductsList: (state, action: PayloadAction<IProduct>) => {
      state.items.push(action.payload);
    },
    removeProductFromCompareProductsList: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
  },
});
export const { addProductIntoCompareProductsList, removeProductFromCompareProductsList } = compareProductSlice.actions;
export default compareProductSlice.reducer;

//selector
export const compareProductSelector = (state: RootState) => state.compareProduct.items;
export const totalCompareProductItemsSelector = (state: RootState) => state.compareProduct.items.length;
