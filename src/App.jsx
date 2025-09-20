import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/hero.jsx';
import About from './components/About.jsx';
import Projects from './components/projects.jsx';
import Skills from './components/skills.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

const App = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Shreya Srivastava • Built with &lt;3 • PLAYER1 OUT</p>
        </div>
      </footer>
    </div>
  );
};

export default App;