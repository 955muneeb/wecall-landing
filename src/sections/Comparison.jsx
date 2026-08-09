// src/sections/Comparison.jsx
import React from 'react';

export default function Comparison() {
  const traditionalPoints = [
    'Cold contacts',
    'Low intent',
    'Wasted time',
    'Unpredictable results'
  ];

  const wecallPoints = [
    'High-intent prospects',
    'Verified information',
    'Fast delivery',
    'Predictable lead flow'
  ];

  return (
    <section className="comparison-section">
      <div className="container">
        <div className="comparison-card">
          
          {/* Left Column: Heading & Hook */}
          <div className="comparison-card__heading-pane">
            <span className="meta-label text-teal">Why We Call</span>
            <h2 className="comparison-card__title">
              Stop Chasing <br /> Cold Prospects.
            </h2>
          </div>

          {/* Right Column: Split Table Lists */}
          <div className="comparison-card__tables-pane">
            
            {/* Traditional Column */}
            <div className="comparison-table">
              <h4 className="comparison-table__header">Traditional Outreach</h4>
              <ul className="comparison-table__list">
                {traditionalPoints.map((point, index) => (
                  <li key={index} className="comparison-table__item item--bad">
                    <span className="icon">✕</span> {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* WeCall Column */}
            <div className="comparison-table table--featured">
              <h4 className="comparison-table__header">WeCall Approach</h4>
              <ul className="comparison-table__list">
                {wecallPoints.map((point, index) => (
                  <li key={index} className="comparison-table__item item--good">
                    <span className="icon">✓</span> {point}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
} 