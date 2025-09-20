import React, { useRef, useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SnapNCook",
      tech: "Python • FastAPI • Yolo • Gemini",
      description:
        "Just snap a photo of your fridge or kitchen items and our custom-trained YOLOv11 model detects ingredients, and we suggest recipes based on what’s available.",
      status: "COMPLETED",
      color: "#3cff6b",
      link: "https://github.com/Twizzera/snapncook",
    },
    {
      title: "MediMate",
      tech: "React.js • MongoDB • Tailwind • Gemini • OpenStreetMap",
      description:
        "MediMate is an AI-powered medical assistant that helps users check symptoms, get guidance, and navigate their health journey through a friendly chatbot interface.",
      status: "COMPLETED",
      color: "#3cff6b",
      link: "https://github.com/The-hack-imperium/mediMate",
    },
    {
      title: "Portfolio",
      tech: "React.js • Tailwind CSS • CSS Animations • Lucide Icons",
      description: "My personal portfolio website showcasing my projects, skills, and contact information, designed with interactive UI elements and smooth animations.",
      status: "COMPLETED",
      color: "#3cff6b",
      link: "https://github.com/Shreya-1005/ShreyaOS",
    },
    {
      title: "Fake News Detection",
      tech: "Python • Streamlit",
      description:
        "An AI-powered solution to detect fake news using machine learning and NLP techniques.",
      status: "ON-GOING",
      color: "#ffd400",
      link: "https://github.com/Shreya-1005/Fake-News-Detection",
    },
  ];

  const containerRef = useRef(null);

  return (
    <section id="projects" className="projects-section container">
      <h2 className="section-title">MISSION LOGS</h2>

      <div className="projects-scroll" ref={containerRef}>
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <div className="project-header">
              <div
                className="project-status-dot"
                style={{ backgroundColor: project.color }}
              ></div>
              <span className="project-status">{project.status}</span>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-tech">{project.tech}</p>
            <p className="project-description">{project.description}</p>

            {project.link && (
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={12} />
                VIEW PROJECT
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
