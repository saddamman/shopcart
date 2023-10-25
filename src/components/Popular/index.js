import React from "react";
import ItemCard from "../ItemCard";

import popularData from "../../assets/data";

const Popular = () => {
  return (
    <div className="popular mt-5">
      <div className="container">
        <h3 className="mb-3">Women</h3>
        <div className="row g-2 g-lg-3">
          {popularData.map((item) => (
            <div className="col-6 col-md mb-3" key={item.id}>
              <ItemCard id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
