import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import Google from "../../../assets/Google.svg";
import LinkedIn from "../../../assets/Linkedin.svg";

import ForgotPassword from "../Main Page/Forgot Password/ForgotPassword";

function Signin({ setSigninShow, signinShow, handleSigninClose }) {
  const [forgotpasswordShow, setForgotpasswordShow] = useState(false);

  const handleForgotpasswordClose = () => {
    setForgotpasswordShow(!forgotpasswordShow);
  };

  const handleForgotpasswordShow = (event) => {
    event.preventDefault();
    setForgotpasswordShow(!forgotpasswordShow);
  };

  return (
    <Modal show={signinShow} onHide={handleSigninClose} size="lg" centered>
      <div className="p-5 mb-3">
        <Modal.Body>
          <Form className="px-4 mb-4">
            <h3 className="mb-4">SignIn</h3>

            <Form.Control
              className="d-block p-3 mb-3"
              type="email"
              placeholder="Email"
              autoFocus
            />

            <Form.Control
              className="d-block p-3 mb-3"
              type="password"
              placeholder="Password"
            />

            <div className="mb-4 d-flex justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <p>Remember me</p>
                </label>
              </div>
              <div>
                <button
                  className="border border-0 bg-white text-primary"
                  onClick={handleForgotpasswordShow}
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <button className="btn btn-primary w-100 rounded-0 py-3 mb-4">
              Sign In
            </button>
          </Form>

          <hr className="mt-3" />

          <div className="d-flex mt-5 mb-4 justify-content-between">
            <button className="d-inline-block border b-2 fw-700 py-3 px-1 d-flex justify-content-center w-100  me-3 bg-white">
              <img src={Google} className="me-1" alt="Google Logo" />
              <span>Sign up with Google </span>
            </button>
            <button className="d-inline-block border b-2 fw-700 py-3 px-1 d-flex justify-content-center w-100 bg-white">
              <img src={LinkedIn} className="me-1" alt="LinkedIn Logo" />
              <span>Sign up with Linkedin </span>
            </button>
          </div>
        </Modal.Body>

        <div className="d-flex justify-content-center mt-3">
          <p className="d-inline m-0">Don't have an account?</p>
          <button className="d-inline border border-0 text-primary ms-1">
            Signup
          </button>
        </div>
      </div>
      {forgotpasswordShow && (
        <ForgotPassword
          forgotpasswordShow={forgotpasswordShow}
          handleForgotpasswordClose={handleForgotpasswordClose}
          handleForgotpasswordShow={handleForgotpasswordShow}
        />
      )}
    </Modal>
  );
}

export default Signin;
