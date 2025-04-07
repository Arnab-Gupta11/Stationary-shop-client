import DashboardLayout from "@/layouts/Dashboard/DashboardLayout";
import RootLayout from "@/layouts/RootLayout";

import AllProductsPage from "@/pages/AllProducts";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import CartPage from "@/pages/Cart/Cart";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import OrderVerification from "@/pages/OrderVerification/OrderVerification";
import RegisterPage from "@/pages/Register";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import ViewOrders from "@/pages/Dashboard/User/ViewOrders/ViewOrders";
import ManageOrders from "@/pages/Dashboard/Admin/ManageOrders/ManageOrders";
import ManageProducts from "@/pages/Dashboard/Admin/ManageProducts/ManageProducts";
import ManageUsers from "@/pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageProfile from "@/pages/Dashboard/User/ManageProfile/ManageProfile";
import AdminRoute from "./AdminRoute";
import UserRoutes from "./UserRoutes";
import AddNewProduct from "@/pages/Dashboard/Admin/ManageProducts/AddNewProduct";
import UpdateProduct from "@/pages/Dashboard/Admin/ManageProducts/UpdateProduct";
import About from "@/pages/About/About";
import DashboardLayout1 from "@/layouts/Dashboard/DashboardLayout1";

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
        element: <About />,
      },
      {
        path: "/shop",
        element: <AllProductsPage />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/order/verification",
        element: (
          <PrivateRoute>
            <OrderVerification />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "manage-products",
        element: (
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        ),
      },
      {
        path: "manage-products/add-product",
        element: (
          <AdminRoute>
            <AddNewProduct />
          </AdminRoute>
        ),
      },
      {
        path: "manage-products/:id",
        element: (
          <AdminRoute>
            <UpdateProduct />
          </AdminRoute>
        ),
      },
      {
        path: "manage-orders",
        element: (
          <AdminRoute>
            <ManageOrders />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "view-orders",
        element: (
          <UserRoutes>
            <ViewOrders />
          </UserRoutes>
        ),
      },
      {
        path: "manage-profile",
        element: (
          <UserRoutes>
            <ManageProfile />
          </UserRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard1",
    element: <DashboardLayout1 />,
    children: [
      {
        path: "manage-products",
        element: (
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        ),
      },
      {
        path: "manage-products/add-product",
        element: (
          <AdminRoute>
            <AddNewProduct />
          </AdminRoute>
        ),
      },
      {
        path: "manage-products/:id",
        element: (
          <AdminRoute>
            <UpdateProduct />
          </AdminRoute>
        ),
      },
      {
        path: "manage-orders",
        element: (
          <AdminRoute>
            <ManageOrders />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "view-orders",
        element: (
          <UserRoutes>
            <ViewOrders />
          </UserRoutes>
        ),
      },
      {
        path: "manage-profile",
        element: (
          <UserRoutes>
            <ManageProfile />
          </UserRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
