import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  
  const fullText = "Building epic experiences with code and creativity.\nCurrently mastering the art of full-stack development.";
  
  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero container">
      <div className="intro">
        <span className="status">ONLINE</span>
        
        <h2>HI, I'M <span className="highlight">SHREYA SRIVASTAVA</span></h2>
        <h3>B.Tech Student</h3>

        <div className="message-box">
          <pre className="typed-text">
            {typedText}<span className="message-box-cursor">|</span>
          </pre>
        </div>

        <div className="buttons">
          <button onClick={handleProjectsClick} className="btn btn-primary">VIEW PROJECTS</button>
          <button onClick={handleContactClick} className="btn btn-secondary">CONTACT ME</button>
        </div>

        <div className="stats-row">
          <div className="card-primary">LEVEL <span>2</span></div>
          <div className="card-secondary">MAJOR • CSE-AI</div>
        </div>
      </div>
      
      <div className="terminal">
        <div className="badge-new">NEW!</div>

        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
          <span className="terminal-title">PLAYER TERMINAL</span>
        </div>

        <div className="terminal-body">
          <div className="avatar">
            <img src="./images/avatar.png" alt="avatar" height="120" width="120" />
          </div>
          <h4 className="player-name">Shreya Srivastava</h4>
        </div>
        
        <div className="stat-row">
          <span className="stat-label">HP</span>
          <div className="bar"><span style={{width:'83%'}} className="hp"></span></div>
          <span className="stat-value">83/100</span>
        </div>

        <div className="stat-row">
          <span className="stat-label">MP</span>
          <div className="bar"><span style={{width:'96%'}} className="mp"></span></div>
          <span className="stat-value">96/100</span>
        </div>

        <div className="stat-row">
          <span className="stat-label">EXP</span>
          <div className="bar"><span style={{width:'70%'}} className="xp"></span></div>
          <span className="stat-value">70/100</span>
        </div>

        <p className="class">Class: B.Tech Student</p>
        <p className="status-ready">STATUS: READY</p>
      </div>
    </section>
  );
};

export default Hero;