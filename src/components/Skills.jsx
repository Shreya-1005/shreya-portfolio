import React from 'react';

const Skills = () => {
  const skills = [
    "C++", "Python", "R", "HTML", "CSS", "JavaScript", "React.js", "SQL", 
    "Bootstrap", "Git", "GitHub", "Jupyter", "Google Colab", "Kaggle", 
    "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "OpenCV"
  ];

  return (
    <section id="skills" className="skills-section container">
      <h2 className="section-title">SKILL TREE</h2>
      
      <div className="skills-intro">
        <p>My skills include:</p>
      </div>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;