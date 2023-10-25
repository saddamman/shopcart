import React from "react";
import Container from "../Container";
import ThemeButton from "../UI/ThemeButton";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import offerImg from "../../assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="offer">
      <Container className="container">
        <div className="row">
          <div className="col-md-6 offer__left">
            <div className="offer__left__content mx-auto">
              <h2>Exclusive Offers For You</h2>
              <p>Only On Best Sellers Products !</p>
              <ThemeButton className="offer__left__btn">
                Check Now <FontAwesomeIcon icon={faArrowRightLong} />
              </ThemeButton>
            </div>
          </div>
          <div className="col-md-6 offer__right text-center">
            <img src={offerImg} alt="exclusive_image" className="img-fluid w-50" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Offer;
