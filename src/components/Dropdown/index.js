import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ items, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Event listener to close the dropdown when clicking outside
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Add the event listener when the component mounts
    document.addEventListener("mousedown", handleOutsideClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <button className="custom-dropdown__button btn rounded-pill  dropdown-toggle" onClick={handleToggleDropdown}>
        {title}
      </button>
      {isOpen && (
        <ul className="custom-dropdown__menu dropdown-menu d-block">
          {items.map((item, index) => (
            <li className="custom-dropdown__menu__item dropdown-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
