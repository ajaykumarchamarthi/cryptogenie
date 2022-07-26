import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Google from "../../../../assets/Google.svg";
import LinkedIn from "../../../../assets/Linkedin.svg";

function Profile() {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col lg={5}>
          <form>
            <div className="mt-2">
              <small className="mt-3 text-danger">First Name</small>
              <input
                type="text"
                className="form-control p-3 mt-2"
                placeholder="First Name"
              />
            </div>
            <div>
              <small className="mt-3 text-danger">Last Name</small>
              <input
                type="text"
                className="form-control p-3 mt-2"
                placeholder="Last Name"
              />
            </div>
            <div>
              <small className="mt-3 text-danger">Email</small>
              <input
                type="email"
                className="form-control p-3 mt-2"
                placeholder="Email"
              />
            </div>

            <div className="d-flex mt-4 mb-5 justify-content-between">
              <button className="d-inline-block border b-2 fw-700 py-3 px-1 d-flex justify-content-center w-100  me-3 bg-white">
                <img src={Google} className="me-1" alt="Google Logo" />
                <span>Sign up with Google </span>
              </button>
              <button className="d-inline-block border b-2 fw-700 py-3 px-1 d-flex justify-content-center w-100 bg-white">
                <img src={LinkedIn} className="me-1" alt="LinkedIn Logo" />
                <span>Sign up with Linkedin </span>
              </button>
            </div>

            <a
              href="changepassword"
              className="text-primary text-decoration-none d-block mb-3"
            >
              Change password
            </a>

            <button
              type="button"
              className="d-block border border-0 rounded-0 bg-primary text-white w-50 ms-auto mt-4 py-3"
            >
              Save
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
