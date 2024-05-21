import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from './CardComponent';
import Carousel from './Carousal'; // Ensure this matches the filename
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
      <div className="section-header">
        <h2>{title}</h2>
        <button onClick={() => setShowCarousel(!showCarousel)}>
          {showCarousel ? 'Collapse' : 'Show All'}
        </button>
      </div>
      {showCarousel ? (
        <Carousel data={albums} carouselKey={title} renderCardComponent={(album) => <CardComponent key={album.id} album={album} />} />
      ) : (
        <div className="grid">
          {albums.map(album => (
            <CardComponent key={album.id} album={album} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Section;
