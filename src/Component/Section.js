import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from './CardComponent';
import Carousel from './Carousel';
import './Section.css';

function Section({ title, apiEndpoint }) {
  const [albums, setAlbums] = useState([]);
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    axios.get(apiEndpoint)
      .then(response => setAlbums(response.data))
      .catch(error => console.error('Error fetching albums:', error));
  }, [apiEndpoint]);

  return (
    <div className="section">
      <div className="header">
        <h2>{title}</h2>
        <button className="toggleText" onClick={() => setShowCarousel(!showCarousel)}>
          {showCarousel ? 'Collapse' : 'Show All'}
        </button>
      </div>
      {albums.length === 0 ? (
        <div className="loading">Loading...</div>
      ) : showCarousel ? (
        <Carousel data={albums} renderCardComponent={(album) => <CardComponent key={album.id} album={album} />} carouselKey={title} />
      ) : (
        <div className="grid cardWrapper">
          {albums.map(album => (
            <CardComponent key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
