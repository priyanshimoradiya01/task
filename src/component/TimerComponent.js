
import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';

const TimerComponent = () => {
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


  const handleStartStop = () => {
    setIsActive(!isActive); 
  };


  const handleReset = () => {
    setIsActive(false); 
    setSeconds(0); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3">{seconds}s</Typography>
      <div style={{ marginTop: '20px' }}>

        <Button
          variant="contained"
          color={isActive ? "secondary" : "primary"}
          onClick={handleStartStop}
          style={{ marginRight: '10px' }}
        >
          {isActive ? 'Stop' : 'Start'}
        </Button>

     
        <Button variant="outlined" color="error" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default TimerComponent;

