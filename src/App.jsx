import React from "react";
import "./App.css"; // This should remain in App.jsx
import About from "./components/About";
import Header from "./components/Header";
import Dark from "./components/Dark";
import Contacts from "./components/Contacts";
import Skills from "./components/Skills";
import Achive from "./components/Achive";
import Projects from "./components/Projects";
import AnimatedStats from "./components/AnimatedStats";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Dark />
      <About />
      <Skills />
      <AnimatedStats />
      <Achive />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
