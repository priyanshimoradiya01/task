
import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, CircularProgress } from '@mui/material';

const PollingDataAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData(); 
    const intervalId = setInterval(fetchData, 10000);

    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Polling Data from API
      </Typography>

      {loading && <CircularProgress />} 

      {error && <Typography color="error">{error}</Typography>} 

      <List style={{ marginTop: '20px' }}>
        {data.length > 0 ? (
          data.map((item) => (
            <ListItem key={item.id}>
              <ListItemText primary={item.title} secondary={item.body} />
            </ListItem>
          ))
        ) : (
          !loading && <Typography>No data available</Typography> 
        )}
      </List>
    </Container>
  );
};

export default PollingDataAPI;
