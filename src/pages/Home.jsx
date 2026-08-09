// src/pages/Home.jsx
import React from 'react';
import Hero from '../sections/Hero';
import Metrics from '../sections/Metrics';
import Industries from '../sections/Industries';
import HowItWorks from '../sections/HowItWorks';
import Comparison from '../sections/Comparison';
import Pricing from '../sections/Pricing';
import CTA from '../sections/CTA';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="page-home">
      <Hero />
      <Metrics />
      <Industries />
      <HowItWorks />
      <Comparison />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}