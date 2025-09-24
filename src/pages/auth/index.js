// import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
// import { ModalContext } from "../context/ModalContext";

const Auth = () => {
  const { type } = useParams();
  // const { modals } = useContext(ModalContext);
  return (
    <>
      {type === "login" ? <Login /> : <Register />}

      {/* {modals === "Register_Modal_Open" ? <Register /> : ""}
      {modals === "Login_Modal_Open" ? <Login /> : ""} */}
    </>
  );
};

export default Auth;
