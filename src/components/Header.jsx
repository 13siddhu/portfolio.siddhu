import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">Siddhartha</Link>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/projects" onClick={() => setMobileMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
