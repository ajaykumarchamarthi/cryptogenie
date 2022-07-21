import React from "react";
import Container from "react-bootstrap/Container";

import FooterLogo from "../../../assets/Footer Logo.svg";

function Footer() {
  return (
    <Container fluid className="px-5">
      <div className="py-2 d-flex justify-content-between align-items-baseline">
        <div className="d-flex justify-content-center align-items-center">
          <img src={FooterLogo} alt="footer-logo" />
          <h4 className="d-inline mt-1 ms-1">CryptoGenie</h4>
        </div>
        <div className="d-flex justify-content-between">
          <p className="me-4">Features</p>
          <p className="ms-3 me-4">Pricing</p>
          <p className="ms-3 me-3">About</p>
          <p className="ms-4">FAQ</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="mb-4 d-flex justify-content-between">
        <p>@Yantraka.ai, 2022</p>
        <div className="d-flex justify-content-between">
          <p className="pe-4">Terms of use</p>
          <p className="ps-3">Privacy Policy</p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
