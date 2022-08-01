import React from "react";

import Bitcoin from "./assets/Bitcoin.svg";
import Tether from "./assets/Tether.svg";
import Up from "./assets/Up.svg";
import Correct from "./assets/Correct.svg";

import "./TrendPrediction.css";

function TrendPrediction() {
  return (
    <section className="my-5 p-5">
      <div className="my-5 d-flex justify-content-between">
        <h3>Trend Predictions</h3>
        <h3>Filter</h3>
      </div>

      <div className="predictContainer p-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex">
              <img src={Bitcoin} alt="Bitcoin" className="me-3" />
              <h3>Bitcoin</h3>
            </div>

            <div
              className="mx-3 mx-lg-5"
              style={{
                height: "35px",
                borderLeft: "1px solid black",
              }}
            ></div>

            <div className="d-flex">
              <img src={Tether} alt="Tether" />
              <h3>Tether</h3>
            </div>
            <h4 className="text-primary bg-white py-2 px-3 ms-4">BTCUSDT</h4>
          </div>
          <div>
            <h3>Next Prediction</h3>
          </div>
        </div>

        <div>
          <p>Last 30 days</p>
        </div>

        <div>
          <div className="resultCard d-flex flex-column justify-content-center align-items-center p-3">
            <div>
              <p>06.00 AM - 06.30 AM</p>
              <hr />
            </div>
            <div className="d-flex flex-column jusify-content-between align-items-center">
              <img src={Up} alt="Up" />
              <h3>Up</h3>
              <p>36591.63 USDT</p>
            </div>
            <div className="d-flex justify-content-center align-items-center border border-1 py-2 w-100">
              <img className="d-inline-block" src={Correct} alt="correct" />
              <h6>Correct</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendPrediction;
