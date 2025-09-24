import { Link } from "react-router-dom";
// import Modal from "../../layout/modal";
const Login = () => {
  return (
    <div className="container">
      {/* <Modal title="SingIn"> */}
      <div className="row justify-content-center">
        <div className="col-sm-8 col-lg-5">
          <form
            className="bg-white border shadow-sm bg-light mt-4 p-5"
            autoComplete="on"
          >
            <div className="modal-body">
              <h3 className="fw-bold">Log In</h3>
              <div className="mb-3">
                <label htmlFor="emailAddress" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  autoComplete="on"
                />
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="privacy-policy"
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

            <div className="modal-footer border-0 justify-content-center">
              <button type="button" className="btn btn-primary w-100">
                Log In
              </button>
              <div className="mt-3">
                <small>
                  Don't have an account?{" "}
                  <Link
                    className="text-primary text-decoration-none"
                    to="/auth/register"
                  >
                    Register
                  </Link>
                </small>
              </div>
            </div>
          </form>
        </div>
        {/* </Modal> */}
      </div>
    </div>
  );
};

export default Login;
