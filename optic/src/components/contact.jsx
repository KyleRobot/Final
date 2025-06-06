import React from 'react';
import './comp.css';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Contact Details:</h2>
          <p><strong>Email:</strong> support@clarvo.com</p>
          <p><strong>Phone:</strong> +4 (213) 879-1067</p>
          <p><strong>Address:</strong> 0010 Westlands,Nairobi</p>
          <div className="social-icons">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>

          <p className="response-note">We typically respond within 12 hours.</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
