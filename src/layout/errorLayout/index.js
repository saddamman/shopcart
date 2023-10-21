import React from "react";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
const ErrorLayout = () => {
  return (
    <div className="errorLayout">
      <div className="card text-white bg-primary">
        <img className="card-img-top" src="holder.js/100px180/" alt="Title" />
        <div className="card-body">
          <h4 className="card-title">Error Might page is not exist which you find.</h4>
          <Link to="/">
            <Button className="btn btn-danger">Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorLayout;
