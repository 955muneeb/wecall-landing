// src/sections/Pricing.jsx
import React from 'react';
import Button from '../components/Button';

export default function Pricing() {
  const tiers = [
    {
      name: 'STARTER',
      volume: '1-50 Leads',
      price: '$60',
      popular: false,
      features: [
        'Lead replacement',
        'CRM integration',
        'Conversion rates tracking',
        'Cancel or pause anytime'
      ]
    },
    {
      name: 'PREMIUM',
      volume: '50-100 Leads',
      price: '$55',
      popular: true,
      features: [
        'Lead replacement',
        'CRM integration',
        'Conversion rates tracking',
        'Cancel or pause anytime',
        'Priority verification support'
      ]
    },
    {
      name: 'ENTERPRISE',
      volume: '100+ Leads',
      price: '$50',
      popular: false,
      features: [
        'Follow-up calls',
        'Follow-up emails',
        'Email & text reminders',
        'Live transfers'
      ]
    }
  ];

  return (
    <section className="pricing-section">
      <div className="container">
        
        <div className="pricing-header">
          <h2 className="pricing-header__title">Simple Pricing. Built to Scale.</h2>
          <p className="pricing-header__subtitle">Choose the lead volume that fits your business.</p>
        </div>

        <div className="pricing-grid">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`price-card ${tier.popular ? 'price-card--popular' : ''}`}
            >
              <div className="price-card__top">
                <span className="price-card__name">{tier.name}</span>
                <h3 className="price-card__volume">{tier.volume}</h3>
                <div className="price-card__rate">
                  <span className="amount">{tier.price}</span>
                  <span className="per">/ lead</span>
                </div>
              </div>

              {tier.popular && (
                <div className="price-card__badge-wrapper">
                  <span className="popular-badge">MOST POPULAR</span>
                </div>
              )}

              <ul className="price-card__features">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="feature-item">
                    <span className="check-icon">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <div className="price-card__action">
                <Button variant={tier.popular ? 'primary' : 'dark-outline'} className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}