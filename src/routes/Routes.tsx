import RootLayout from "@/layouts/RootLayout";
import AboutPage from "@/pages/About";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  // {
  //   path: "/unauthorize",
  //   element: <Unauthorize></Unauthorize>,
  // },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard></Dashboard>,
  //   children: [
  //     {
  //       path: "manage-shop",
  //       element: <ManageShop></ManageShop>,
  //     },
  //     {
  //       path: "admin-summary",
  //       element: <AdminSummary></AdminSummary>,
  //     },
  //     //* <----------------------Manager-Route----------------------->*/
  //     {
  //       path: "manage-product",
  //       element: <ManageProduct></ManageProduct>,
  //     },
  //     {
  //       path: "manage-product/addProduct",
  //       element: <AddProduct></AddProduct>,
  //     },
  //     {
  //       path: "manage-product/:id",
  //       element: <UpdateProduct></UpdateProduct>,
  //     },

  //     {
  //       path: "sales-collection",
  //       element: <SalesCollection></SalesCollection>,
  //     },
  //     {
  //       path: "check-out",
  //       element: <CheckOut></CheckOut>,
  //     },
  //     {
  //       path: "subscription",
  //       element: <Subscription></Subscription>,
  //     },
  //     {
  //       path: "subscription/:id",
  //       element: <Payment></Payment>,
  //       loader: ({ params }) => fetch(`https://inventohub.vercel.app/subscription/${params.id}`),
  //     },
  //     {
  //       path: "sales-summary",
  //       element: <SalesSummary></SalesSummary>,
  //     },
  //   ],
  // },
]);

export default router;
