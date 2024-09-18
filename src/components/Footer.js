import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section contact-info">
            <h4>Contact Me</h4>
            <p>Email: priyankakumarirajput1@gmail.com</p>
            <p>Phone: +91 8920654691</p>
          </div>
          <div className="footer-section social-media">
            <h4>Follow Me</h4>
            <a href="https://github.com/Priyanka042001" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/priyanka-kumari-659640232/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Priyanka Kumari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
