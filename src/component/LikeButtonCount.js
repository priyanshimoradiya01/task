import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { ThumbUp } from '@mui/icons-material';

const LikeButtonCount = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ThumbUp />}
        onClick={handleLike}
      >
        Like
      </Button>
      <Typography variant="h6" style={{ marginTop: '10px' }}>
        Likes: {likes}
      </Typography>
    </div>
  );
};

export default LikeButtonCount;
