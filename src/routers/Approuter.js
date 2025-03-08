import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root/RootLayout";
import ErrorLayout from "../layout/errorLayout";
import Home from "../pages/Home";
import About from "../pages/About/Index";
import Shopcategory from "../layout/Shopcategory";
import Products from "../pages/Products";
import Cart from "../components/Cart";

// Category Inner Pages Banner
import banner_women from "../assets/banner_women.png";
import banner_mens from "../assets/banner_mens.png";
import banner_kids from "../assets/banner_kids.png";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/men", element: <Shopcategory bannerImg={banner_mens} category="men" /> },
      { path: "/kid", element: <Shopcategory bannerImg={banner_kids} category="kid" /> },
      { path: "/women", element: <Shopcategory bannerImg={banner_women} category="women" /> },
      { path: "/prodcuts/:productId", element: <Products category="products" /> },
      { path: "/cart", element: <Cart category="Cart" /> },
      // { path: "/login", element: <Login /> },
      // { path: "/signup", element: <Register /> },
    ],
  },
]);
