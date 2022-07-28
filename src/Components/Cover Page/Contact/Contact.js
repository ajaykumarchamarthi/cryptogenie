import React from "react";
import Modal from "react-bootstrap/Modal";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import CGLogoColor from "../../../assets cover/CryptoGenieColorLogo.svg";
import Map from "../../../assets cover/ContactUsMap.svg";
import MapMobile from "../../../assets cover/ContactUsMapMobile.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact({ show, handleClose }) {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name"),
    lastName: Yup.string().required("Last Name"),
    email: Yup.string().email("Email Invalid").required("Email"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Modal show={show} onHide={handleClose} size="xl" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Container fluid className="p-3">
          <Row>
            <Col md={5}>
              <div className="d-none d-md-flex">
                <img
                  src={CGLogoColor}
                  className="d-inline-block me-md-1"
                  alt="cryptogenieLogo"
                />
                <h3>CryptoGenie</h3>
              </div>
              <p className="d-none d-md-block my-4">
                Get smarter about understanding crypto assets. Gain an edge over
                other investors.
              </p>
              <img
                src={Map}
                className="img-fluid d-none d-md-block w-100"
                alt="Map Large Screen"
              />
            </Col>
            <Col md={7}>
              <h3>Contact us</h3>
              <img
                src={MapMobile}
                className="img-fluid d-md-none w-100"
                alt="Map Small Screen"
              />
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <div className="mb-3 d-md-flex justify-content-between">
                    <div className="mt-3 mt-md-0">
                      <ErrorMessage
                        component="small"
                        className="my-1 text-danger d-block"
                        name="firstName"
                      />
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        className="form-control p-3 w-100"
                      />
                    </div>
                    <div className="mt-3 mt-md-0 ms-md-3">
                      <ErrorMessage
                        component="small"
                        className="my-1 text-danger d-block"
                        name="lastName"
                      />
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        className="form-control p-3 w-100"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <ErrorMessage
                      component="small"
                      className="my-1 text-danger d-block"
                      name="email"
                    />
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control p-3"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn border border-0 rounded-0 text-white bg-primary w-100 py-3"
                  >
                    Send
                  </button>
                </Form>
              </Formik>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Contact;
