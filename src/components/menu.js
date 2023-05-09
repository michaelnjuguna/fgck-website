import * as React from "react";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container,Nav } from "react-bootstrap";



export default function Menu() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="text-light">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/services">Services</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/give">Give</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
