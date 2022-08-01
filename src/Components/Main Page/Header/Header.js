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
    <Navbar bg="white" className="fixed-top" expand="md">
      <Container fluid className="py-4 px-5 d-flex d-flex">
        <Navbar.Brand
          className="d-flex justify-content-center align-items-center order-2 order-md-1 mx-auto mx-md-0"
          onClick={() => history.replace("/")}
        >
          <img src={Logo} alt="logo" className="mx-1" />
          <img src={LogoText} alt="logo-text" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="order-1 order-md-2">
          <Nav className="mx-auto">
            <Nav.Link className="me-md-3 me-lg-5">Home</Nav.Link>
            <Nav.Link href="#features" className="me-md-3 me-lg-5">
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="me-md-3 me-lg-5">
              Pricing
            </Nav.Link>
            <Nav.Link href="#about" className="me-md-3 me-lg-5">
              About
            </Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="ms-auto order-3 d-none d-md-block">
          {!isAuthenticated && (
            <div className="d-flex gap-3">
              <button
                className="btn d-flex justify-content-center align-items-center py-2 px-3 px-lg-4"
                type="button"
                onClick={() => history.replace("/signup")}
              >
                Sign up
              </button>
              <button
                className="btn d-flex justify-content-center align-items-center py-2 px-3 px-lg-4"
                type="button"
                onClick={() => loginWithRedirect()}
              >
                Sign in
              </button>
            </div>
          )}
          {isAuthenticated && (
            <Dropdown className="p-1 border border-0 d-flex justify-content-center align-items-center">
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                {user?.picture ? (
                  <img
                    src={user.picture}
                    alt="Profile Avatar"
                    height={24}
                    width={24}
                    className="rounded-circle me-md-2"
                  />
                ) : (
                  <img
                    src={Avatar}
                    alt="Profile Avatar"
                    height={24}
                    width={24}
                    className="me-md-2"
                  />
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => history.push("/settings")}>
                  Settings
                </Dropdown.Item>
                <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
        <div className="ms-auto order-3 d-block d-md-none">
          <Dropdown className="p-1 border border-0 d-flex justify-content-center align-items-center">
            <Dropdown.Toggle variant="white" id="dropdown-basic">
              {user?.picture ? (
                <img
                  src={user.picture}
                  alt="Profile Avatar"
                  height={24}
                  width={24}
                  className="rounded-circle me-md-2"
                />
              ) : (
                <img
                  src={Avatar}
                  alt="Profile Avatar"
                  height={24}
                  width={24}
                  className="me-md-2"
                />
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => history.push("/settings")}>
                Settings
              </Dropdown.Item>
              <Dropdown.Item onClick={() => logout()}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
