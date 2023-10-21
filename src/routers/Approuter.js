import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root/RootLayout";
import ErrorLayout from "../layout/errorLayout";
import Home from "../pages/Home";
import About from "../pages/About/Index";
import Men from "../pages/Men";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Kids from "../pages/Kids";
import Shopcategory from "../pages/Shopcategory";
import Products from "../pages/Products";
import Cart from "../components/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/men", element: <Shopcategory catefory="men" /> },
      { path: "/kids", element: <Shopcategory catefory="kids" /> },
      { path: "/women", element: <Shopcategory catefory="women" /> },
      { path: "/prodcuts/:productId", element: <Products catefory="products" /> },
      { path: "/cart", element: <Cart catefory="Cart" /> },
      // { path: "/login", element: <Login /> },
      // { path: "/signup", element: <Register /> },
    ],
  },
]);
