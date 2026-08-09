// src/sections/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar container">
        
        {/* Left Side: Brand Logo */}
        <div className="navbar__brand">
          <Link to="/" className="navbar__logo">
            <span className="logo-icon">w</span> WeCall LLC
          </Link>
        </div>
        
        {/* Center: Main Page Navigation Links */}
        <ul className="navbar__links">
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/services">Services</Link></li> */}
          <li><Link to="/how-it-works">How It Works</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>

        {/* Right Side: Direct Contact Details & CTA */}
        <div className="navbar__actions">
          <a href="tel:+19153425024" className="navbar__phone">
            +1915-342-5024
          </a>
          <Button variant="outline">Book a Demo</Button>
        </div>

      </nav>
    </header>
  );
}