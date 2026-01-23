import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Siddhartha</h1>
          <p className="tagline">Full Stack Developer | React Specialist | Problem Solver</p>
          <p className="description">
            I build modern web applications with React, Node.js, and cutting-edge technologies.
            Passionate about creating efficient, scalable solutions.
          </p>
          
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="placeholder-avatar">👨‍💻</div>
        </div>
      </div>

      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Wyre</h3>
            <p>A full-stack ecommerce platform with product catalog, shopping cart, and order management.</p>
            <a href="https://wyre-pi.vercel.app" target="_blank" rel="noopener noreferrer">Live Link</a>
          </div>
          
          <div className="project-card">
            <h3>VirtuSync</h3>
            <p>Real-time video calling and chat application built with modern web technologies.</p>
            <a href="https://virtusync.onrender.com" target="_blank" rel="noopener noreferrer">Live Link</a>
          </div>
          
          <div className="project-card">
            <h3>EasyServ</h3>
            <p>Service booking platform with integrated payment and notification system.</p>
            <a href="https://easyserv.netlify.app" target="_blank" rel="noopener noreferrer">Live Link</a>
          </div>
        </div>
        
        <div className="view-all">
          <Link to="/projects" className="btn btn-outline">
            View All Projects
          </Link>
        </div>
      </section>

      <section className="skills">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Java</li>
              <li>C++</li>
              <li>SQL</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Frontend Development</h3>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>EJS</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Backend Development</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>RESTful APIs</li>
              <li>Socket.IO</li>
              <li>WebRTC</li>
              <li>Flask</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Databases & Systems</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Database Management</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Development Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Docker</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Google Colab</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Emerging Technologies</h3>
            <ul>
              <li>Machine Learning</li>
              <li>Scikit-learn</li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>AI Applications</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
