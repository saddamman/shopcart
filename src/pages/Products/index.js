import React, { useContext, useEffect, useState } from "react";
import Container from "../../components/Container";
import BreadCrumb from "../../components/BreadCrumb";
import ShopContext from "../../context/ShopContext";
import { useParams } from "react-router-dom";
import DisplayProduct from "../../components/DisplayProduct";

const Products = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [currantProduct, setCurrantProduct] = useState(null);

  useEffect(() => {
    const currantProduct = products.find((item) => item.id === Number(productId));
    setCurrantProduct(currantProduct);
  }, [productId, products]);

  return (
    <div className="products">
      <Container className="container">
        <BreadCrumb currantProduct={[currantProduct?.category, currantProduct?.name]} />
        <div className="products__content">{currantProduct && <DisplayProduct product={currantProduct} />}</div>
      </Container>
    </div>
  );
};

export default Products;
