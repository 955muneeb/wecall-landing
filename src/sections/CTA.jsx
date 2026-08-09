// src/sections/CTA.jsx
import React from 'react';
import Button from '../components/Button';

export default function CTA() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner__card">
          <h2 className="cta-banner__title">Ready to Build a Stronger Pipeline?</h2>
          <p className="cta-banner__subtitle">
            See how WeCall can connect your sales team with high-intent prospects.
          </p>
          
          <div className="cta-banner__actions">
            <Button variant="accent">Book Your Free Demo →</Button>
          </div>
          
          <p className="cta-banner__disclaimer">No commitment. No pressure.</p>
        </div>
      </div>
    </section>
  );
}