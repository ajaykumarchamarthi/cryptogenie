import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { featuresData } from "./Data/featuresData";

import HowItWorks from "../../../assets/How It Works.svg";

import Line from "./../Line/Line";

function Features() {
  return (
    <>
      <Container
        fluid
        id="features"
        style={{ padding: "128px 216px 190px 176px" }}
      >
        <Row>
          <h1 style={{ marginBottom: "114px" }}>Features</h1>
          {featuresData.map((item) => {
            return (
              <Col xs={12} xl={6} className="p-0">
                <div
                  style={{
                    marginRight: "80px",
                    marginBottom: "94px",
                  }}
                >
                  <img
                    className="mb-4"
                    src={item.image}
                    alt={`${item.title} pic`}
                  />
                  <h3 className="mb-3">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container fluid style={{ padding: "90px 174px 128px 176px" }}>
        <Row>
          <div>
            <h1 style={{ marginBottom: "89px" }}>How it works</h1>
            <img src={HowItWorks} alt="How it works" />
          </div>
        </Row>
      </Container>
      <Line />
    </>
  );
}

export default Features;
