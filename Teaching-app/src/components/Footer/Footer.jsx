import React from 'react';
import { Link } from 'react-router-dom';
import logo_footer from "../../assets/Trust-logo.svg";
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer-container">
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo_footer} alt="Himalayan Vidya Daan Trust Logo" />
            <h2>HIMALAYAN VIDYA DAAN TRUST</h2>
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.247-.667.642-1.272 1.153-1.772a4.91 4.91 0 011.772-1.153c.637-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.055-.059 1.37-.059 4.04 0 2.67.01 2.986.059 4.04.045.975.207 1.504.344 1.856.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.047 1.37.059 4.04.059 2.67 0 2.986-.01 4.04-.059.975-.045 1.504-.207 1.856-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.88.344-1.856.047-1.054.059-1.37.059-4.04 0-2.67-.01-2.986-.059-4.04-.045-.975-.207-1.504-.344-1.856a3.097 3.097 0 00-.748-1.15 3.097 3.097 0 00-1.15-.748c-.352-.137-.88-.3-1.856-.344-1.054-.047-1.37-.059-4.04-.059zm0 3.063A5.135 5.135 0 1117.135 12 5.135 5.135 0 0112 6.865zm0 8.468A3.333 3.333 0 1115.333 12 3.333 3.333 0 0112 15.333zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-menus">
          <div className="footer-menu-section">
            <h3 className="footer-heading">Trust overview</h3>
            <ul className="footer-menu-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About us</Link></li>
              <li><Link to="/teaching">Teaching</Link></li>
              <li><Link to="/trustees">Trustees</Link></li>
            </ul>
          </div>
          
          <div className="footer-menu-section">
            <h3 className="footer-heading">Quick links</h3>
            <ul className="footer-menu-list">
              <li><Link to="/mission">Mission</Link></li>
              <li><Link to="/vision">Vision</Link></li>
              <li><Link to="/founders-message">Founder's message</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/teaching-methods">Teaching methods</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/brochure-reports">Brochure & Reports</Link></li>
            </ul>
          </div>
          
          <div className="footer-menu-section">
            <h3 className="footer-heading">User access</h3>
            <ul className="footer-menu-list">
              <li><Link to="/for-students">For students</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/contact-us">Contact us</Link></li>
              <li><Link to="/get-involved">Get involved</Link></li>
              <li><Link to="/downloads">Downloads</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-divider"></div>
      
      <div className="footer-copyright">
        <p>&copy; {currentYear} Himalayan Vidya Daan Trust</p>
      </div>
    </footer>
  );
};

export default Footer;