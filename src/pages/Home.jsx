// src/pages/Home.jsx
import React from 'react';
import Hero from '../sections/Hero';
import Metrics from '../sections/Metrics';
import Industries from '../sections/Industries';

export default function Home() {
  return (
    <div className="page-home">
      <Hero />
      <Metrics />
      <Industries />
    </div>
  );
}