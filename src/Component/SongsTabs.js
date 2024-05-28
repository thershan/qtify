// src/components/SongsTabs.js
import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from '@mui/material';
import { fetchSongs, fetchGenres } from '../services/api';
import Carousel from './Carousel';

const SongsTabs = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');

  useEffect(() => {
    const getSongsAndGenres = async () => {
      const songsData = await fetchSongs();
      const genresData = await fetchGenres();
      setSongs(songsData);
      setGenres(['All', ...genresData]);
    };
    getSongsAndGenres();
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs = selectedGenre === 'All' ? songs : songs.filter(song => song.genre === selectedGenre);

  const renderCardComponent = (item) => (
    <div>
      <img src={item.imageUrl} alt={item.title} />
      <p>{item.title}</p>
    </div>
  );

  return (
    <div>
      <Tabs value={selectedGenre} onChange={handleTabChange}>
        {genres.map((genre, index) => (
          <Tab label={genre} value={genre} key={index} />
        ))}
      </Tabs>
      <Carousel data={filteredSongs} renderCardComponent={renderCardComponent} />
    </div>
  );
};

export default SongsTabs;
