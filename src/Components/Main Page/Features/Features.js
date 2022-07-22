import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { featuresData } from "./Data/featuresData";

import HowItWorks from "../../../assets/How It Works.svg";

function Features() {
  return (
    <Container fluid className="mt-5 py-5" id="features">
      <Container className="mt-5">
        <Row className="mt-5">
          <h1 className="px-0 mt-5 mb-5 fw-bold">Features</h1>
          {featuresData.map((item) => {
            return (
              <Col xs={12} xl={6} className="p-0" key={item.title}>
                <div className="mb-5 mt-5 me-5">
                  <img
                    className="mb-4"
                    src={item.image}
                    alt={`${item.title} pic`}
                  />
                  <h4 className="mb-4 fw-bold">{item.title}</h4>
                  <p className="mt-2 fs-4">{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="my-5">
        <Row>
          <div className="my-5">
            <h1 className="fw-bold mb-5">How it works</h1>
            <img
              src={HowItWorks}
              alt="How it works"
              className="w-100 img-fluid my-5"
            />
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Features;
