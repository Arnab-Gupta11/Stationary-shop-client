import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice";
import compareProductReducer from "./features/compareProducts/compareProductsSlice";
import wishlistReducer from "./features/wishlist/wishlistSlice";
import { baseApi } from "./api/baseApi";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

//Persist Auth reducer.
const authPersistConfig = {
  key: "auth",
  storage,
};
const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

// Persist Cart reducer.
const cartPersistConfig = {
  key: "cart",
  storage,
};
const cartPersistedReducer = persistReducer(cartPersistConfig, cartReducer);

// Persist compare product reducer.
const compareProductPersistConfig = {
  key: "compareProduct",
  storage,
};
const compareProductPersistReducer = persistReducer(compareProductPersistConfig, compareProductReducer);

// Persist compare product reducer.
const wishlistPersistConfig = {
  key: "wishlist",
  storage,
};
const wishlistPersistReducer = persistReducer(wishlistPersistConfig, wishlistReducer);

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authPersistedReducer,
  cart: cartPersistedReducer,
  compareProduct: compareProductPersistReducer,
  wishlist: wishlistPersistReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
