import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import ErrorPage from "@/pages/ErrorPage";

import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import UserRoutes from "./UserRoutes";

import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import CartPage from "@/pages/Cart/Cart";
import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import ManageProfile from "@/pages/Dashboard/User/ManageProfile/ManageProfile";
import DashboardLayout from "@/layouts/Dashboard/DashboardLayout";
import ManageProducts from "@/pages/Dashboard/Admin/products/ManageProducts";
import Overview from "@/pages/Dashboard/Admin/overview/Overview";
import AddNewProduct from "@/pages/Dashboard/Admin/products/AddNewProduct";
import UpdateProduct from "@/pages/Dashboard/Admin/products/UpdateProduct";
import DeletedProducts from "@/pages/Dashboard/Admin/products/DeletedProducts";
import ManageCategories from "@/pages/Dashboard/Admin/categories/ManageCategories";
import ManageBrands from "@/pages/Dashboard/Admin/brands/ManageBrands";
import DeletedBrands from "@/pages/Dashboard/Admin/brands/DeletedBrands";
import ManageBlogs from "@/pages/Dashboard/Admin/blogs/ManageBlogs";
import AddBlog from "@/pages/Dashboard/Admin/blogs/AddBlog";
import UpdateBlog from "@/pages/Dashboard/Admin/blogs/UpdateBlog";
import DeletedBlogs from "@/pages/Dashboard/Admin/blogs/DeletedBlogs";
import ManageUsers from "@/pages/Dashboard/Admin/users/ManageUsers";
import DeletedCategories from "@/pages/Dashboard/Admin/categories/DeletedCategories";
import ViewOrders from "@/pages/Dashboard/User/ViewOrders/ViewOrders";
import CategoryProducts from "@/pages/CategoryProducts/CategoryProducts";
import ManageOrders from "@/pages/Dashboard/Admin/orders/ManageOrders";
import Wishlist from "@/pages/Wishlist/Wishlist";
import OverviewUser from "@/pages/Dashboard/User/OverviewUser/OverviewUser";
import ManageContactMessage from "@/pages/Dashboard/Admin/contact/ManageContactMessage";

import { suspenseWrapper } from "./suspenseWrapper";
import AllProductsPage from "@/pages/AllProducts";
const About = lazy(() => import("@/pages/About/About"));
const FAQ = lazy(() => import("@/pages/FAQ/FAQ"));
const ContactUs = lazy(() => import("@/pages/ContactUs/ContactUs"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy/PrivacyPolicy"));
const CompareProducts = lazy(() => import("@/pages/CompareProducts/CompareProducts"));
const TermsAndServices = lazy(() => import("@/pages/TermsAndServices/TermsAndServices"));
const ShippingPolicy = lazy(() => import("@/pages/ShippingPolicy/ShippingPolicy"));
const OrderVerification = lazy(() => import("@/pages/OrderVerification/OrderVerification"));

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
      { path: "/shop", element: <AllProductsPage /> },
      {
        path: "/category/:categoryId",
        element: <CategoryProducts />,
      },
      {
        path: "/products/slug/:slug",
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
        path: "/compare-products",
        element: <CompareProducts />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      { path: "/about", element: suspenseWrapper(<About />) },
      {
        path: "/faq",
        element: suspenseWrapper(<FAQ />),
      },
      {
        path: "/contact-us",
        element: suspenseWrapper(<ContactUs />),
      },
      {
        path: "/privacy-policy",
        element: suspenseWrapper(<PrivacyPolicy />),
      },
      {
        path: "/terms-of-service",
        element: suspenseWrapper(<TermsAndServices />),
      },
      {
        path: "/shipping-policy",
        element: suspenseWrapper(<ShippingPolicy />),
      },
      {
        path: "/order/verification",
        element: <PrivateRoute>{suspenseWrapper(<OrderVerification />)}</PrivateRoute>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      //Admin Overview Routes
      {
        path: "admin/overview",
        element: (
          <AdminRoute>
            <Overview />
          </AdminRoute>
        ),
      },

      //Product Routes
      {
        path: "admin/manage-products",
        element: (
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        ),
      },
      {
        path: "admin/add-product",
        element: (
          <AdminRoute>
            <AddNewProduct />
          </AdminRoute>
        ),
      },
      {
        path: "admin/update-product/:id",
        element: (
          <AdminRoute>
            <UpdateProduct />
          </AdminRoute>
        ),
      },
      {
        path: "admin/deleted-products",
        element: (
          <AdminRoute>
            <DeletedProducts />
          </AdminRoute>
        ),
      },
      //Category Routes
      {
        path: "admin/manage-categories",
        element: (
          <AdminRoute>
            <ManageCategories />
          </AdminRoute>
        ),
      },
      {
        path: "admin/deleted-categories",
        element: (
          <AdminRoute>
            <DeletedCategories />
          </AdminRoute>
        ),
      },

      //Brand Routes
      {
        path: "admin/manage-brands",
        element: (
          <AdminRoute>
            <ManageBrands />
          </AdminRoute>
        ),
      },
      {
        path: "admin/deleted-brands",
        element: (
          <AdminRoute>
            <DeletedBrands />
          </AdminRoute>
        ),
      },

      //Manage Order Routes
      {
        path: "admin/manage-orders",
        element: (
          <AdminRoute>
            <ManageOrders />
          </AdminRoute>
        ),
      },

      //Blogs Routes
      {
        path: "admin/manage-blogs",
        element: (
          <AdminRoute>
            <ManageBlogs />
          </AdminRoute>
        ),
      },
      {
        path: "admin/add-blogs",
        element: (
          <AdminRoute>
            <AddBlog />
          </AdminRoute>
        ),
      },
      {
        path: "admin/update-blog/:id",
        element: (
          <AdminRoute>
            <UpdateBlog />
          </AdminRoute>
        ),
      },
      {
        path: "admin/deleted-blogs",
        element: (
          <AdminRoute>
            <DeletedBlogs />
          </AdminRoute>
        ),
      },

      //Maange User Routes
      {
        path: "admin/manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      //Maange Contact message Routes
      {
        path: "admin/contact-message",
        element: (
          <AdminRoute>
            <ManageContactMessage />
          </AdminRoute>
        ),
      },

      // User Routes
      {
        path: "user/overview",
        element: (
          <UserRoutes>
            <OverviewUser />
          </UserRoutes>
        ),
      },
      {
        path: "user/view-orders",
        element: (
          <UserRoutes>
            <ViewOrders />
          </UserRoutes>
        ),
      },
      {
        path: "user/manage-profile",
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
