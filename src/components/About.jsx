import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('edu');

  return (
    <section id="about" className="about container">
      <div className="dashboard-container">
        
        {/* Player Profile Panel */}
        <div className="player-profile-panel">
          <div className="player-profile-header">
            <h3>PLAYER PROFILE</h3>
          </div>
          <div className="player-avatar">
            <div className="avatar-frame">
              <img src="./images/about.jpg" alt="Shreya Avatar" />
            </div>
          </div>
          <div className="player-info">
            <h2 className="player-about-name">SHREYA SRIVASTAVA</h2>
          </div>
        </div>

        {/* Player Message Panel */}
        <div className="personal-message">
          <div className="message-header">
            <span>PLAYER MESSAGE</span>
          </div>
          <div className="message-content">
            <p>Hey!</p>
            <p>I'm a sophomore in B.Tech – Computer Science & AI. I love building things with code, whether it's a sleek web app, a small AI model, or a fun interactive experience.</p>
            <p>I enjoy solving problems creatively, learning from projects and hackathons, and collaborating with others who are just as passionate about technology.</p>
            <p>When I'm not coding, I'm exploring new tools, experimenting with UI/UX designs, or just vibing to some lo-fi beats while planning my next project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;