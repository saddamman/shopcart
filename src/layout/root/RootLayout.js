import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";
import Auth from "../../components/Auth";

const RootLayout = () => {
  // useEffect(() => {
  //   const bodyElement = document.getElementsByTagName("body");
  //   return () => {
  //     console.log("clear");
  //   };
  // }, []);
  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
      <Auth />
    </>
  );
};

export default RootLayout;
