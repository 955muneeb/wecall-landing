// src/pages/BookDemo.jsx
import React from 'react';

export default function BookDemo() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Your demo request has been received. A WeCall specialist will contact you shortly.');
  };

  return (
    <div className="page-demo">
      <section className="demo-hero">
        <div className="container demo-hero__wrap">
          <div className="demo-hero__content">
            <span className="demo-badge">FREE STRATEGY SESSION</span>
            <h1 className="demo-title">
              Book a demo and see how <span className="text-gold">WeCall</span> turns high-intent conversations into real pipeline growth.
            </h1>
            <p className="demo-subtitle">
              Meet with our team to review your goals, explore the right outreach approach, and see how our process supports stronger lead quality and reliable delivery.
            </p>
          </div>

          <div className="demo-hero__panel">
            <div className="demo-hero__panel-card">
              <h3>What you can expect</h3>
              <ul>
                <li>Live walkthrough of our lead generation process</li>
                <li>Guidance tailored to your market and offer</li>
                <li>Clear pricing and campaign planning overview</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="demo-content">
        <div className="container demo-grid">
          <div className="demo-left-col">
            <div className="demo-card demo-card--light">
              <div className="demo-card__icon">01</div>
              <h3 className="demo-card__title">A better way to qualify and convert</h3>
              <p className="demo-card__text">
                We help teams focus on opportunities that are already aligned with their offer, so conversations become more relevant and more productive.
              </p>
            </div>

            <div className="demo-card demo-card--dark">
              <div className="demo-card__icon demo-card__icon--dark">02</div>
              <h3 className="demo-card__title text-gold">Built for speed, compliance, and consistency</h3>
              <ul className="demo-list demo-list--dots">
                <li><span className="dot"></span> Verified lead context and high-intent targeting</li>
                <li><span className="dot"></span> Fast response times with predictable lead flow</li>
                <li><span className="dot"></span> A compliant process designed for long-term growth</li>
              </ul>
            </div>
          </div>

          <div className="demo-right-col">
            <div className="demo-form-card">
              <div className="demo-form__top">
                <span className="demo-form__pill">Request your session</span>
                <h2 className="demo-form__title">Let’s build a smarter outreach plan.</h2>
              </div>
              <p className="demo-form__subtitle">Share a few details and a WeCall specialist will reach out with a tailored consultation.</p>

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
                  <label>HOW CAN WE HELP? (OPTIONAL)</label>
                  <textarea placeholder="Tell us about your goals, current challenges, or ideal lead volume..." rows="4"></textarea>
                </div>

                <button type="submit" className="demo-submit-btn">BOOK MY FREE DEMO</button>

                <p className="demo-form__footer">
                  No commitment required · We will contact you within one business day
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}