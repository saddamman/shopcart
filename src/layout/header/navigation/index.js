import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { ModalContext } from "../../../context/ModalContext";

import Button from "../../../components/UI/Button";
import Dropdown from "../../../components/Dropdown";

import logo from "../../../assets/logo.png";
import UserActionDropdown from "../../../components/UserActionDropdown";

const Navigation = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <nav className="navbar navbar-expand-lg navigation ">
      <div className="container">
        <div className="d-flex gap-2 align-items-center">
          <button
            className="navbar-toggler border-0 px-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link
            className="navbar-brand d-flex align-items-center gap-2"
            href="/"
          >
            <img src={logo} alt="shoping" />
            <small className="text-danger-emphasis fs-6 fw-bolder">
              ShopBazar
            </small>
          </Link>
        </div>

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
              <NavLink className="nav-link" to="/kid">
                Kids
              </NavLink>
            </li>
            <li className="nav-item">
              <Dropdown
                items={["Item 1", "Item 2", "Item 3", "Item 4"]}
                title="Dropdown"
              />
            </li>
          </ul>
        </div>
        <div className="navigation__right d-flex align-content-center gap-3">
          <div className="navigation__right__user">
            <UserActionDropdown />
          </div>

          <Link to="/cart">
            <Button className="navigation__right__cart position-relative">
              <FontAwesomeIcon icon={faShoppingBag} className="fs-5 " />
              <span className="position-absolute translate-middle badge rounded-circle bg-danger">
                0
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
