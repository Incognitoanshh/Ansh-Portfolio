import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faClipboardCheck,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

const projectsData = [
  {
    title: "Sentiment Analysis",
    description:
      "Analyzes emotional tone using NLP, classifying text as positive, negative, or neutral.",
    technology: "Python",
    icon: (
      <FontAwesomeIcon
        icon={faClipboardCheck}
        size="3x"
        style={{ color: "#3C8DBC" }}
      />
    ),
    downloadLink: "/public/Sentimental-Analysis-main.zip",
  },
  {
    title: "Pinterest Automation with Selenium",
    description:
      "Automates Pinterest activities and scraping for efficient data collection.",
    technology: "Python",
    icon: (
      <FontAwesomeIcon icon={faTasks} size="3x" style={{ color: "#FF7F50" }} />
    ),
    downloadLink: "/public/Pinterest-Selenium-testing-main.zip",
  },
  {
    title: "Credit Card Scraper",
    description:
      "Extracts credit card information from specified online sources for educational purposes.",
    technology: "Python",
    icon: (
      <FontAwesomeIcon icon={faCode} size="3x" style={{ color: "#FFD700" }} />
    ),
    downloadLink: "/public/CC-Scrappers-main.zip",
  },
  {
    title: "IMDb Clone",
    description:
      "An IMDb clone app that allows users to browse and discover trending movies, complete with detailed movie cards and a responsive design.",
    technology: "React.js",
    icon: (
      <FontAwesomeIcon
        icon={faClipboardCheck}
        size="3x"
        style={{ color: "#FFD700" }}
      />
    ),
    downloadLink: "/public/imdb_clone_movie-main.zip",
  },
  {
    title: "To-Do List Application",
    description:
      "A simple app to manage tasks efficiently, allowing you to add, delete, and mark tasks as completed.",
    technology: "JavaScript",
    icon: (
      <FontAwesomeIcon icon={faTasks} size="3x" style={{ color: "#32CD32" }} />
    ),
    downloadLink: "/public/to-do-list-main.zip",
  },
  {
    title: "Instagram Automation Master",
    description:
      "Automates posting, engagement, and data scraping on Instagram.",
    technology: "Python",
    icon: (
      <FontAwesomeIcon
        icon={faClipboardCheck}
        size="3x"
        style={{ color: "#E1306C" }}
      />
    ),
    downloadLink: "/public/Instagram-automation-main.zip",
  },
];

const Projects = () => {
  const handleDownload = (link) => {
    // Navigate to the download link
    window.location.href = link;
  };

  return (
    <Container id="projects" className="my-5">
      <h2 className="section-header text-center" style={{ color: "white" }}>
        My Projects
      </h2>
      <Table
        striped
        bordered
        hover
        responsive
        style={{ fontSize: "1.2rem", width: "100%" }}
      >
        <thead>
          <tr>
            <th style={{ width: "10%" }}></th>
            <th style={{ width: "25%" }}>Project Title</th>
            <th style={{ width: "40%" }}>Description</th>
            <th style={{ width: "15%" }}>Technology</th>
            <th style={{ width: "10%" }}>Download</th>
          </tr>
        </thead>
        <tbody>
          {projectsData.map((project, index) => (
            <tr key={index}>
              <td className="text-center">{project.icon}</td>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>{project.technology}</td>
              <td className="text-center">
                <Button
                  variant="primary"
                  onClick={() => handleDownload(project.downloadLink)}
                  aria-label={`Download ${project.title}`}
                >
                  Download
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <style jsx>{`
        .table th,
        .table td {
          vertical-align: middle; /* Center the content */
        }
        .table th {
          background-color: rgba(0, 123, 255, 0.1); /* Light blue for header */
        }
        .table {
          border-radius: 15px;
          overflow: hidden;
        }
        .table td {
          transition: transform 0.2s;
        }
        .table td:hover {
          transform: scale(1.05);
        }
      `}</style>
    </Container>
  );
};

export default Projects;
