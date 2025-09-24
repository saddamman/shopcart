import React, { useState, useEffect, useRef } from "react";
import { cn } from "../../utils/cn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Dropdown = ({
  items,
  title,
  className,
  children,
  dropdownHover = false,
  handleChangeUserAction,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (dropdownHover) return; // skip outside click handler if hover mode

    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownHover]);

  const handleItemClick = (item) => {
    console.log("Selected:", item);
    setIsOpen(false);
  };

  return (
    <div
      className={cn("custom-dropdown", className)}
      ref={dropdownRef}
      onMouseEnter={() => dropdownHover && setIsOpen(true)}
      onMouseLeave={() => dropdownHover && setIsOpen(false)}
    >
      <button
        className="custom-dropdown__button btn rounded-pill dropdown-toggle"
        aria-expanded={isOpen}
        onClick={() => !dropdownHover && setIsOpen((prev) => !prev)}
      >
        {title || children}
      </button>

      {isOpen && (
        <ul
          className="custom-dropdown__menu dropdown-menu show"
          onClick={handleChangeUserAction}
        >
          {items
            ? items.map((item, index) => (
                <li
                  className="custom-dropdown__menu__item dropdown-item"
                  key={index}
                  onClick={() => handleItemClick(item)}
                >
                  <Link to={item?.slug} className="text-body">
                    <FontAwesomeIcon icon={item?.icon} className="me-2" />
                    <span>{item?.title}</span>
                  </Link>
                </li>
              ))
            : children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
