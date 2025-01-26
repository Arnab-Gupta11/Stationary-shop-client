import RootLayout from "@/layouts/RootLayout";
import AddProduct from "@/pages/AddProduct";
import Contact from "@/pages/Contact";
import Dashboard from "@/pages/Dashboard";
import DashboardLayout from "@/pages/DashboardLayout";
import Tasks from "@/pages/Tasks";

import { BrowserRouter, Route, Routes } from "react-router";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Tasks />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
