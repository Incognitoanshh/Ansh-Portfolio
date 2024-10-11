import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const About = () => {
  return (
    <Container id="about" className="my-5 text-center about-section">
      <h2>About Me</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <img
            src="/images/ansh.jpg.jpeg" // Your image path
            alt="Amritanshu"
            className="img-fluid rounded-circle shadow mb-4"
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <p>
            Hello! I'm Amritanshu, a passionate web developer studying B.Tech in
            Information Science and Engineering at the Cambridge Institute of
            Technology, Bengaluru. I specialize in creating dynamic web
            applications. .
          </p>
          <a href="/finalresume.pdf" download>
            <button type="button" class="btn btn-primary">
              Resume
            </button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
