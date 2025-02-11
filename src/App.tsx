import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
