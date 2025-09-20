import React from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section container">
      <h2 className="section-title">CONNECT & COLLABORATE</h2>
      
      <div className="contact-grid">
        {/* Info Panel */}
        <div className="contact-info">
          <h3 className="contact-heading">Want to build something together?</h3>
          <p className="contact-description">
            Whether you have a project idea, want to collaborate, or just want to say hi - 
            I'm always excited to connect with fellow developers and students!
          </p>
          
          {/* Icon Buttons */}
          <div className="contact-buttons">
            <a 
              href="mailto:shreya.srivastava@example.com" 
              className="icon-btn" 
              title="Email Me"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://github.com/shreya" 
              className="icon-btn" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/shreya" 
              className="icon-btn" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="/path-to-your-cv.pdf" 
              className="icon-btn btn-download" 
              download 
              title="Download CV"
            >
              <Download size={24} />
            </a>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="contact-form">
          <div className="form-header">
            <h4>SEND MESSAGE</h4>
          </div>
          
          <form className="contact-form-container" action="mailto:shreya.srivastava@example.com" method="post" encType="text/plain">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" className="btn btn-chat">
              <Mail size={16} />
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
