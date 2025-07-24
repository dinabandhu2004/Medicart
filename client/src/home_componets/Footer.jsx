import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>MediKart</h3>
          <p>Your trusted online healthcare partner. Delivering medicines & essentials at your doorstep.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Shop</a></li>
            <li><a href="/">Appointments</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@medikart.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Address: 123 Medi Street, HealthCity, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 MediKart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
