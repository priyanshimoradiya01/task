import React, { useState, useEffect } from 'react';
import { Button, Typography, Container } from '@mui/material';

const TimerwithStartStop = () => {
  const [seconds, setSeconds] = useState(0); 
    const [isActive, setIsActive] = useState(false); 

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1); 
      }, 1000);
    } else if (!isActive && seconds !== 0) {

      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isActive, seconds]);


  const toggleTimer = () => {
    setIsActive(!isActive); 
  };


  const resetTimer = () => {
    setIsActive(false); 
    setSeconds(0);
  };

  return (
    <Container style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4">{seconds}s</Typography>
      <div style={{ marginTop: '20px' }}>
        <Button
          variant="contained"
          color={isActive ? 'secondary' : 'primary'}
          onClick={toggleTimer}
          style={{ marginRight: '10px' }}
        >
          {isActive ? 'Stop' : 'Start'}
        </Button>
        <Button variant="outlined" color="error" onClick={resetTimer}>
          Reset
        </Button>
      </div>
    </Container>
  );
};

export default TimerwithStartStop;

