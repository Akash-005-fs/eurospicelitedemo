import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/FEG.png"; // <-- Import your logo here
import "../styles/foot-home.css"; // <-- Import your CSS file
const FooterHome = () => {
  return (
    <>
      <footer className="footer-home">
        <div className="footer-container">

          {/* About Us with Logo */}
          <div className="footer-section">
            <h3>About Us</h3>
            <div className="logobtm">
              <img src={logo} alt="Logo" className="logo-img" />
            </div>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h3>Products</h3>
            <ul>
              <li>Fresh Meat</li>
              <li>Vegetarian Picks</li>
              <li>Dairy Products</li>
              <li>Ready-to-Cook</li>
              <li>Snacks</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li><Phone size={16} /> +91 98765 43210</li>
              <li><Mail size={16} /> support@example.com</li>
              <li><MapPin size={16} /> Kochi, Kerala</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} EUROSPICE. All rights reserved.
        </div>
      </footer>

     
    </>
  );
};

export default FooterHome;
