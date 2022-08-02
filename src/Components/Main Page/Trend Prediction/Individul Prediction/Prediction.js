import React, { useState } from "react";
import "./Prediction.css";

import Bitcoin from "../assets/Bitcoin.svg";
import Tether from "../assets/Tether.svg";

import SandTime from "../assets/Sandtime.svg";
import Arrow from "../assets/Arrow.svg";

import ProgressBar from "react-bootstrap/ProgressBar";
import Piechart from "./Chart/Piechart";

import predictionData from "../Data/predictionData";

import TrendPredictionModal from "../Modal/TrendPredictionModal";

import { useHistory } from "react-router-dom";

function Prediction() {
  const [show, setShow] = useState(false);

  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log("Modal Triggered", show);

  const coinData = [
    {
      bitcoinImg: Bitcoin,
      bitcoinName: "Bitcoin",
      tetherImg: Tether,
      tetherName: "Tether",
      coinName: "BTCUSDT",
    },
  ];

  return (
    <>
      <div className="predictContainer p-4 my-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mx-auto mx-sm-0">
            <div className="d-flex">
              <div className="d-flex">
                <div className="d-flex">
                  <img src={Bitcoin} alt="Bitcoin" className="me-3" />
                  <h3>Bitcoin</h3>
                </div>

                <div
                  className="mx-3"
                  style={{
                    height: "48x",
                    borderLeft: "1px solid black",
                  }}
                ></div>

                <div className="d-flex">
                  <img src={Tether} alt="Tether" className="me-3" />
                  <h3>Tether</h3>
                </div>
              </div>
            </div>

            <h4 className="text-primary bg-white py-2 px-3 ms-4 my-3 my-sm-0 text-align-center">
              BTCUSDT
            </h4>
          </div>

          <div className="d-none d-sm-block">
            <div className="d-flex justify-content-center align">
              <div className="d-flex justify-content-center align-items-center">
                <img src={SandTime} alt="Sand Time" />
                <h6 className="my-0 ms-3">Next Prediction</h6>
                <h6 className="my-0 ms-3">14 : 48</h6>
              </div>

              <div className="ms-5 py-2 px-3 border border-1 border-primary">
                <img
                  src={Arrow}
                  alt="Next"
                  onClick={() => history.replace("/prediction")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center my-4 overflow">
          <div>
            <h6 className="my-0">Last</h6>
            <h6 className="my-0">30 days</h6>
          </div>

          <div className="ms-4">
            <p className="text-muted my-0">
              Correct prediction: <span className="text-primary">235</span> /
              477
            </p>
            <ProgressBar now={235} min={0} max={477} />
          </div>

          <div className="d-flex justify-content-between ms-5">
            <Piechart title="Accuracy" val="176" />
            <div
              style={{
                height: "48x",
                borderLeft: "1px solid #B7C3CE",
              }}
            ></div>
            <Piechart title="F1 Score" val="183" />
            <div
              style={{
                height: "48x",
                borderLeft: "1px solid #B7C3CE",
              }}
            ></div>
            <Piechart title="Precision" val="145" />
            <div
              style={{
                height: "48x",
                borderLeft: "1px solid #B7C3CE",
              }}
            ></div>
            <Piechart title="Recall" val="196" />
            <div
              style={{
                height: "48x",
                borderLeft: "1px solid #B7C3CE",
              }}
            ></div>
            <Piechart title="Capacity" val="198" />
          </div>
          <div onClick={handleShow}>
            <h5 className="p-2 fw-bold">+7</h5>
          </div>
          {show && (
            <TrendPredictionModal
              coinData={coinData}
              handleClose={handleClose}
              show={show}
            />
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center overflow">
          {predictionData.map((data, index, arr) => {
            if (arr.length - 1 === index) {
              return (
                <div
                  className="lastResultCard d-flex flex-column justify-content-center align-items-center p-3"
                  onClick={handleShow}
                >
                  <div>
                    <p>{data.time}</p>
                    <hr />
                  </div>

                  <div className="d-flex flex-column jusify-content-between align-items-center">
                    <img
                      className="my-4"
                      src={data.predictedImg}
                      alt={data.predictedImg}
                    />
                    <h5>{data.predictedText}</h5>
                    <p className="text-muted">{data.rate} USDT</p>
                  </div>

                  <div className="result d-flex justify-content-center align-items-center border border-1 p-2 w-100">
                    <p className="text-primary my-0 fw-bold">
                      {data.rate} USDT
                    </p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="resultCard d-flex flex-column justify-content-center align-items-center p-3">
                  <div>
                    <p>{data.time}</p>
                    <hr />
                  </div>

                  <div className="d-flex flex-column jusify-content-between align-items-center">
                    <img
                      className="my-4"
                      src={data.predictedImg}
                      alt={data.predictedImg}
                    />
                    <h5>{data.predictedText}</h5>
                    <p className="text-muted">{data.rate} USDT</p>
                  </div>

                  <div className="result d-flex justify-content-center align-items-center border border-1 py-2 w-100">
                    <img
                      className="d-inline-block me-3"
                      src={data.predictedResultImg}
                      alt={data.predictedResultImg}
                    />
                    <h6 className="my-0">{data.predictedResultText}</h6>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="p-3 d-block d-sm-none">
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-center align-items-center">
              <img src={SandTime} alt="Sand Time" />
              <h6 className="my-0 ms-3">Next Prediction</h6>
              <h6 className="my-0 ms-3">14 : 48</h6>
            </div>

            <div className="ms-5 py-2 px-3 border border-1 border-primary">
              <img src={Arrow} alt="Next" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prediction;
