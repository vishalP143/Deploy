import React from 'react';
import { Link } from 'react-router-dom';
import { Switch } from '@mui/material';
import '../styles/Navbar.css'; // Import the CSS file for Navbar styles

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <h1 className="navbar-title">My Portfolio</h1>
      <div className="navbar-toggle">
        <Switch checked={isDarkMode} onChange={toggleDarkMode} />
        <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/projects" className="navbar-link">Projects</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
