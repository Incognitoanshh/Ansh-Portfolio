import React, { useEffect, useState } from "react";

const AnimatedStats = () => {
  const [projects, setProjects] = useState(0);
  const [skills, setSkills] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    const incrementStats = (setter, target, duration) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < target) {
          setter((prev) => prev + 1);
          count++;
        } else {
          clearInterval(interval);
        }
      }, duration);
    };

    incrementStats(setProjects, 5, 100); // Target: 10 projects, increment every 100 ms
    incrementStats(setSkills, 5, 125); // Target: 8 skills, increment every 125 ms
    incrementStats(setExperience, 2, 300); // Target: 3 years of experience, increment every 300 ms
  }, []);

  const styles = {
    animatedStatsSection: {
      backgroundColor: "rgba(0, 0, 0, 0);",
      padding: "20px",
    },
    sectionHeader: {
      marginBottom: "20px",
      fontSize: "2rem", // Increase font size for better visibility
      textAlign: "center",
      color: "white",
    },
    statsContainer: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap", // Allow items to wrap on smaller screens
    },
    statCard: {
      background:
        "linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 100%)", // White gradient with transparency
      borderRadius: "10px",
      padding: "20px",
      margin: "10px",
      width: "200px", // Fixed width for cards
      textAlign: "center",
      color: "black", // Change text color to black for better contrast
      transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition for hover effect
      animation: "fadeIn 0.5s ease-in", // Fade-in animation
    },
    statCardHover: {
      transform: "scale(1.05)", // Scale effect on hover
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Shadow effect on hover
    },
  };

  return (
    <div style={styles.animatedStatsSection}>
      <h2 style={styles.sectionHeader}>Portfolio Stats</h2>
      <div style={styles.statsContainer}>
        <div style={styles.statCard} className="stat-card">
          <h3>{projects}</h3>
          <p>Projects Completed</p>
        </div>
        <div style={styles.statCard} className="stat-card">
          <h3>{skills}</h3>
          <p>Skills</p>
        </div>
        <div style={styles.statCard} className="stat-card">
          <h3>{experience}</h3>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;
