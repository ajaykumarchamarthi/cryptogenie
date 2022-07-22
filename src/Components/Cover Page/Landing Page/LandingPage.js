import React from "react";
import Header from "./../Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useHistory } from "react-router-dom";

import "./LandingPage.css";

function LandingPage() {
  const history = useHistory();

  return (
    <section className="mb-5">
      <Header />
      <Container fluid className="cover">
        <Container className="img_overlay">
          <Row className="p-0 m-0">
            <Col lg={8} md={7} sm={12} className="p-5">
              <div className="ps-5 mt-5">
                <h1 className="text-white fw-700">
                  Yantraka.ai designs and develops products in Fintech, Energy
                  and Retail domains using advanced Artificial Intelligence &
                  Machine Learning.
                </h1>
                <div>
                  <button
                    type="button"
                    className="border mt-5 bg-white border-0 text-primary px-5 py-3 fs-4"
                    onClick={() => history.replace("/")}
                  >
                    Go to CryptoGenie
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default LandingPage;
