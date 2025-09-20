import React, { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');

    emailjs.sendForm(
      'service_z6avt04', 
      'template_64nvlpk', 
      formRef.current,
      'QZnAB5fTzj_umgnb6'
    )
    .then(() => {
      setLoading(false);
      setSuccess('Message sent successfully!');
      formRef.current.reset();
    })
    .catch((err) => {
      setLoading(false);
      setSuccess('Failed to send message. Try again.');
      console.error(err);
    });
  };

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
            <a href="mailto:shreeja.srivastava2005@gmail.com" className="icon-btn" title="Email Me">
              <Mail size={24} />
            </a>
            <a href="https://github.com/shreya-1005" className="icon-btn" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shreya-srivastava-780341314/" className="icon-btn" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <div className="form-header">
            <h4>SEND MESSAGE</h4>
          </div>

          <form ref={formRef} className="contact-form-container" onSubmit={handleSubmit}>
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

            <button type="submit" className="btn btn-chat" disabled={loading}>
              <Mail size={16} />
              {loading ? 'SENDING...' : 'SEND MESSAGE'}
            </button>
            {success && <p style={{ marginTop: '1rem', color: 'var(--lime)', fontSize: '0.7rem'}}>{success}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;