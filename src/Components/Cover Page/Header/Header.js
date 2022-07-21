import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import YantrakaLogo from "./../../../assets cover/YantrakaLogoWhite.svg";

function Header() {
  return (
    <Navbar className="bg-primary py-4" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-white ps-5">
          <div className="d-flex justify-content-center align-items-center">
            <img src={YantrakaLogo} alt="Yantraka-Logo" className="me-2 " />
            <h6 className="d-inline mt-2 fw-bold text-white">YANTRAKA.AI</h6>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto pe-5">
            <Nav.Link className="text-white pe-4" href="#home">
              Products
            </Nav.Link>
            <Nav.Link className="text-white ps-3 pe-4" href="#link">
              Career
            </Nav.Link>
            <Nav.Link className="text-white ps-3 pe-4" href="#news">
              News
            </Nav.Link>
            <Nav.Link className="text-white ps-3" href="#blog">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
