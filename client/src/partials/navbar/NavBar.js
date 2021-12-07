import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo_mynumea.png";
import "./navbar.css";
const NavBar = () => {
  const [expand, setExpand] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
  <Container>
  <Navbar.Brand href="/">
      <img src={logo} className="img-responsive" alt="logo" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
      <Nav.Link href="/cartridges" className="linkCartridges">Micronutriments</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  );
};

export default NavBar;
