import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "../../../components/Dropdown";
import Button from "../../../components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { ModalContext } from "../../../context/ModalContext";

import cartIcon from "../../../assets/logo.png";

const Navigation = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <nav className="navbar navbar-expand-lg navigation ">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src={cartIcon} alt="shoping" /> <small>ShopBazar</small>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/men">
                Men
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/women">
                Women
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/kids">
                Kids
              </NavLink>
            </li>
            <li className="nav-item">
              <Dropdown items={["Item 1", "Item 2", "Item 3", "Item 4"]} title="Dropdown" />
            </li>
          </ul>
        </div>
        <div className="navigation__right">
          <Button onClick={() => openModal("Register_Modal_Open")}>
            <FontAwesomeIcon icon={faUserAlt} className="fs-5" />
          </Button>
          <Link to="/cart">
            <Button className="navigation__right__cart position-relative">
              <FontAwesomeIcon icon={faShoppingBag} className="fs-5 " />
              <span className="position-absolute translate-middle badge rounded-circle bg-danger">0</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
