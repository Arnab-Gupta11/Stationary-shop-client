import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppToaster from "./components/shared/AppToaster.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="font-Exo bg-light-primary-bg dark:bg-dark-primary-bg">
      <AppToaster />
      <App />
    </div>
  </StrictMode>
);
// bg-[#0b0b0b]
