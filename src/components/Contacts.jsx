import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
  faFacebook,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <Container id="contact" className="my-5 text-center contact-section">
      <h2 className="text-white">Contact Me</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <div className="social-icons">
            <a
              href="https://github.com/Incognitoanshh"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="social-icon"
              />
            </a>
            <a
              href="https://linkedin.com/in/amritanshu1403"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="social-icon"
              />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="2x"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/__annnshh__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="2x"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.facebook.com/home.php"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="2x"
                className="social-icon"
              />
            </a>
            <a
              href="https://discord.gg/VEnJKeQa"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <FontAwesomeIcon
                icon={faDiscord}
                size="2x"
                className="social-icon"
              />
            </a>
          </div>
        </Col>
      </Row>
      <style jsx>{`
        .social-icons {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .social-icon {
          color: white; /* Default icon color */
          transition: transform 0.2s, color 0.2s; /* Animation for hover effect */
        }
        .social-icon:hover {
          transform: scale(1.2); /* Scale effect on hover */
          color: inherit; /* Use original color */
        }
        a:hover .fa-github {
          color: #181717;
        }
        a:hover .fa-linkedin {
          color: #0077b5;
        }
        a:hover .fa-twitter {
          color: #1da1f2;
        }
        a:hover .fa-instagram {
          color: #e1306c;
        }
        a:hover .fa-facebook {
          color: #3b5998;
        }
        a:hover .fa-discord {
          color: #7289da;
        }
      `}</style>
    </Container>
  );
};

export default Contact;
