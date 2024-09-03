import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Modal from "./components/Modal";

function App() {
  const [showContact, setShowContact] = useState(false);
  const contact = () => {
    setShowContact(!showContact);
    console.log(showContact);
  };

  console.log(window.innerWidth, window.innerHeight);

  return (
    <div className="App pt-[10px]">
      {showContact && (
        <Modal setShowContact={setShowContact} showContact={showContact} />
      )}
      <div className="navigation">
        <Navbar setShowContact={setShowContact} showContact={showContact} />
      </div>
      <div className="introduction">
        <Introduction />
      </div>
      <div className="skills">
        <Skills />
      </div>
      <div className="about-me">
        <AboutMe />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="contact">{/* <Contact /> */}</div>
    </div>
  );
}

export default App;
