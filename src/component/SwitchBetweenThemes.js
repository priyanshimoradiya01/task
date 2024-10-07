
import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline, AppBar, Toolbar, IconButton, Typography, Switch } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const SwitchBetweenThemes = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Dark/Light Mode Toggle
          </Typography>
          <IconButton color="inherit">
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Toolbar>
      </AppBar>

      <main style={{ padding: '16px' }}>
        <Typography variant="h4">
          This is a {darkMode ? 'Dark' : 'Light'} Mode Example
        </Typography>
        <Typography variant="body1">
          Toggle the switch to change between dark and light mode.
        </Typography>
      </main>
    </ThemeProvider>
  );
};

export default SwitchBetweenThemes;
