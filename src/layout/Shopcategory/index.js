import React, { useContext, useState } from "react";
import Container from "../../components/Container";
import useShopCategory from "../../hooks/useShopCategory";
import ItemCard from "../../components/ItemCard";
import ShopContext from "../../context/ShopContext";
import SelectDropDown from "../../components/UI/SelectDropDown";
import { Link } from "react-router-dom";

const Shopcategory = ({ bannerImg, category }) => {
  const { categoryData } = useShopCategory(category);
  const { totalProductNum } = useContext(ShopContext);
  const [selected, setSelected] = useState("men");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="shop-category">
      <div className="shop-category__banner">
        <img src={bannerImg} alt="Banner Images" className="img-fluid" />
      </div>
      <div className="shop-category__content pt-4">
        <Container className="container">
          <div className="row justify-content-between">
            <h2 className=" fw-bold mb-3 col-auto">{category.toUpperCase()}</h2>
            <div className="col text-end">
              <small>
                Showing
                <b> {categoryData && categoryData.length} </b>
                out of <b>{totalProductNum}</b> Products
              </small>
              <SelectDropDown className="w-auto d-inline-block ms-3" defaultVal={selected} onChange={handleChange}>
                <option defaultValue>Sort By</option>
                <option defaultValue="men">Price</option>
                <option defaultValue="men">Rating</option>
                <option defaultValue="men">Men</option>
                <option defaultValue="men">Women</option>
                <option defaultValue="men">Kids</option>
              </SelectDropDown>
            </div>
          </div>
          <div className="row g-2 g-lg-3">
            {categoryData?.length > 0 ? (
              categoryData.map((item) => (
                <div className="col-6 col-md-3 mb-3" key={item.id}>
                  <Link to={`/prodcuts/${item.id}`} className="text-decoration-none">
                    <ItemCard
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      new_price={item.new_price}
                      old_price={item.old_price}
                      rating={item.rating}
                    />
                  </Link>
                </div>
              ))
            ) : (
              <p>No items found</p>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Shopcategory;
