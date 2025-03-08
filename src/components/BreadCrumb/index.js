import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ currantProduct }) => {
  console.log("BreadCrumb____________________________________________-");

  return (
    <nav aria-label="breadcrumb" className="mt-4">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {currantProduct.map((item, index) => (
          <li className="breadcrumb-item" key={index}>
            {index !== currantProduct.length - 1 ? <Link to={`/${item}`}>{item}</Link> : <span>{item}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
