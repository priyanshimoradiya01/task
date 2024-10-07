import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    console.log({email,password})

    
    if (!email || !password) {
      setError('Please fill out all fields.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setSuccess(true);
  };

  return (
    <Box 
      component="form" 
      onSubmit={handleSubmit} 
      sx={{ width: 300, margin: '0 auto', mt: 5 }}
    >
      <Typography variant="h5" gutterBottom>
        Login Form
      </Typography>
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={Boolean(error && !validateEmail(email))}
        helperText={error && !validateEmail(email) ? 'Invalid email format' : ''}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={Boolean(error && password.length < 6)}
        helperText={error && password.length < 6 ? 'Password too short' : ''}
      />
      
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">Login successful!</Alert>}

      <Button 
        type="submit" 
        variant="contained" 
        color="primary" 
        fullWidth
        sx={{ mt: 2 }}
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
