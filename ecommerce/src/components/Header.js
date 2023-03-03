import React from "react";
import { Container, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as Icon from "react-bootstrap-icons";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar
        bg=""
        style={{ background: "#FC5185" }}
        variant="dark"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <Image
                className="p-1"
                src="/images/logo.png"
                width={70}
                padding={5}
              ></Image>
              Expert Zone
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <Icon.CartDash />
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/SignUp">
                <Nav.Link>Sign-Up</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
