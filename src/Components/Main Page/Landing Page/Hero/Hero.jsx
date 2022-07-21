import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SkewImg from "../../../../assets/Skewed Img.svg";

import HeroPageRectangle from "../../../../assets/Illustartion.svg";

function Hero() {
  return (
    <Container fluid>
      <Row className="d-flex justify-content-between">
        <Col lg={6} style={{ padding: "63px" }}>
          <div
            className="position-relative mb-3"
            style={{
              height: "31.6px",
              width: "118px",
            }}
          >
            <img src={SkewImg} alt="machine-skew" />
            <h6
              className="position-absolute"
              style={{ top: "25%", left: "25%", zIndex: "10" }}
            >
              Machine
            </h6>
          </div>

          <h1 className="fw-bolder fs-1 lh-md mb-4">
            CryptoGenie is a yantra which predicts the directional trend of
            select crypto assets
          </h1>

          <p
            className="fs-5 fw-400 lh-sm"
            style={{
              width: "362.34px",
            }}
          >
            It uses advanced financial machine learning concepts and techniques
            to create models that generate predictive trends for crypto assets.
          </p>

          <button className="btn btn-primary py-3 px-4 rounded-0 my-5">
            Go to predictions
          </button>

          <div className="hstack" style={{ width: "440.55px" }}>
            <div className="vstack">
              <h6 className="fw-bolder">30 minutes</h6>
              <p>New analytical result</p>
            </div>

            <div
              className="mx-5"
              style={{
                height: "55px",
                borderLeft: "1px solid black",
              }}
            ></div>
            <div className="vstack">
              <h6 className="fw-bolder">High prediction accuracy</h6>
              <p>A new level AI</p>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <img
            src={HeroPageRectangle}
            alt="hero-rectangle"
            style={{
              padding: "79.2px 63.36px 99px 0",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
