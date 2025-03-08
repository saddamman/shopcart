import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer pt-5 pb-4 text-center">
      <div className="container">
        <div className="footer__top">
          <Link className="footer__logo" href="/">
            <img src={logo} alt="shoping" />
          </Link>
          <div className="footer__menu">
            <Link className="footer__menu__link">Company</Link>
            <Link className="footer__menu__link">Prodcuts</Link>
            <Link className="footer__menu__link">Offices</Link>
            <Link className="footer__menu__link">About</Link>
            <Link className="footer__menu__link">Contacts</Link>
          </div>
          <div className="footer__social my-4">
            <Link className="footer__social__link">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link className="footer__social__link">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link className="footer__social__link">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link className="footer__social__link">
              <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer__bottom">
        <div className="container">
          <p className="m-0">Copyright &copy; 2023 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
