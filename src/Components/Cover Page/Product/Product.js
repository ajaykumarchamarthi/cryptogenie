import React from "react";
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductOutline from "../../../assets cover/Product Outline.svg";
import CGLogo from "../../../assets cover/CG Logo.svg";

import ComingSoon from "../../../assets cover/Coming Soon Banner.svg";
import BannerCG from "../../../assets cover/Banner CG.svg";

import Contact from "../Contact/Contact";

function Product({ show, handleClose, handleShow }) {
  const history = useHistory();

  return (
    <Container className="mt-5 mb-5" id="products">
      <Row className="mt-5">
        <div className="mb-4 mt-5">
          <h1 className="mt-5 mb-2 fw-bold">Products</h1>
        </div>
        <img src={ProductOutline} alt="Product Outline" />
      </Row>
      <Row className="mt-5 mb-4">
        <Col lg={2} sm={12}>
          <img
            src={CGLogo}
            alt="CG Logo"
            onClick={() => history.replace("/")}
          />
        </Col>
        <Col lg={10}>
          <h3>CryptoGenie</h3>
          <Row>
            <Col>
              <p>
                An Automated Predictive Trading Platform for Cryptocurrencies,
                using advanced financial machine learning concepts and
                techniques at the cutting edge of technology from state of the
                art research papers
              </p>
              <button
                type="button"
                className="border border-0 bg-primary text-white py-3 px-4 mt-5"
                onClick={() => history.replace("/")}
              >
                Go to CryptoGenie
              </button>
            </Col>
            <Col>
              <p>
                CryptoGenie can be licensed to capital management firms which
                can leverage the technolgoy to provide superior returns to their
                fund investors. It is an automated system end to end, right from
                data ingestion, to model training, validation and trading.
              </p>
            </Col>
            <hr className="border-2 border-top border-dark mt-5" />
          </Row>
          <Row className="mt-5 mb-5">
            <Col>
              <img
                className="d-block w-100 mb-5"
                src={ComingSoon}
                alt="coming-soon banner"
              />
              <h3 className="mt-4 fw-bold">Coming Soon</h3>
              <p className="mt-2 mb-2">
                Our new product. Early education for productive work
              </p>
              <button
                type="button"
                className="border border-0 bg-primary text-white py-3 px-4 mt-4"
                onClick={handleShow}
              >
                Request Demo
              </button>
            </Col>
            <Col className="position-relative">
              <img className="d-block w-100" src={BannerCG} alt="CG banner" />
              <div className="position-absolute top-50 px-5">
                <h2 className="mb-3 text-white fw-900 lh-lg">
                  Trade more effectively with our Cryptocurrencies trend
                  predictions.
                </h2>
                <button
                  type="button"
                  className="border border-0 bg-primary text-white py-3 px-5 mt-lg-4"
                  onClick={() => history.replace("/")}
                >
                  Go to CryptoGenie
                </button>
              </div>
            </Col>
          </Row>
          {show && <Contact handleClose={handleClose} show={show} />}
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
