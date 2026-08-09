// src/sections/Metrics.jsx
import React from 'react';

export default function Metrics() {
  const stats = [
    { value: '8+', label: 'Years of Expertise' },
    { value: '30M+', label: 'Leads Generated' },
    { value: '50', label: 'States Covered' },
    { value: '100%', label: 'TCPA Compliant' },
    { value: '500+', label: 'Trusted Partners' }
  ];

  return (
    <section className="metrics-bar">
      <div className="container metrics-bar__container">
        {stats.map((stat, index) => (
          <div key={index} className="metrics-bar__item">
            <h3 className="metrics-bar__value">{stat.value}</h3>
            <p className="metrics-bar__label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}