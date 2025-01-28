import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type TUser = {
  userId: string;
  userEmail: string;
  role: string;
  profilePicture: string;
};

type TCartItem = {
  product: string;
  price: number; // Price of a single unit of the product
  quantity: number;
  totalPrice: number; // Total price = price * quantity
};

type TAuthState = {
  user: null | TUser;
  token: null | string;
  cart: TCartItem[];
};

const initialState: TAuthState = {
  user: null,
  token: null,
  cart: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: TUser; token: string }>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.cart = []; // Clear cart on logout
    },
    addProductIntoCart: (state, action: PayloadAction<{ product: string; price: number; quantity: number }>) => {
      const { product, price, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.product === product);

      if (existingItem) {
        // Update quantity and recalculate total price
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        // Add new product to the cart
        state.cart.push({
          product,
          price,
          quantity,
          totalPrice: price * quantity,
        });
      }
    },
    removeProductFromCart: (state, action: PayloadAction<{ product: string }>) => {
      const { product } = action.payload;
      state.cart = state.cart.filter((item) => item.product !== product);
    },
    reduceProductQuantity: (state, action: PayloadAction<{ product: string; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.product === product);

      if (existingItem) {
        if (existingItem.quantity > quantity) {
          // Reduce quantity and recalculate total price
          existingItem.quantity -= quantity;
          existingItem.totalPrice = existingItem.quantity * existingItem.price;
        } else {
          // Remove item if quantity reaches zero or below
          state.cart = state.cart.filter((item) => item.product !== product);
        }
      }
    },
    clearCart: (state) => {
      state.cart = []; // Clear all products from the cart
    },
    updateProductQuantity: (state, action: PayloadAction<{ product: string; quantity: number }>) => {
      const { product, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.product === product);

      if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }
    },
  },
});

export const { setUser, logout, addProductIntoCart, removeProductFromCart, reduceProductQuantity, clearCart, updateProductQuantity } =
  authSlice.actions;
export default authSlice.reducer;

// Selectors
export const useCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user;
export const useCartItems = (state: RootState) => state.auth.cart;

// Selector to calculate total quantity of all products in the cart
export const getTotalQuantity = (state: RootState) => state.auth.cart.reduce((total, item) => total + item.quantity, 0);

// Selector to calculate total price of all products in the cart
export const getTotalPrice = (state: RootState) => state.auth.cart.reduce((total, item) => total + item.totalPrice, 0);
