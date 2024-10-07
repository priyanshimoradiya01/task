import React, { useEffect, useState } from 'react';
import { Typography, Container } from '@mui/material';

const WindowResizeListener = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container style={{ marginTop: '20px', textAlign: 'center' }}>
      <Typography variant="h4">
        Current Window Width: {windowWidth}px
      </Typography>
    </Container>
  );
};

export default WindowResizeListener;
