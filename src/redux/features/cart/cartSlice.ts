import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TCartItem = {
  productName: string;
  brand: string;
  product: string;
  inStock: number;
  price: number;
  quantity: number;
  totalPrice: number;
  image: string;
};

type TCart = {
  cartItems: TCartItem[];
};

const inititalState: TCart = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: inititalState,
  reducers: {
    addProductIntoCart: (
      state,
      action: PayloadAction<{ product: string; price: number; quantity: number; productName: string; inStock: number; brand: string; image: string }>
    ) => {
      const { product, price, quantity, productName, brand, inStock, image } = action.payload;
      // Add new product to the cart
      state.cartItems.push({
        productName,
        brand,
        inStock,
        product,
        price,
        quantity,
        totalPrice: price * quantity,
        image,
      });
    },
    removeProductFromCart: (state, action: PayloadAction<{ product: string }>) => {
      const { product } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.product !== product);
    },
    reduceProductQuantity: (state, action: PayloadAction<{ product: string; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.product === product);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          if (existingItem.quantity > quantity) {
            // Reduce quantity and recalculate total price
            existingItem.quantity -= quantity;
            existingItem.totalPrice = existingItem.quantity * existingItem.price;
          } else {
            // Remove item if quantity reaches zero or below
            state.cartItems = state.cartItems.filter((item) => item.product !== product);
          }
        }
      }
    },
    increaseProductQuantity: (state, action: PayloadAction<{ product: string; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const existingItem = state.cartItems.find((item) => item.product === product);

      if (existingItem) {
        // Increase the quantity and update the total price
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }
    },
    clearCart: (state) => {
      state.cartItems = []; // Clear all products from the cart
    },
  },
});

export const { addProductIntoCart, removeProductFromCart, reduceProductQuantity, clearCart, increaseProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;

// selectors
export const useCartItems = (state: RootState) => state.cart.cartItems;

// Selector to calculate total quantity of all products in the cart
export const getTotalQuantity = (state: RootState) => state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

// Selector to calculate total price of all products in the cart
export const getTotalPrice = (state: RootState) => state.cart.cartItems.reduce((total, item) => total + item.totalPrice, 0);
