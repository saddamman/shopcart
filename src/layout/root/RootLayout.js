import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import Auth from "../../components/Auth";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Auth />
    </>
  );
};

export default RootLayout;
