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
      <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" />
      <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" />
    </div>
  );
}

export default App;
