import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Container from "../Container";
import BannerImg from "../../assets/hero_image.png";
import handIcon from "../../assets/hand_icon.png";
import ThemeButton from "../UI/ThemeButton";

const Banner = () => {
  return (
    <div className="banner">
      <Container className="container">
        <div className="row align-content-center">
          <div className="col-md-8 banner__left">
            <div className="banner__left__box">
              <p className="mb-3">NEW ARRAILVAL ONLY </p>
              <h1 className="mb-5 banner__left__box__title">
                <span className=" d-md-block">
                  New <img src={handIcon} alt="Hand Icon" className="img-fluid hand-icon" />
                </span>
                <span className=" d-md-block">Collections For Everyone</span>
                {/* <span className=" d-md-block">For Everyone</span> */}
              </h1>
              <ThemeButton className="banner__left__box__btn">
                Latest collections <FontAwesomeIcon icon={faArrowRightLong} />
              </ThemeButton>
            </div>
          </div>
          <div className="col-md-4 banner__right">
            <img src={BannerImg} alt="Banner Women" className="img-fluid" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
