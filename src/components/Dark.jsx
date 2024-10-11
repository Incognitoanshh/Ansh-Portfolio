import React, { useState, useEffect } from "react";

const Dark = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="dark-mode-toggle">
      <button onClick={() => setDarkMode(!darkMode)} className="btn btn-light">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Dark;
