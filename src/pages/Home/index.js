import React from "react";
import Banner from "../../components/Banner";
import Popular from "../../components/Popular";
import Offer from "../../components/Offer";
import NewCollections from "../../components/NewCollections";
import NewsLetter from "../../layout/newsLetter";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Home;
