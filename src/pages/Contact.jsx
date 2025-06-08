import React from 'react';
import "../styles/contact.css";
import contactVideo from '../assets/eurospicev1.mp4';
import "../components/Footer";
import Footer from '../components/Footer';
function Contact()








{
  return (
    <div className='contactmain'>
      {/* Header Section with Video */}
      <div className="contact-header">
        <video autoPlay loop muted className="contact-video">
          <source src={contactVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="contact-overlay">
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* Contact Details */}
      <div className="contact-content">
        <div className="contact-info-box">
          <h2>Get in touch and let's make something great together.</h2>
          <p><strong>Email:</strong> eurospice.nl@gmail.com</p>
          <p><strong>Mobile:</strong> +31 6 15200566</p>
          <p><strong>Address:</strong><br />
            Molenkamp 30,<br />
            5674 TJ Nuenen,<br />
            Netherlands
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="map-container">
          <iframe
            title="Eurospice Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2444.5835864603297!2d5.549733115970775!3d51.4887119796365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6e56395b7762f%3A0x7e340de7b7754e1!2sMolenkamp%2030%2C%205674%20TJ%20Nuenen%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1685652380123!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '12px', marginTop: '1.5rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    
    
    <Footer />
    
    
    
    
    </div>
  );
}

export default Contact;
