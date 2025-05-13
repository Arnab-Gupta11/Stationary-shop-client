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
  },
});
export const { addProductIntoCompareProductsList } = compareProductSlice.actions;
export default compareProductSlice.reducer;

//selector
export const compareProductSelector = (state: RootState) => state.compareProduct.items;
