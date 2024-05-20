import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import HeroSection from './Component/HeroSection';
import Section from './Component/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Section />
    </div>
  );
}

export default App;
