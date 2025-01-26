import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouterProvider from "./Provider/RouterProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider />
    </Provider>
  </StrictMode>
);
