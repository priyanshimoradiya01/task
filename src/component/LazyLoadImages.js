import React, { useEffect, useState, useRef } from 'react';
import { Container, Grid, CircularProgress, Typography } from '@mui/material';

const LazyLoadImages = () => {
  const [images, setImages] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const imgRefs = useRef([]); 

 
  const imageUrls = [
    'https://via.placeholder.com/300/FF5733/FFFFFF?text=Image+1',
    'https://via.placeholder.com/300/33FF57/FFFFFF?text=Image+2',
    'https://via.placeholder.com/300/3357FF/FFFFFF?text=Image+3',
    'https://via.placeholder.com/300/FF33A1/FFFFFF?text=Image+4',
    'https://via.placeholder.com/300/FFD733/FFFFFF?text=Image+5',
    'https://via.placeholder.com/300/33FFD7/FFFFFF?text=Image+6',
    'https://via.placeholder.com/300/FF5733/FFFFFF?text=Image+7',
    'https://via.placeholder.com/300/33FF57/FFFFFF?text=Image+8',
  ];


  useEffect(() => {
    setImages(imageUrls);
    setLoading(false);
  }, []);


  useEffect(() => {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; 
          img.classList.add('fade-in'); 
          observer.unobserve(img);
        }
      });
    });

    imgRefs.current.forEach((img) => {
      if (img) {
        imgObserver.observe(img);
      }
    });

    return () => {
      imgObserver.disconnect(); 
    };
  }, [images]);

  return (
    <Container style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        Lazy Load Images on Scroll
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {images.map((src, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <img
                ref={(el) => (imgRefs.current[index] = el)} 
                data-src={src} 
                alt={`Image ${index + 1}`}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                className="lazy-load"
                loading="lazy"
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default LazyLoadImages;
