// src/pages/BookDemo.jsx
import React from 'react';

export default function BookDemo() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // In the future, this will connect to your backend or CRM
    alert("Demo request submitted successfully!");
  };

  return (
    <div className="page-demo">
      
      {/* Top Dark Green Hero Section */}
      <section className="demo-hero">
        <div className="container">
          
          <div className="demo-hero__header">
            <span className="text-gold font-bold">Book a Demo</span>
            <span className="text-sm tracking-wide">WECALL • LEAD GENERATION EXPERTS</span>
          </div>

          <div className="demo-hero__main">
            <span className="demo-badge">FREE DEMO — NO COMMITMENT</span>
            <h1 className="demo-title">
              See <span className="text-gold">WeCall</span> <br /> In Action — Live
            </h1>
            <p className="demo-subtitle">
              Fill out the form and our team will reach out within 24 hours to schedule your personalized demo session.
            </p>
          </div>

          <div className="demo-stats">
            <div className="demo-stat">
              <span className="demo-stat__num">8<span className="text-gold">+</span></span>
              <span className="demo-stat__label">YEARS EXPERTISE</span>
            </div>
            <div className="demo-stat">
              <span className="demo-stat__num text-gold">3</span>
              <span className="demo-stat__label">OUTREACH CHANNELS</span>
            </div>
            <div className="demo-stat">
              <span className="demo-stat__num text-gold">50</span>
              <span className="demo-stat__label">STATES COVERED</span>
            </div>
            <div className="demo-stat">
              <span className="demo-stat__num">100<span className="text-gold">%</span></span>
              <span className="demo-stat__label">TCPA COMPLIANT</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* Bottom Split Content Section */}
      <section className="demo-content">
        <div className="container demo-grid">
          
          {/* Left Column: Trust Markers */}
          <div className="demo-left-col">
            
            <div className="demo-card demo-card--light">
              <h3 className="demo-card__title">What You'll Get In The Demo</h3>
              <ul className="demo-list demo-list--gold">
                <li><span>✓</span> Live walkthrough of our lead generation engine</li>
                <li><span>✓</span> Custom strategy based on your industry and goals</li>
                <li><span>✓</span> Pricing breakdown tailored to your lead volume</li>
                <li><span>✓</span> Q&A with a senior lead generation specialist</li>
                <li><span>✓</span> Overview of our TCPA compliance process</li>
                <li><span>✓</span> Sample leads and conversion notes from real campaigns</li>
              </ul>
            </div>

            <div className="demo-card demo-card--dark">
              <h3 className="demo-card__title text-gold">Why Businesses Trust Us</h3>
              <ul className="demo-list demo-list--dots">
                <li><span className="dot"></span> 100% TCPA compliant outreach</li>
                <li><span className="dot"></span> Response guaranteed within 24 hours</li>
                <li><span className="dot"></span> Lead replacement guarantee</li>
                <li><span className="dot"></span> 8+ years of hands-on field expertise</li>
                <li><span className="dot"></span> Your info is never shared or sold</li>
                <li><span className="dot"></span> Cancel or pause anytime</li>
              </ul>
            </div>

          </div>

          {/* Right Column: The Form */}
          <div className="demo-right-col">
            <div className="demo-form-card">
              <h2 className="demo-form__title">Request Your <br/> Free Demo</h2>
              <p className="demo-form__subtitle">Takes less than 2 minutes. We'll do the rest.</p>

              <form className="custom-form" onSubmit={handleFormSubmit}>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>FIRST NAME *</label>
                    <input type="text" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>LAST NAME</label>
                    <input type="text" placeholder="Smith" />
                  </div>
                </div>

                <div className="form-group">
                  <label>BUSINESS EMAIL *</label>
                  <input type="email" placeholder="john@yourcompany.com" required />
                </div>

                <div className="form-group">
                  <label>PHONE NUMBER</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" />
                </div>

                <div className="form-group">
                  <label>COMPANY NAME</label>
                  <input type="text" placeholder="Your company" />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>INDUSTRY</label>
                    <select defaultValue="">
                      <option value="" disabled>Select...</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="mortgage">Mortgage</option>
                      <option value="debt-relief">Debt Relief</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>LEADS PER MONTH</label>
                    <select defaultValue="">
                      <option value="" disabled>Select...</option>
                      <option value="1-50">1-50</option>
                      <option value="50-100">50-100</option>
                      <option value="100+">100+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>ANYTHING ELSE? (OPTIONAL)</label>
                  <textarea placeholder="Tell us about your goals or current challenges..." rows="4"></textarea>
                </div>

                <button type="submit" className="demo-submit-btn">BOOK MY FREE DEMO</button>
                
                <p className="demo-form__footer">
                  No commitment required · We'll contact you within 24 hours
                </p>

              </form>
            </div>
          </div>

        </div>
      </section>
      
    </div>
  );
}