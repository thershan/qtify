import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

function CardComponent({ album }) {
  return (
    <Card style={{ display: 'flex', flexDirection: 'column', width: '200px', margin: '10px' }}>
      <CardMedia
        component="img"
        alt={album.title}
        height="140"
        image={album.image}
        title={album.title}
      />
      <CardContent>
        <Typography variant="h6">{album.title}</Typography>
        <Chip label={`${album.follows} follows`} />
      </CardContent>
    </Card>
  );
}

export default CardComponent;
