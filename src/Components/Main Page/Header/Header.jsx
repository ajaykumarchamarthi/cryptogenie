import React from "react";
import { useHistory } from "react-router-dom";

import Logo from "../../../assets/Logo.svg";
import LogoText from "../../../assets/Logo Text.svg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const history = useHistory();

  return (
    <Navbar bg="white" className="fixed-top">
      <Container fluid className="py-4 px-5">
        <Navbar.Brand
          className="d-flex justify-content-center align-items-center"
          onClick={() => history.replace("/")}
        >
          <img src={Logo} alt="logo" className="mx-1" />
          <img src={LogoText} alt="logo-text" />
        </Navbar.Brand>
        <Nav className="ms-center">
          <Nav.Link href="#home" className="me-5">
            Home
          </Nav.Link>
          <Nav.Link href="#features" className="me-5">
            Features
          </Nav.Link>
          <Nav.Link href="#pricing" className="me-5">
            Pricing
          </Nav.Link>
          <Nav.Link href="#about" className="me-5">
            About
          </Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
        <div className="d-flex gap-3">
          <button
            className="btn d-flex justify-content-center align-items-center py-2 px-4"
            type="button"
            onClick={() => history.replace("/signup")}
          >
            Sign up
          </button>
          <button
            className="btn d-flex justify-content-center align-items-center py-2 px-4"
            type="button"
          >
            Sign in
          </button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
