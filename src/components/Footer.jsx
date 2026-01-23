import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: siddharthasingh.workspace@gmail.com</p>
          <p>Phone: +91 9598486555</p>
          <p>Location: India</p>
        </div>

        <div className="footer-section">
          <h3>Social Links</h3>
          <ul>
            <li><a href="https://github.com/13siddhu" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/siddhartha-singh-a46080286/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://x.com/13siddhu" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Siddhartha. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
