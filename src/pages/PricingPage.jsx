// src/pages/PricingPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

export default function PricingPage() {
  const navigate = useNavigate();
  
  // State for the interactive lead calculator slider
  const [leadVolume, setLeadVolume] = useState(2500);

  // Dynamic price calculation logic based on volume tiers
  const calculatePricePerLead = (volume) => {
    if (volume < 1000) return 65;
    if (volume < 5000) return 55;
    return 45;
  };

  const pricePerLead = calculatePricePerLead(leadVolume);
  const totalMonthlyCost = leadVolume * pricePerLead;

  const tableFeatures = [
    { name: 'TCPA Compliant Outreach', starter: '✓', premium: '✓', enterprise: '✓' },
    { name: 'Real-Time Routing & API Deliveries', starter: '✓', premium: '✓', enterprise: '✓' },
    { name: 'CRM Integration Support', starter: 'Standard', premium: 'Advanced', enterprise: 'Custom / Native' },
    { name: 'Lead Replacement Guarantee', starter: 'Up to 10%', starter_note: 'within 48h', premium: 'Up to 20%', enterprise: 'Unlimited' },
    { name: 'Dedicated Account Specialist', starter: '✕', premium: '✓', enterprise: '✓ (24/7 Priority)' },
    { name: 'Custom List Filtering', starter: '✕', premium: '✕', enterprise: '✓' },
    { name: 'Live Warm Transfers', starter: '✕', premium: '✕', enterprise: 'Available Add-on' },
  ];

  return (
    <div className="page-pricing-hub">
      
      {/* 1. Header Hero Banner */}
      <section className="pricing-hero">
        <div className="container">
          <span className="pricing-hero__badge">TRANSPARENT TIERINGS</span>
          <h1 className="pricing-hero__title">Plans Scaled to Your Growth.</h1>
          <p className="pricing-hero__subtitle">
            No hidden setup surcharges. Choose a static predictable volume tier or calculate a custom delivery model below.
          </p>
        </div>
      </section>

      {/* 2. Interactive Lead Calculator Slider */}
      <section className="pricing-calculator">
        <div className="container">
          <div className="calc-card">
            <h2 className="calc-card__title">Interactive Cost Estimator</h2>
            <p className="calc-card__desc">Drag the slider to adjust your target monthly lead acquisition velocity.</p>
            
            <div className="slider-wrapper">
              <input 
                type="range" 
                min="500" 
                max="10000" 
                step="500" 
                value={leadVolume} 
                onChange={(e) => setLeadVolume(Number(e.target.value))}
                className="volume-range-slider"
              />
              <div className="slider-labels">
                <span>500 Leads</span>
                <span>5,000 Leads</span>
                <span>10,000+ Leads</span>
              </div>
            </div>

            <div className="calc-metrics">
              <div className="metric-box">
                <span className="metric-box__val">{leadVolume.toLocaleString()}</span>
                <span className="metric-box__lbl">Leads / Month</span>
              </div>
              <div className="metric-box">
                <span className="metric-box__val">${pricePerLead}</span>
                <span className="metric-box__lbl">Per Verified Lead</span>
              </div>
              <div className="metric-box highlight-teal">
                <span className="metric-box__val">${totalMonthlyCost.toLocaleString()}</span>
                <span className="metric-box__lbl">Estimated Monthly Investment</span>
              </div>
            </div>

            <div className="calc-action">
              <Button variant="primary" onClick={() => navigate(`/demo?volume=${leadVolume}`)}>
                Lock in This Rate →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Features Comparison Matrix Table */}
      <section className="pricing-matrix">
        <div className="container">
          <h2 className="matrix-title">Deep Feature Comparison</h2>
          
          <div className="table-responsive-wrapper">
            <table className="comparison-matrix">
              <thead>
                <tr>
                  <th>Core Deliverables</th>
                  <th>Starter Tier</th>
                  <th>Premium Tier</th>
                  <th>Enterprise Tier</th>
                </tr>
              </thead>
              <tbody>
                {tableFeatures.map((feat, index) => (
                  <tr key={index}>
                    <td className="feature-name">{feat.name}</td>
                    <td>
                      <span className={feat.starter === '✕' ? 'text-cross' : 'text-check'}>{feat.starter}</span>
                      {feat.starter_note && <small className="block-note">{feat.starter_note}</small>}
                    </td>
                    <td><span className="text-check">{feat.premium}</span></td>
                    <td><span className="text-check font-bold">{feat.enterprise}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

    </div>
  );
}