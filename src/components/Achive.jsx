import React from "react";

const Achive = () => {
  return (
    <div className="achievements-section">
      <h2
        style={{ color: "white", textAlign: "center" }}
        className="section-header"
      >
        Achievements
      </h2>

      <table className="table table-striped achive-table">
        <thead className="thead-dark">
          <tr>
            <th></th>
            <th>Achievement</th>
            <th>Details</th>
            <th>Certificate Link</th>
          </tr>
        </thead>
        <tbody>
          {/* Built NLP Solution at Microsoft */}
          <tr className="achievement-row">
            <td>
              <img
                src="/images/download.png" // Placeholder for Microsoft Logo
                alt="Microsoft Logo"
                className="achievement-logo"
                width="50" // Adjust size as needed
              />
            </td>
            <td>🏆 Build a Natural Language Processing Solution</td>
            <td>Built an NLP solution using Azure AI Language at Microsoft</td>
            <td>
              <a
                href="/Nlp.pdf" // Link to the NLP Certificate PDF
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link certificate-link"
              >
                View Certificate
              </a>
            </td>
          </tr>

          {/* Infosys Certificate */}
          <tr className="achievement-row">
            <td>
              <img
                src="/images/download.jpeg" // Placeholder for Infosys Logo
                alt="Infosys Logo"
                className="achievement-logo"
                width="50" // Adjust size as needed
              />
            </td>
            <td>🔍 Infosys: Exploratory Data Analysis</td>
            <td>Performed advanced Exploratory Data Analysis at Infosys</td>
            <td>
              <a
                href="/amritanshucertificate.pdf" // Link to Infosys Certificate PDF
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link certificate-link"
              >
                View Certificate
              </a>
            </td>
          </tr>

          {/* Microsoft Certified: Azure Fundamentals */}
          <tr className="achievement-row">
            <td>
              <img
                src="/images/Microsoft_Azure.svg.png" // Placeholder for Azure Logo
                alt="Azure Fundamentals"
                className="achievement-logo"
                width="50" // Adjust size as needed
              />
            </td>
            <td>🎓 Microsoft Certified: Azure Fundamentals</td>
            <td>Certified by Microsoft for Azure Fundamentals</td>
            <td>
              <a
                href="/Microsofr Azure.pdf" // Link to the Azure Fundamentals Certificate PDF
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link certificate-link"
              >
                View Certificate
              </a>
            </td>
          </tr>

          {/* Microsoft Certified: Azure AI Fundamentals */}
          <tr className="achievement-row">
            <td>
              <img
                src="/images/Microsoft_Azure.svg.png" // Placeholder for Azure AI Logo
                alt="Azure AI Fundamentals"
                className="achievement-logo"
                width="50" // Adjust size as needed
              />
            </td>
            <td>🎓 Microsoft Certified: Azure AI Fundamentals</td>
            <td>Certified by Microsoft for Azure AI Fundamentals</td>
            <td>
              <a
                href="/Microsoft AI F.pdf" // Link to the Azure AI Fundamentals Certificate PDF
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link certificate-link"
              >
                View Certificate
              </a>
            </td>
          </tr>

          {/* ReactJS by Scaler */}
          <tr className="achievement-row">
            <td>
              <img
                src="/images/react_logo.png" // Path to the React Logo
                alt="React Logo"
                className="achievement-logo"
                width="50" // Adjust size as needed
              />
            </td>
            <td>⚛️ ReactJS Certification by Scaler</td>
            <td>Completed ReactJS course from Scaler.</td>
            <td>
              <a
                href="/reactjs.pdf" // Link to the ReactJS Certificate PDF
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-link certificate-link"
              >
                View Certificate
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Achive;
