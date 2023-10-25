import React from "react";

const ThemeButton = ({ children, className, type, onClick }) => {
  const classes = `btn theme-button ${className}`;
  return (
    <button className={classes} type={type ? type : ""} onClick={onClick}>
      {children}
    </button>
  );
};

export default ThemeButton;
