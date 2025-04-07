import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="font-Exo bg-light-primary-bg dark:bg-dark-primary-bg">
      <Toaster position="top-right" />
      <App />
    </div>
  </StrictMode>
);
// bg-[#0b0b0b]
