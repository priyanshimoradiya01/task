import React, { useEffect, useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Button, Typography, Container } from '@mui/material';

const ThemeSwitcherwithLocalStorage = () => {

  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

 
  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Container style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h4" gutterBottom>
          Theme Switcher with Local Storage
        </Typography>
        <Button variant="contained" onClick={toggleTheme}>
          Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode  
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default ThemeSwitcherwithLocalStorage;
