import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faReact,
  faNodeJs,
  faCss3Alt,
  faHtml5,
  faBootstrap,
  faPython,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";

const skillsData = [
  {
    skill: "JavaScript",
    level: "Intermediate",
    icon: (
      <FontAwesomeIcon icon={faReact} size="3x" style={{ color: "#61DAFB" }} />
    ),
  },
  {
    skill: "React",
    level: "Intermediate",
    icon: (
      <FontAwesomeIcon icon={faReact} size="3x" style={{ color: "#61DAFB" }} />
    ),
  },
  {
    skill: "CSS",
    level: "Intermediate",
    icon: (
      <FontAwesomeIcon
        icon={faCss3Alt}
        size="3x"
        style={{ color: "#1572B6" }}
      />
    ),
  },
  {
    skill: "HTML",
    level: "Intermediate",
    icon: (
      <FontAwesomeIcon icon={faHtml5} size="3x" style={{ color: "#E34F26" }} />
    ),
  },
  {
    skill: "Bootstrap",
    level: "Intermediate",
    icon: (
      <FontAwesomeIcon
        icon={faBootstrap}
        size="3x"
        style={{ color: "#563D7C" }}
      />
    ),
  },
  {
    skill: "Node.js",
    level: "Intermediate",
    icon: (
      <FontAwesomeIcon icon={faNodeJs} size="3x" style={{ color: "#8CC84B" }} />
    ),
  },
  {
    skill: "Java",
    level: "Intermediate",
    icon: (
      <FontAwesomeIcon icon={faJava} size="3x" style={{ color: "#007396" }} />
    ),
  },
  {
    skill: "Python",
    level: "Intermediate",
    icon: (
      <FontAwesomeIcon icon={faPython} size="3x" style={{ color: "#007396" }} />
    ),
  },
  {
    skill: "Linux",
    level: "Intermediate",
    icon: (
      <FontAwesomeIcon icon={faLinux} size="3x" style={{ color: "#007396" }} />
    ),
  },
];

const Skills = () => {
  return (
    <div id="skills" className="my-5 text-center">
      <h2 className="section-header" style={{ color: "white" }}>
        My Skills
      </h2>
      <Row>
        {skillsData.map((item, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card className="skill-card">
              <Card.Body className="text-center">
                <div className="icon-container">{item.icon}</div>
                <Card.Title style={{ color: "black" }}>{item.skill}</Card.Title>
                <Card.Text style={{ color: "black" }}>{item.level}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <style jsx>{`
        .skill-card {
          border: none;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          background: linear-gradient(145deg, #ffffff, #e6e6e6);
        }

        .skill-card:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .icon-container {
          margin-bottom: 10px;
          transition: transform 0.3s;
        }

        .icon-container:hover {
          transform: rotate(10deg);
        }
      `}</style>
    </div>
  );
};

export default Skills;
