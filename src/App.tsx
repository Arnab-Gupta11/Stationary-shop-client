import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ThemeProvider } from "./Provider/ThemeProvider";
function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
