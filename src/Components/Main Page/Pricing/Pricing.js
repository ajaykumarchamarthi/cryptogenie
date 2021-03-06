import React from "react";

import PriceSkewImg from "../../../assets/Pricing Skewed Img.svg";
import ListStyle from "../../../assets/ListStyle.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Stack from "react-bootstrap/Stack";

import TogeterImg from "../../../assets/Together.svg";

import { pricingData } from "./Data/pricingData";
import TrendPrediction from "../../../assets/Trend Prediction.svg";

import "./Pricing.css";

function Pricing() {
  return (
    <Container
      fluid
      className="d-flex d-flex flex-column justify-content-center px-3 px-sm-5 bg-faded my-5"
      id="pricing"
    >
      <Stack direction="vertical" className="mx-auto mt-5">
        <h1 className="mx-auto my-5 fw-bold">Pricing</h1>
        <p className="mt-4">
          It uses advanced financial machine learning concepts and techniques to
          create models that generate predictive trends for crypto assets.
        </p>
      </Stack>
      <div className="mx-auto mt-5">Monthly plan & Annual</div>

      <Container fluid className="mt-5 mb-5">
        <Row className="d-flex justify-content-between">
          {pricingData.map((item) => {
            return (
              <Col sm={12} md={6} lg={3}>
                <div
                  className="me-5 p-4 pt-3 border b-2 b-dark d-flex flex-column align-items-center w-100 borderHover"
                  style={{
                    height: "504px",
                    lineHeight: "24px",
                  }}
                >
                  <div className="w-100  mt-1 mb-4 p-0 border border-bottom border-dark border-2"></div>
                  <h4 className="fw-bold mb-3">
                    {item.cost}
                    <span className="fw-light fs-5">{item.validity}</span>
                  </h4>
                  <p style={{ marginBottom: "32px" }}>{item.yearOffer}</p>
                  <div
                    className="position-relative"
                    style={{ marginBottom: "32px" }}
                  >
                    <img src={PriceSkewImg} alt="background" />
                    <h6 className="position-absolute top-50 start-50 translate-middle">
                      {item.planName}
                    </h6>
                  </div>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    {item.features.map((feature) => {
                      return (
                        <li className="d-flex mt-3">
                          <img
                            className="me-3  pt-1 align-self-start"
                            src={ListStyle}
                            alt="list-style"
                          />

                          <p className="fw-light">{feature.feature1}</p>
                          <p className="fw-light">{feature.feature2}</p>
                          <p className="fw-light">{feature.feature3}</p>
                        </li>
                      );
                    })}
                  </ul>

                  <button
                    type="button"
                    className="bg-secondary border border-0 px-4 py-3 text-white mt-auto w-100"
                  >
                    {item.action}
                  </button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Container className="my-5">
        <div className="position-relative my-5 p-0">
          <img
            src={TogeterImg}
            alt="togetherImage"
            className="img-fluid w-100"
          />
          <div className="position-absolute top-0 start-50">
            <img
              className="position-relative top-0 start-0 translate-middle"
              src={PriceSkewImg}
              alt="skewImage"
            />
            <h5 className="position-absolute top-0 start-0  translate-middle">
              Together
            </h5>
          </div>

          <h1 className="position-absolute top-0 start-0 text-light p-5 fw-700">
            Invest your money to the CryptoGenie <br /> and earn more money
          </h1>
          <div className="position-absolute top-50 d-flex p-5">
            <button
              type="button"
              className="border border-0 bg-secondary px-4 py-3 text-white"
            >
              Invest to CryptoGenie
            </button>
          </div>
        </div>
      </Container>

      <Container className="my-5">
        <Row>
          <Col sm={12} lg={6} className="d-none d-sm-block">
            <img
              src={TrendPrediction}
              alt="Trend Prediction"
              className="d-flex  justify-content-end"
            />
          </Col>
          <Col
            sm={12}
            lg={6}
            className="d-flex flex-column justify-content-center align-items-start p-2 p-sm-4"
          >
            <h1 className="mb-4">
              Get trend predictions for crypto currencies at 30 min periods.
            </h1>
            <p className="mb-4">
              This will help you discern the trends per each crypto asset.
            </p>
            <button
              type="button"
              className="border border-0 bg-secondary px-4 py-3 text-white w-sm-auto w-100"
            >
              Go to predictions
            </button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Pricing;
