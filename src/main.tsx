import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="font-sora">
      <Toaster position="top-right" />
      <App />
    </div>
  </StrictMode>
);
