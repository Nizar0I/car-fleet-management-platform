// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4>© 2025 DRCA - Tous droits réservés</h4>
        <p>Développé par l'équipe DRCA Marrakech-Safi</p>
        <div className="footer-icons">
          <a href="mailto:contact@drca.ma" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
