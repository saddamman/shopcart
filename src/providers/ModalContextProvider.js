import { useReducer } from "react";
import { ModalContext } from "../context/ModalContext";

const intialState = {
  modals: "",
};
const modalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        modals: action.content,
      };
    case "CLOSE_MODAL":
      return {
        modals: "",
      };
    default:
      return {
        state,
      };
  }
};

const ModalContextProvider = ({ children }) => {
  const [modalState, dispatch] = useReducer(modalReducer, intialState);

  const openModal = (content) => {
    dispatch({ type: "OPEN_MODAL", content });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const modalContex = {
    modals: modalState.modals,
    openModal,
    closeModal,
  };
  return <ModalContext.Provider value={modalContex}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;
