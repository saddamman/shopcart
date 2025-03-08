import { useContext, useEffect, useState } from "react";
import ShopContext from "../context/ShopContext";

const useShopCategory = (produtsCategory) => {
  const [categoryData, setCategoryData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const { products } = useContext(ShopContext);

  useEffect(() => {
    const result = products.filter((item) => item.category === produtsCategory);
    setCategoryData(result);
  }, [produtsCategory, products]);

  return { categoryData };
};

export default useShopCategory;
