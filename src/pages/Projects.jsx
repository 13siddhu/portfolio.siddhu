import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'VirtuSync',
      description: 'Real-time video calling and chat application with peer-to-peer connection and modern UI.',
      technologies: ['React', 'WebRTC', 'Socket.io', 'Node.js'],
      link: 'https://virtusync.onrender.com/',
      image: '📹'
    },
    {
      id: 2,
      title: 'Wyre - E-commerce Platform',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, and order management.',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe'],
      link: 'https://wyre-pi.vercel.app',
      image: '🛒'
    },
    {
      id: 3,
      title: 'EasyServ',
      description: 'Service booking platform with integrated payment gateway and real-time notifications.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      link: 'https://easyserv.netlify.app',
      image: '🛠️'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with React, responsive design, and integrated email functionality.',
      technologies: ['React', 'Vite', 'CSS3', 'Nodemailer'],
      link: '',
      image: '💼'
    },
    {
      id: 5,
      title: 'Disease Prediction',
      description: 'Machine learning application for predicting diseases using data analysis and predictive models with an interactive web interface.',
      technologies: ['Python', 'Machine Learning', 'Flask', 'Scikit-learn'],
      link: 'https://heal-bridge-ai.onrender.com/',
      image: '🏥'
    },
    {
      id: 6,
      title: 'Gazi Aeromatics',
      description: 'Professional e-commerce website for premium essential oils and aromatic products company. Features product catalog, industry solutions, certifications, and global reach with secure enquiry system.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'E-commerce'],
      link: 'https://gaziaeromatics.netlify.app/',
      image: '🧴'
    }
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h1>My Projects</h1>
        <p className="intro-text">
          Here are some of the projects I've worked on. Each showcases different aspects of full-stack development.
        </p>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.image}</div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View on Live link →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
