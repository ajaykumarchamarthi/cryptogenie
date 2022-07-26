import React from "react";
import { useHistory } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";

import Logo from "../../../assets/Logo.svg";
import LogoText from "../../../assets/Logo Text.svg";
import Avatar from "../../../assets/Avatar.svg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Dropdown from "react-bootstrap/Dropdown";

function Header() {
  const history = useHistory();

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  console.log(isAuthenticated);

  return (
    <Navbar bg="background-white" style={{ height: "88px" }}>
      <Container fluid className="py-4 px-5">
        <Navbar.Brand
          href="#home"
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
        {!isAuthenticated && (
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
              onClick={() => loginWithRedirect()}
            >
              Sign in
            </button>
          </div>
        )}
        {isAuthenticated && (
          <Dropdown className="px-2 py-1 border border-0">
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              {user?.picture ? (
                <img
                  src={user.picture}
                  alt="Profile Avatar"
                  height={24}
                  className="rounded-circle me-md-2"
                />
              ) : (
                <img
                  src={Avatar}
                  alt="Profile Avatar"
                  height={24}
                  className="me-md-2"
                />
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;
