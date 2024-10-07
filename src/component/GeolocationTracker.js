import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, CircularProgress } from '@mui/material';

const GeolocationTracker = () => {
  const [position, setPosition] = useState(null); 
  const [error, setError] = useState(null); 
  const [isTracking, setIsTracking] = useState(false);


  const startTracking = () => {
    if (navigator.geolocation) {
      setIsTracking(true);
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition({ latitude, longitude });
          setError(null);
        },
        (error) => {
          setError(error.message);
          setIsTracking(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

 
  const stopTracking = () => {
    setIsTracking(false);
    setPosition(null);
    setError(null);
  };

  return (
    <Container style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Geolocation Tracker
      </Typography>

      {isTracking && position ? (
        
        <Typography variant="h6" color="primary">
          Latitude: {position.latitude}, Longitude: {position.longitude}
        </Typography>
      ) : (
        <Typography variant="h6" color="secondary">
          {error || 'Press the button to start tracking your location.'}
        </Typography>
      )}

      <Button
        variant="contained"
        color="primary"
        onClick={startTracking}
        disabled={isTracking}
        style={{ marginTop: '20px', marginRight: '10px' }}
      >
        Start Tracking
      </Button>

      <Button
        variant="contained"
        color="secondary"
        onClick={stopTracking}
        disabled={!isTracking}
        style={{ marginTop: '20px' }}
      >
        Stop Tracking
      </Button>
    </Container>
  );
};

export default GeolocationTracker;
