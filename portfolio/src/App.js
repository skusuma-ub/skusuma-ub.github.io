import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import About from "./components/About/About.js";
import Summary from "./components/Summary/Summary.js"
import Skills from "./components/Skills/Skills.js";
import Experience from "./components/Experience/Experience.js";

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');



  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme])

  useEffect(() => {
    const observer = new IntersectionObserver((entries, options) => {
      entries.forEach(entry =>{
        entry.target.classList.toggle('visible', entry.isIntersecting)
      });
    });
    observer.observe(document.querySelector('div.skills-container'));
    observer.observe(document.querySelector('div.about'));
    observer.observe(document.querySelector('div.aboutimg'));
    observer.observe(document.querySelector('section#experience'));
  },[])

  return (
    <div className={`container${theme}`} >
      <Navbar theme={theme} setTheme={setTheme} />
      <About />
      <Summary />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
