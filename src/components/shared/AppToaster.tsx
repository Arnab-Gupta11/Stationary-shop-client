import { Toaster } from "react-hot-toast";

const AppToaster = () => {
  // const { theme } = useTheme();

  // const isDark = theme === "dark";

  return (
    <Toaster
      position="top-right"
      toastOptions={{
        // Default options for all toasts
        style: {
          background: "var(--toast-background)",
          color: "var(--toast-foreground)",
          border: "1px solid var(--toast-border)",
          borderRadius: "14px",
        },
        success: {
          duration: 3000,
        },
        error: {
          duration: 4000,
        },
      }}
    />
  );
};

export default AppToaster;
