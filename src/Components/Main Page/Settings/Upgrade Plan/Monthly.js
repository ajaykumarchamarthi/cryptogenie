import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { monthlyPricingData } from "./Data/MonthlyPricingData";

import PriceSkewImg from "../../../../assets/Pricing Skewed Img.svg";
import ListStyle from "../../../../assets/ListStyle.svg";
import { pricingData } from "../../Pricing/Data/pricingData";

function Monthly() {
  return (
    <Container fluid>
      <Row>
        {monthlyPricingData.map((item) => {
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
  );
}

export default Monthly;
