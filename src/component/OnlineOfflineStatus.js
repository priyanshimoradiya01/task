import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';

const OnlineOfflineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);


  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <Container style={{ marginTop: '50px', textAlign: 'center' }}>
      <Paper
        elevation={3}
        style={{
          padding: '20px',
          backgroundColor: isOnline ? '#e0f7fa' : '#ffebee',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Online/Offline Status
        </Typography>
        <Typography variant="h5" color={isOnline ? 'primary' : 'secondary'}>
          You are currently {isOnline ? 'Online' : 'Offline'}
        </Typography>
      </Paper>
    </Container>
  );
};

export default OnlineOfflineStatus;
