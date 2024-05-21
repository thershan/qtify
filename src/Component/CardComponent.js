import React from 'react';
import { Chip } from '@mui/material';
import './CardComponent.css';

function CardComponent({ album }) {
  // Ensure album is defined and has the necessary properties
  if (!album || !album.image || !album.title || !album.follows) {
    return null; // Return null if album is undefined or lacks necessary properties
  }

  return (
    <div className="card">
      <img src={album.image} alt={album.title} className="card-image" />
      <div className="card-content">
        <Chip label={`${album.follows} follows`} className="card-chip" />
        <h3 className="card-title">{album.title}</h3>
      </div>
    </div>
  );
}

export default CardComponent;
