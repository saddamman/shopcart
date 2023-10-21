import React, { useContext } from "react";
import Register from "./Register";
import Login from "./Login";
import { ModalContext } from "../../context/ModalContext";

const Auth = () => {
  const { modals } = useContext(ModalContext);
  return (
    <>
      {modals === "Register_Modal_Open" ? <Register /> : ""}
      {modals === "Login_Modal_Open" ? <Login /> : ""}
    </>
  );
};

export default Auth;
