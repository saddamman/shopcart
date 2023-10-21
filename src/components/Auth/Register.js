import React, { useContext } from "react";
import Modal from "../../layout/modal";
import { Link } from "react-router-dom";
import { ModalContext } from "../../context/ModalContext";

const Register = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <div>
      <Modal title="Singup">
        <form>
          <div className="modal-body px-5">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input type="email" className="form-control" id="name" aria-describedby="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="emailAddress" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="emailAddress" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div>
              <input type="checkbox" className="form-check-input" id="emailAddress" aria-describedby="emailHelp" />
              <small className="ms-2">
                By Signup, you agree to our <Link className="text-primary text-decoration-none">Terms of Service</Link> &
                <Link className="text-primary text-decoration-none"> Privacy Policy</Link>
              </small>
            </div>
          </div>

          <div className="modal-footer justify-content-between border-0 px-5 pt-0 pb-4">
            <button type="button" className="btn btn-primary">
              Signup
            </button>
            <div className="ms-2">
              <small>
                Already have an account?{" "}
                <Link
                  className="text-primary text-decoration-none"
                  onClick={() => {
                    openModal("Login_Modal_Open");
                  }}>
                  Sign in
                </Link>
              </small>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Register;
