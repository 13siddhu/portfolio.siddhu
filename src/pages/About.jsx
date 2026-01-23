import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1>About Me</h1>
        
        <div className="about-content">
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
              I'm a full-stack developer passionate about creating efficient, scalable web applications. 
              With expertise in React, Node.js, and modern web technologies, I transform ideas into 
              functional digital solutions.
            </p>
            
            <h2>My Journey</h2>
            <p>
              Starting my career with a focus on frontend development, I quickly expanded into backend 
              technologies. Today, I work across the full stack, bringing a holistic perspective to every 
              project I undertake.
            </p>
            
            <h2>What I Do</h2>
            <ul className="what-i-do">
              <li>Build responsive, user-friendly web applications</li>
              <li>Design scalable backend systems and APIs</li>
              <li>Optimize performance and improve code quality</li>
              <li>Mentor and collaborate with other developers</li>
            </ul>
            
            <h2>Beyond Code</h2>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or helping others in the developer community. I believe in continuous learning and sharing 
              knowledge.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>2+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
            <div className="stat-card">
              <h3>100%</h3>
              <p>Dedicated</p>
            </div>
          </div>
        </div>

        <div className="education">
          <h2>Education & Certifications</h2>
          <div className="education-items">
            <div className="education-item">
              <h3>Bachelor of Technology</h3>
              <p>Computer Science</p>
              <span className="year">2023 - 2027</span>
            </div>
            <div className="education-item">
              <h3>Web Development Bootcamp</h3>
              <p>Full Stack Development</p>
              <span className="year">2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
