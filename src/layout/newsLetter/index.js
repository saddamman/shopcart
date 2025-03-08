import React from "react";

const NewsLetter = () => {
  return (
    <div className="news-letter py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="fw-bolder mb-3">Get Exclusive Offer On Your Email</h2>
            <h5 className="mb-5">Subscribe to our Newroom and stay updated.</h5>
            <div className="input-group mb-3 mx-auto news-letter__form-control">
              <input
                type="email"
                className="form-control rounded-start-5 news-letter__form-control__input px-4"
                name="email"
                id="email"
                aria-describedby="emailHelpId"
                placeholder="Enter Your Email"
              />
              <button className="btn btn-outline-secondary bg-dark rounded-end-5 text-white px-5 text-uppercase" type="button" id="button-addon2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
