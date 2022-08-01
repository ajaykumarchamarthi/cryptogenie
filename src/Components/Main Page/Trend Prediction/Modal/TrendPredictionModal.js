import React from "react";
import Modal from "react-bootstrap/Modal";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TrendPredictionModal({ show, handleClose }) {
  console.log("Modal Worked");
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Container>
        <Row>
          <Col>
            <div>
                <div>
                    Bitcoin
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
}

export default TrendPredictionModal;
