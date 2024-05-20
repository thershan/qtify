import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardComponent from './CardComponent';
import { Grid, Typography, Button } from '@mui/material';

function Section() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/albums/top')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error('Error fetching albums:', error);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" style={{ marginBottom: '20px' }}>Top Albums</Typography>
      <Grid container spacing={2}>
        {albums.map(album => (
          <Grid item key={album.id}>
            <CardComponent album={album} />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" style={{ marginTop: '20px' }}>Collapse</Button>
    </div>
  );
}

export default Section;
