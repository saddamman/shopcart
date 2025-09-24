// import { useContext } from "react";
// import Modal from "../../layout/modal";
import { Link } from "react-router-dom";
// import { ModalContext } from "../../context/ModalContext";

const Register = () => {
  // const { openModal } = useContext(ModalContext);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-8 col-lg-5">
          <form
            className="bg-white border shadow-sm bg-light mt-4 p-5"
            autoComplete="on"
          >
            <div className="modal-body ">
              <h3 className="fw-bold">Register</h3>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emailAddress" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailAddress"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" />
              </div>
              <div>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="emailAddress"
                  aria-describedby="emailHelp"
                />
                <small className="ms-2">
                  By Signup, you agree to our{" "}
                  <Link className="text-primary text-decoration-none">
                    Terms of Service
                  </Link>{" "}
                  &
                  <Link className="text-primary text-decoration-none">
                    {" "}
                    Privacy Policy
                  </Link>
                </small>
              </div>
            </div>

            <div className="modal-footer border-0 justify-content-center mt-3">
              <button type="button" className="btn btn-primary w-100">
                Register
              </button>
              <div className="mt-3">
                <small>
                  Already have an account?{" "}
                  <Link
                    className="text-primary text-decoration-none"
                    to="/auth/login"
                  >
                    Log in
                  </Link>
                </small>
              </div>
            </div>
          </form>
          {/* </Modal> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
