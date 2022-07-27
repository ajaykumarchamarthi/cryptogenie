import React from "react";
import Modal from "react-bootstrap/Modal";

function Contact({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>Contact Us</Modal.Body>
    </Modal>
  );
}

export default Contact;
