import React from "react";
import ThemeButton from "../UI/ThemeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useRating from "../../hooks/useRating";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
const DisplayProduct = ({ product }) => {
  const { name, category, image, new_price, old_price, rating } = product;
  const { ratingStage } = useRating(rating);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsNav = {
    slidesToShow: 3,
    focusOnSelect: true,
    arrows: true,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className="displayProduct">
      <div className="row">
        <div className="col-md-5 displayProduct__left">
          <div className="row">
            <div className="col-sm-3 displayProduct__left__navSlider">
              <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)} {...settingsNav}>
                <div>
                  <img src={image} alt={name} className="img-fluid" />
                </div>
                <div>
                  <img src={image} alt={name} className="img-fluid" />
                </div>
                <div>
                  <img src={image} alt={name} className="img-fluid" />
                </div>
                <div>
                  <img src={image} alt={name} className="img-fluid" />
                </div>
                <div>
                  <img src={image} alt={name} className="img-fluid" />
                </div>
              </Slider>
            </div>
            <div className="col-sm-9">
              <Slider asNavFor={nav1} ref={(slider) => (sliderRef2 = slider)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true} {...settings}>
                <div>
                  <img src={image} alt={name} className="img-fluid" />
                </div>
                <div>
                  <img src={image} alt={name} className="img-fluid" />
                </div>
                <div>
                  <img src={image} alt={name} className="img-fluid" />
                </div>
                <div>
                  <img src={image} alt={name} className="img-fluid" />
                </div>
                <div>
                  <img src={image} alt={name} className="img-fluid" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="col-md-7 displayProduct__right">
          <div className="displayProduct__right__content">
            <h3 className="mb-2">{name}</h3>
            <div className="card-text mb-3">
              <span className="text-danger-emphasis fw-bolder">${new_price}</span>
              <span className="text-secondary text-decoration-line-through ms-3">${old_price}</span>
              <span className={`badge rounded-1 ${ratingStage} ms-5`}>{rating}</span>
            </div>
            <div className="category row align-items-center">
              <div className="col-auto">
                Category:<b> {category}</b>
              </div>
              <div className="col-auto">
                <ThemeButton>
                  <span>Add to Cart</span>
                  <FontAwesomeIcon icon={faShoppingCart} className="ms-2" />
                </ThemeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
