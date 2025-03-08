import React from "react";
import ShopContext from "../context/ShopContext";
import allProducts from "../assets/all_product";
const totalProductNum = allProducts.length;

const ShopContextProvider = ({ children }) => {
  const shopContext = {
    products: allProducts,
    totalProductNum,
  };
  return <ShopContext.Provider value={shopContext}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
