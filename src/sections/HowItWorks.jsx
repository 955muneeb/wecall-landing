// src/sections/HowItWorks.jsx
import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'ATTRACT',
      desc: 'Reach consumers through targeted marketing.'
    },
    {
      num: '02',
      title: 'QUALIFY',
      desc: 'Identify prospects matching your criteria.'
    },
    {
      num: '03',
      title: 'VERIFY',
      desc: 'Confirm interest and contact information.'
    },
    {
      num: '04',
      title: 'DELIVER',
      desc: 'Send qualified leads directly to your team.'
    }
  ];

  return (
    <section className="how-it-works">
      <div className="container">
        
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <p className="section-subtitle">Connect with motivated prospects.</p>
          
          <h2 className="section-title">How We Turn Interest <br/> Into Opportunity.</h2>
          <p className="section-desc">Simple 4-step verified process converting intent to sales.</p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline">
            {steps.map((step, index) => (
              <div key={index} className="step">
                
                {/* The Number and Connecting Line */}
                <div className="step__graphic">
                  <div className="step__circle">{step.num}</div>
                  {/* Only draw the line if it's NOT the last item */}
                  {index !== steps.length - 1 && <div className="step__line"></div>}
                </div>

                {/* The Text Content */}
                <div className="step__content">
                  <h4 className="step__title">{step.title}</h4>
                  <p className="step__desc">{step.desc}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}