// src/sections/Industries.jsx
import React from 'react';

export default function Industries() {
  const cards = [
    {
      title: 'Real Estate',
      desc: 'Reach motivated buyers, sellers, and property financing seekers easily.',
      icon: '🏠'
    },
    {
      title: 'Mortgage',
      desc: 'Connect with homeowners looking for refinancing, cash-out, or reverse solutions.',
      icon: '🏦'
    },
    {
      title: 'Debt Relief',
      desc: 'Reach consumers actively looking for help with credit cards, loans, and debt.',
      icon: '💳'
    }
  ];

  return (
    <section className="industries">
      <div className="container">
        
        <div className="industries__header">
          <h2>Leads That Fit Your Business.</h2>
          <p>Connect with motivated prospects across our core industries.</p>
        </div>

        <div className="industries__grid">
          {cards.map((card, index) => (
            <div key={index} className="ind-card">
              <div className="ind-card__icon">{card.icon}</div>
              <h3 className="ind-card__title">{card.title}</h3>
              <p className="ind-card__desc">{card.desc}</p>
              <a href="#learn-more" className="ind-card__link">
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}