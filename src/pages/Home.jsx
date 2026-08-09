// src/pages/Home.jsx
import React from 'react';
import Hero from '../sections/Hero';
import Metrics from '../sections/Metrics';
import Industries from '../sections/Industries';
import HowItWorks from '../sections/HowItWorks';

export default function Home() {
  return (
    <div className="page-home">
      <Hero />
      <Metrics />
      <Industries />
      <HowItWorks />
    </div>
  );
}