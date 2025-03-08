import React from "react";

const SelectDropDown = ({ className, onChange, children, defaultVal }) => {
  const classes = `form-select ${className}`;
  return (
    <select className={classes} aria-label="filter products" defaultValue={defaultVal} onChange={onChange}>
      {children}
    </select>
  );
};

export default SelectDropDown;
