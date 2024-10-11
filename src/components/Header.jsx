import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow fixed-top">
      <Container>
        <Navbar.Brand href="#about">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="nav-link"
              activeClass="active"
              style={{ cursor: "pointer" }}
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="nav-link"
              activeClass="active"
              style={{ cursor: "pointer" }}
            >
              Skills
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
              activeClass="active"
              style={{ cursor: "pointer" }}
            >
              Stats
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="nav-link"
              activeClass="active"
              style={{ cursor: "pointer" }}
            >
              Achievements
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="nav-link"
              activeClass="active"
              style={{ cursor: "pointer" }}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-link"
              activeClass="active"
              style={{ cursor: "pointer" }}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
