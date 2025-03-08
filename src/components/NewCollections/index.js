import React from "react";
import ItemCard from "../ItemCard";
import NewCollection from "../../assets/new_collections";
const NewCollections = () => {
  return (
    <div className="popular mt-5">
      <div className="container">
        <h3 className="mb-3">New Collections</h3>
        <div className="row g-2 g-lg-3 flex-wrap">
          {NewCollection.map((item) => (
            <div className="col-6 col-md-3 mb-4" key={item.id}>
              <ItemCard id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCollections;
