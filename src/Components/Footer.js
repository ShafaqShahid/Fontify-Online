// Footer.js
import logo from "../image/favicon.png"
import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt=" Logo" />
          <h3>Fontify Online</h3>
        </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Website. All rights reserved.</p>
        <p>Designed and developed by <a href="https://www.linkedin.com/in/syeda-shafaq-gillani-4001581b6/" target="_blank" rel="noopener noreferrer">Shafaq Shahid</a></p>
      </div></div>
    </footer>
  );
};

export default Footer;
