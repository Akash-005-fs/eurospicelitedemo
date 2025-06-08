import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from '../assets/FEG.png';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Left Section: Home Button */}
        <div className="footer-left">
          <Link to="/" className="home-button">
            <ArrowLeft size={18} className="arrow-icon" />
            Back to Home
          </Link>
        </div>

        {/* Center Section: Logo + Links */}
        <div className="footer-center">
          <img src={logo} alt="Logo" className="logo-img" />
          <nav className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        {/* Right Section: Social Media */}
        <div className="footer-right">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Facebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Instagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
