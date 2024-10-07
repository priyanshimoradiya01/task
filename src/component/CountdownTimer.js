import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(60); 
  const [isActive, setIsActive] = useState(true);


  useEffect(() => {
    if (isActive && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000); 

      return () => clearInterval(timerId); 
    } else if (timeLeft === 0) {
      setIsActive(false); 
    }
  }, [isActive, timeLeft]);


  const resetTimer = () => {
    setTimeLeft(60);  
    setIsActive(true);   
  }; 

  return (
    <Container style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Countdown Timer
      </Typography>
      <Typography variant="h2" color="primary">
        {timeLeft > 0 ? timeLeft : 'Time is up!'}
      </Typography>
      <Button variant="contained" color="primary" onClick={resetTimer} style={{ marginTop: '20px' }}>
        Reset Timer
      </Button>
    </Container>
  );
};

export default CountdownTimer;

