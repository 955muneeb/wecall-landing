// src/sections/Hero.jsx
import React from 'react';
import Button from '../components/Button';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        
        {/* Left Side: Copy & Call to Actions */}
        <div className="hero__content">
          <span className="hero__badge">LEAD GENERATION EXPERTS</span>
          
          <h1 className="hero__title">
            Connect With <br />
            <span className="hero__highlight">High-Intent Customers.</span>
          </h1>
          
          <p className="hero__description">
            We help Real Estate, Mortgage, and Debt Relief businesses connect 
            with verified prospects who are actively looking for solutions.
          </p>
          
          <div className="hero__actions">
            <Button variant="primary">Book a Free Demo &rarr;</Button>
            <Button variant="dark-outline">View Pricing</Button>
          </div>
          
          <div className="hero__trust">
            <span className="trust-item"><span className="check">✓</span> Verified Leads</span>
            <span className="trust-item"><span className="check">✓</span> Real-Time Delivery</span>
            <span className="trust-item"><span className="check">✓</span> TCPA Compliant</span>
          </div>
        </div>

        {/* Right Side: Floating Mockup Card */}
        <div className="hero__visual">
          <div className="lead-card">
            
            <div className="lead-card__header">
              <span className="lead-card__label">NEW QUALIFIED LEAD</span>
              <button className="lead-card__menu">⋮</button>
            </div>
            
            <div className="lead-card__profile">
              <div className="lead-card__avatar">
                {/* You can replace this with an actual image tag later */}
                <div className="avatar-placeholder">JM</div>
              </div>
              <div className="lead-card__info">
                <h4>John Miller</h4>
                <p>Mortgage Refinance</p>
                <p>California</p>
              </div>
            </div>
            
            <div className="lead-card__status">
              <span className="badge badge--verified">✓ Verified High Intent</span>
            </div>
            
            <div className="lead-card__footer">
              <div className="footer-left">
                <span className="meta-label">LEAD QUALITY</span>
                <span className="meta-value">High Intent</span>
              </div>
              <div className="footer-right">
                <span className="badge badge--delivered">DELIVERED</span>
                <span className="meta-time">Just now</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}