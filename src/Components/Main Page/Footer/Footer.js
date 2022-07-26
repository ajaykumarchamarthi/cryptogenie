import React from "react";
import Container from "react-bootstrap/Container";

import FooterLogo from "../../../assets/Footer Logo.svg";

function Footer() {
  return (
    <Container fluid className="px-5 mt-5">
      <div className="d-flex justify-content-between align-items-baseline mt-5">
        <div className="d-flex justify-content-center align-items-center">
          <img src={FooterLogo} alt="footer-logo" />
          <h4 className="d-inline mt-1 ms-1">CryptoGenie</h4>
        </div>
        <div className="d-flex justify-content-between">
          <a href="#features" className="me-4 text-decoration-none text-dark">
            Features
          </a>
          <a
            href="#pricing"
            className="ms-3 me-4 text-decoration-none text-dark"
          >
            Pricing
          </a>
          <a href="#about" className="ms-3 me-3 text-decoration-none text-dark">
            About
          </a>
          <a href="#faq" className="ms-4 text-decoration-none text-dark">
            FAQ
          </a>
        </div>
      </div>
      <hr className="my-3" />
      <div className="mb-4 d-flex justify-content-between">
        <p>@Yantraka.ai, 2022</p>
        <div className="d-flex justify-content-between">
          <p className="me-4">Terms of use</p>
          <p className="ms-3">Privacy Policy</p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
