import React from 'react';
import { Chip, Tooltip } from '@mui/material';
import './CardComponent.css';

export default function Card({ data, type }) {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;

        return (
          <Tooltip title={`${songs?.length} Songs`} placement="top" arrow>
            <div className="wrapper">
              <div className="card">
                <img src={image} alt="album" />
                <div className="banner">
                  <Chip
                    className="chip"
                    label={`${follows} Follows`}
                    size="small"
                  />
                </div>
              </div>
              <div className="titleWrapper">
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "songs": {
        const { image, likes, title } = data;

        return (
          <div className="wrapper">
            <div className="card">
              <img src={image} alt="song" />
              <div className="banner">
                <div className="chip">
                  <p>{likes} Likes</p>
                </div>
              </div>
            </div>
            <div className="titleWrapper">
              <p>{title}</p>
            </div>
          </div>
        );
      }

      default:
        return <></>;
    }
  };
  return getCard(type);
}
