// src/Component/Section.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from './CardComponent';
import Carousel from './Carousel';
import './Section.css';
import { Tabs, Tab, CircularProgress } from '@mui/material';

function Section({ title, apiEndpoint, isSongsSection }) {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [showCarousel, setShowCarousel] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from:', apiEndpoint);
        const response = await axios.get(apiEndpoint);
        console.log('Data received:', response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    if (isSongsSection) {
      const fetchGenres = async () => {
        try {
          console.log('Fetching genres');
          const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
          console.log('Genres received:', response.data);
          setGenres(['all', ...response.data]);
        } catch (error) {
          console.error('Error fetching genres:', error);
        }
      };

      fetchGenres();
    }
  }, [apiEndpoint, isSongsSection]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const filteredData = activeTab === 'all' ? data : data.filter(item => item.genre === activeTab);

  return (
    <div className="section">
      <div className="header">
        <h2>{title}</h2>
        {!isSongsSection && (
          <button onClick={() => setShowCarousel(!showCarousel)}>
            {showCarousel ? 'Show All' : 'Collapse'}
          </button>
        )}
      </div>
      {isSongsSection && (
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="All" value="all" />
          {genres.map((genre) => (
            <Tab key={genre} label={genre} value={genre} />
          ))}
        </Tabs>
      )}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={`cardWrapper ${showCarousel ? '' : 'gridView'}`}>
          <Carousel
            data={filteredData}
            carouselKey={title}
            renderCardComponent={(data) => <CardComponent album={data} />}
          />
        </div>
      )}
    </div>
  );
}

export default Section;
