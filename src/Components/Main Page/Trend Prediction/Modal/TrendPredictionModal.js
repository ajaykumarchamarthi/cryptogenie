import React from "react";
import Modal from "react-bootstrap/Modal";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProgressBar from "react-bootstrap/ProgressBar";

import Piechart from "../Individul Prediction/Chart/Piechart";
import { predictedStats } from "../Data/predictionData";

function TrendPredictionModal({ show, handleClose, coinData }) {
  console.log(predictedStats[0]);

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Container className="p-4">
        <Row>
          <Col>
            {coinData.map((item) => (
              <div className="mx-2 d-flex flex-column flex-sm-row align-items-center">
                <div className="d-flex">
                  <div className="d-flex">
                    <img src={item.bitcoinImg} alt="Bitcoin" />
                    <h3 className="ms-3">{item.bitcoinName}</h3>
                  </div>

                  <div
                    className="mx-4"
                    style={{
                      height: "48x",
                      borderLeft: "1px solid #B7C3CE",
                    }}
                  ></div>

                  <div className="d-flex">
                    <img src={item.tetherImg} alt="Tether" />
                    <h3 className="ms-3">{item.tetherName}</h3>
                  </div>
                </div>
                <div className="my-3 my-sm-0">
                  <p className="ms-4 my-0 px-3 py-2  text-primary fw-bold">
                    {item.coinName}
                  </p>
                </div>
              </div>
            ))}
          </Col>
        </Row>

        <Row>
          <Col className="mt-5">
            <div className="d-flex justify-content-center justify-content-sm-start">
              <p>{predictedStats[0].title}</p>
              <ProgressBar
                max={`${predictedStats[0].max}`}
                now={`${predictedStats[0].val}`}
                min={0}
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex flex-column flex-sm-row align-items-center justify-content-sm-between ">
            <div>
              <h6 className="text-muted">{predictedStats[1].title}</h6>
              <h3>$49.8K</h3>
            </div>
            <div>
              <h6 className="text-muted">{predictedStats[2].title}</h6>
              <h3>$49.8K</h3>
            </div>
            <div>
              <h6 className="text-muted">{predictedStats[3].title}</h6>
              <h3>$49.8K</h3>
            </div>
            <div>
              <h6 className="text-muted">{predictedStats[4].title}</h6>
              <h3>$49.8K</h3>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <div className="d-flex flex-column flex-sm-row justify-content-between">
              <div className="mx-auto">
                <Piechart
                  title={predictedStats[1].title}
                  val={predictedStats[1].val}
                />
              </div>

              <div className="mx-auto">
                <Piechart
                  title={predictedStats[2].title}
                  val={predictedStats[2].val}
                />
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between my-5">
              <div className="mx-auto">
                <Piechart
                  title={predictedStats[3].title}
                  val={predictedStats[3].val}
                />
              </div>

              <div className="mx-auto">
                <Piechart
                  title={predictedStats[4].title}
                  val={predictedStats[4].val}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
}

export default TrendPredictionModal;
