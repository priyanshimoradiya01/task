import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';

const CharacterCounter = () => {
  const [text, setText] = useState(''); 

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', textAlign: 'center' }}>
      <TextField
        label="Type something..."
        variant="outlined"
        fullWidth
        value={text}
        onChange={handleInputChange}
        margin="normal"
      />
      <Typography variant="body1" color="textSecondary">
        Character Count: {text.length}
      </Typography>
    </div>
  );
};

export default CharacterCounter;
