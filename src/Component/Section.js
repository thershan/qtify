import React, { useEffect, useState } from 'react';
import './Section.css';
import { Box, Tabs, Tab, CircularProgress } from '@mui/material';
import CardComponent from './CardComponent';
import Carousel from './Carousel';

export default function Section({ title, apiEndpoint, isSongsSection, type }) {
  const [data, setData] = useState([]);
  const [genres, setGenres] = useState([]);
  const [activeTab, setActiveTab] = useState('all');
  const [filterData, setFilterData] = useState([]);
  const [carouselToggle, setCarouselToggle] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const result = await response.json();
        setData(result);
        setFilterData(result);
        console.log(`Data fetched for ${title}:`, result); // Debugging log
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    if (isSongsSection) {
      const fetchGenres = async () => {
        try {
          const response = await fetch('https://qtify-backend-labs.crio.do/genres');
          const result = await response.json();
          console.log('Detailed Genres API response:', JSON.stringify(result, null, 2)); // Debugging log
          
          // Inspect the structure of the result
          console.log('Genres API response structure:', result);
          
          // Correctly access the genres array within result.data
          if (result.data && Array.isArray(result.data)) {
            setGenres([{ key: 'all', label: 'All' }, ...result.data]);
          } else {
            console.error('Genres response is not an array:', result);
          }
        } catch (error) {
          console.error('Error fetching genres:', error);
        }
      };

      fetchGenres();
    }
  }, [apiEndpoint, isSongsSection, title]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    if (newValue === 'all') {
      setFilterData(data);
    } else {
      setFilterData(data.filter(item => item.genre === newValue));
    }
  };

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
    console.log('Toggle state:', !carouselToggle); // Debugging log
  };

  return (
    <div>
      <div className="header">
        <h3 style={{ fontSize: "20px" }}>{title}</h3>
        {isSongsSection ? null : (
          <h4 className="toggleText" onClick={handleToggle}>
            {carouselToggle ? "Show All" : "Collapse All"}
          </h4>
        )}
      </div>

      {isSongsSection && (
        <Tabs value={activeTab} onChange={handleTabChange}>
          {genres.map((genre) => (
            <Tab key={genre.key} label={genre.label} value={genre.key} />
          ))}
        </Tabs>
      )}

      {!data?.length ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className="cardWrapper">
          {!carouselToggle && !isSongsSection ? (
            <div className="wrapper">
              {data.map((item) => (
                <CardComponent key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filterData}
              renderCardComponent={(ele) => <CardComponent data={ele} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
}
