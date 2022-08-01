import React from "react";
import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SignupIllustration from "../../../assets/Signup Illustration.svg";
import Logo from "../../../assets/Logo.svg";
import LogoText from "../../../assets/Logo Text.svg";

import Google from "../../../assets/Google.svg";
import LinkedIn from "../../../assets/Linkedin.svg";

import { useFormik } from "formik";

function Signup() {
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log("Form Data", values);
    },
  });

  // console.log(formik.values);

  return (
    <Container fluid>
      <Row>
        <Col lg={4} className="d-none d-xl-block position-relative p-0">
          <img
            src={SignupIllustration}
            alt="signup-illustration"
            className="vh-100"
          />
          <button
            onClick={() => history.replace("/")}
            className="btn border border-0  d-flex justify-content-center align-items-center position-absolute top-0 mx-4 my-4"
          >
            <img src={Logo} alt="logo" className="me-1" />
            <img src={LogoText} alt="logo-text" />
          </button>
        </Col>

        <Col
          lg={8}
          className="col-12  d-lg-flex justify-content-lg-center align-items-lg-center"
        >
          <div className="p-2 w-lg-50">
            <h3>Sign Up</h3>
            <div className="d-flex gx-1 flex-lg-row flex-column justify-content-lg-between align-items-center mt-4 mb-2">
              <button className="d-block border b-2 fw-700 p-3 text-decoration-none d-flex justify-content-center w-lg-50 w-75 my-1 me-lg-3 bg-white">
                <img src={Google} className="me-1" alt="Google Logo" />
                <span>Sign up with Google </span>
              </button>
              <button className="d-block border b-2 fw-700 p-3 text-decoration-none  d-flex justify-content-center w-lg-50 w-75 my-1 ms-lg-3 bg-white">
                <img src={LinkedIn} className="me-1" alt="LinkedIn Logo" />
                <span>Sign up with Linkedin </span>
              </button>
            </div>

            <div className="d-flex">{/* Line here */}</div>

            <form onSubmit={formik.handleSubmit}>
              <div className="w-100 d-flex mt-2 justify-content-between flex-column flex-md-row">
                <div className="w-lg-50 w-100 me-md-3">
                  <small className="text-danger">First Name</small>
                  <input
                    className="form-control d-block p-3 w-100 mt-1"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Crypto"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                </div>
                <div className="w-lg-50 w-100 ms-md-3">
                  <small className="mt-3 text-danger">Last Name</small>
                  <input
                    className="form-control d-block p-3 w-100 mt-1"
                    type="text"
                    id="lastName"
                    placeholder="Genie"
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                </div>
              </div>
              <div className="mt-3">
                <small className="text-danger">Email</small>
                <input
                  className="form-control d-block p-3 w-100 mt-1"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="cryptogenie@cryptogenie.com"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div className="mt-3">
                <small className="text-danger">Password</small>
                <input
                  className="form-control d-block p-3 w-100 mt-1"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              <div className="mt-3">
                <small className="text-danger">Confirm Password</small>
                <input
                  className="form-control d-block p-3 w-100 mt-1"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                />
              </div>
              <div className="form-check mt-2 mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <p>
                    By accepting your agree to Yantraka.AI's
                    <span className="text-primary"> Terms of Use</span> &
                    <span className="text-primary"> Privacy Policy</span>
                  </p>
                </label>
              </div>
              <button
                type="submit"
                className="border border-0 text-light w-100 py-3 bg-primary mb-3"
              >
                Create account
              </button>
            </form>
            <div className="d-flex justify-content-center mt-3">
              <p className="m-0 p-0">Already a user?</p>
              <button
                type="button"
                className="btn d-inline border border-0 text-primary m-0  p-0 ms-1"
              >
                Signin
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
