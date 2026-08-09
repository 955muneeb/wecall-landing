// src/sections/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        
        {/* Top Grid Matrix Area */}
        <div className="footer__grid">
          
          <div className="footer__col footer__col--brand">
            <h3 className="footer__logo">WeCall LLC</h3>
            <p className="footer__tagline">
              The near WeCall con connect your business, and property financing seekers.
            </p>
          </div>
          
          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer__col">
            <h4>Solutions</h4>
            <ul>
              <li><Link to="/services">Real Estate</Link></li>
              <li><Link to="/services">Mortgage</Link></li>
              <li><Link to="/services">Debt Relief</Link></li>
            </ul>
          </div>
          
          <div className="footer__col">
            <h4>Contact</h4>
            <ul className="footer__contact-info">
              <li>📞 +1 072-542-5384</li>
              <li>✉️ email@esivemerc.com</li>
              <li>📍 Sacramento, California</li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Separation Layer Bar */}
        <div className="footer__bottom">
          <div className="footer__legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/refuse">Refuse Policy</Link>
          </div>
          <p className="footer__copyright">
            © {new Date().getFullYear()} WeCall LLC. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}