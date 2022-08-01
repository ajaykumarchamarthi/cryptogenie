import React from "react";
import Container from "react-bootstrap/Container";

import FooterLogo from "../../../assets/Footer Logo.svg";

function Footer() {
  return (
    <Container fluid className="px-5 mt-5">
      <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-baseline mt-5">
        <div className="d-flex justify-content-center align-items-center">
          <img src={FooterLogo} alt="footer-logo" />
          <h4 className="d-inline mt-1 ms-1">CryptoGenie</h4>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center flex-md-row justify-md-content-between">
          <a
            href="#features"
            className="me-md-4 mt-4 mt-md-0 text-decoration-none text-dark"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="ms-md-3 me-md-4 mt-4 mt-md-0 text-decoration-none text-dark"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="ms-md-3 me-md-3 mt-4 mt-md-0 text-decoration-none text-dark"
          >
            About
          </a>
          <a
            href="#faq"
            className="ms-md-4 mt-4 mt-md-0 text-decoration-none text-dark"
          >
            FAQ
          </a>
        </div>
      </div>
      <hr className="my-md-3 my-4" />
      <div className="mb-4 d-flex flex-column align-items-center flex-md-row justify-content-md-between">
        <p className="order-2 order-md-1 my-2 my-md-0">@Yantraka.ai, 2022</p>
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-md-between order-1">
          <p className="me-md-4">Terms of use</p>
          <p className="ms-md-3">Privacy Policy</p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
