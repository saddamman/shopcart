import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "../../context/ModalContext";

const ModalOverlay = ({ closeModal }) => {
  return <div className="modal-overlay" onClick={closeModal}></div>;
};

const ModalContent = ({ title, children, closeModal }) => {
  return (
    <div
      className="modal d-block customModal"
      tabIndex="-1"
      onClick={closeModal}
    >
      <div
        className="modal-dialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-3 fw-bolder" id="exampleModalLabel">
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
const modalRoot = document.getElementById("modal-root");
const modalOverlay = document.getElementById("modal-overlay");

const Modal = ({ title, children }) => {
  const { closeModal } = useContext(ModalContext);

  return (
    <>
      {ReactDOM.createPortal(
        <ModalContent
          title={title}
          children={children}
          closeModal={closeModal}
        />,
        modalRoot
      )}
      {ReactDOM.createPortal(
        <ModalOverlay closeModal={closeModal} />,
        modalOverlay
      )}
    </>
  );
};

export default Modal;
