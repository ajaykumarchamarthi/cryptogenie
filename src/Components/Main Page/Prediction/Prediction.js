import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useHistory } from "react-router-dom";

import Bitcoin from "./assets/Bitcoin.svg";
import Tether from "./assets/Tether.svg";
import Trade from "./assets/Trade.svg";

import BackwardArrow from "./assets/Backward Arrow.svg";

function Prediction() {
  const history = useHistory();

  return (
    <section className="p-2 p-sm-5 my-5">
      <Container fluid className="my-5">
        <div className="d-flex align-items-center my-3">
          <img
            src={BackwardArrow}
            alt="Back"
            onClick={() => history.replace("/trendprediction")}
            className="P-2"
          />
          <h6 className="my-0 ms-2">Trend Prediction</h6>
        </div>

        <Row>
          <div className="my-4">
            <div className="d-flex align-items-center">
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <img src={Bitcoin} alt="Bitcoin" />
                  <p className="my-0 ms-3">Bitcoin</p>
                </div>

                <div
                  className="mx-3"
                  style={{
                    height: "48x",
                    borderLeft: "1px solid #B7C3CE",
                  }}
                ></div>

                <div className="d-flex align-items-center">
                  <img src={Tether} alt="Tether" />
                  <p className="my-0 ms-3">Tether</p>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <p className="text-primary fw-bold my-0">BTCUSDT</p>
                <button
                  type="button"
                  className="text-white bg-primary text-decoration-none border border-0 px-3 py-2"
                >
                  <img src={Trade} alt="Trade" className="p-1 bg-white" /> Trade
                </button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Prediction;
