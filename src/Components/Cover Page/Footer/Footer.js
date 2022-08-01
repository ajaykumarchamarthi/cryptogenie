import React from "react";
import YantrakaLogo from "../../../assets cover/YantrakaLogo.svg";

function Footer() {
  return (
    <footer className="mb-4 px-5">
      <div className="px-3 d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
        <div className="my-4 d-flex justify-content-center align-items-center">
          <img src={YantrakaLogo} alt="Yantraka-Logo" className="me-2" />
          <h6 className="d-inline mt-2 fw-bold text-dark">YANTRAKA.AI</h6>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <a
            className="text-decoration-none text-muted mb-4 mb-md-0 me-md-5"
            href="#cryptogenie"
          >
            CryptoGenie
          </a>
          <a
            className="text-decoration-none text-muted mb-4 mb-md-0 me-md-5"
            href="#Careers"
          >
            Careers
          </a>
          <a
            className="text-decoration-none text-muted mb-4 mb-md-0 me-md-5"
            href="#News"
          >
            News
          </a>
          <a
            className="text-decoration-none text-muted mb-4 mb-md-0 me-md-5"
            href="#Blog"
          >
            Blog
          </a>
        </div>
      </div>
      <hr className="my-3 px-3 border border-1 border border-dark" />
      <div className="px-3 d-flex flex-column flex-md-row align-items-center justify-content-md-between">
        <div>
          <p className="text-muted">@Yantraka.ai, 2022</p>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <p className="text-muted me-md-5">Terms of use</p>
          <p className="text-muted ms-md-5">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
