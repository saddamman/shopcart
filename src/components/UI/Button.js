import React from "react";

const Button = ({ children, className, type, onClick }) => {
  const classes = `btn rounded-pill ${className}`;
  return (
    <button className={classes} type={type ? type : ""} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
