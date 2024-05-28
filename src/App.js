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
      <Section title="Top Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/top" isSongsSection={false} type="album" />
      <Section title="New Albums" apiEndpoint="https://qtify-backend-labs.crio.do/albums/new" isSongsSection={false} type="album" />
      <Section title="Songs" apiEndpoint="https://qtify-backend-labs.crio.do/songs" isSongsSection={true} type="songs" />
    </div>
  );
}

export default App;
