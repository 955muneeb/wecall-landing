// src/pages/About.jsx
import React from 'react';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate = useNavigate();

  const values = [
    {
      icon: '🎯',
      title: 'Precision Targeting',
      desc: 'We do not believe in casting a wide, wasteful net. We locate the exact demographic primed for your specific financial or property solution.'
    },
    {
      icon: '🛡️',
      title: 'Absolute Compliance',
      desc: 'In a world of strict marketing laws, our processes are 100% TCPA compliant. We protect your business identity as fiercely as our own.'
    },
    {
      icon: '⚡',
      title: 'Real-Time Speed',
      desc: 'A lead is hottest the moment intent is expressed. Our automated verification engine ensures data routes to your team instantly.'
    }
  ];

  return (
    <div className="page-about">
      
      {/* 1. Header Banner */}
      <section className="about-hero">
        <div className="container">
          <span className="about-hero__badge">WHO WE ARE</span>
          <h1 className="about-hero__title">
            Transforming Outreach Into <br />
            <span className="text-teal-accent">Predictable Revenue.</span>
          </h1>
          <p className="about-hero__subtitle">
            We are innovators, web architects, and lead generation experts dedicated to bridging the gap between high-intent clients and market leaders.
          </p>
        </div>
      </section>

      {/* 2. Brand Story Split-Screen */}
      <section className="about-story">
        <div className="container about-story__grid">
          <div className="about-story__content">
            <h2 className="about-section-title">Our Mission</h2>
            <p>
              Founded on the principle that cold calling is dead, WeCall LLC engineered a digital-first verification matrix. We replace the headache of dialing raw numbers with the luxury of speaking only to validated prospects.
            </p>
            <p>
              By mastering conversion analytics across Real Estate, Mortgage, and Debt Relief sectors, we empower sales teams across 50 states to spend less time chasing and more time closing.
            </p>
          </div>
          <div className="about-story__visual">
            <div className="story-graphic-box">
              <span className="large-stat">50</span>
              <p>States Connected with Compliant Lead Pipelines</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="about-values">
        <div className="container">
          <div className="values-header">
            <h2 className="about-section-title text-center">The Pillars of Our Process</h2>
            <p className="text-center values-subtitle">How we maintain standard-setting quality day in and day out.</p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-card__icon">{value.icon}</div>
                <h3 className="value-card__title">{value.title}</h3>
                <p className="value-card__desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Action Banner */}
      <section className="about-cta">
        <div className="container text-center">
          <h2>Ready to See the System Live?</h2>
          <p>Let us show you exactly how our qualification layers process intent headers in real time.</p>
          <Button variant="accent" onClick={() => navigate('/demo')}>
            Book Your Strategy Session
          </Button>
        </div>
      </section>

    </div>
  );
}