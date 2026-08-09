import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Global Layout Sections
import Navbar from './sections/Navbar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import Demo from './pages/Demo';
import Pricing from './pages/PricingPage';
import BookDemo from './pages/BookDemo';
import PricingPage from './pages/PricingPage';
import HowItWorks from './sections/HowItWorks';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Global Nav Bar Header */}
        <Navbar />
        
        <main className="main-viewport">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bookdemo" element={<BookDemo />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/how-it-works" element={<HowItWorks/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;