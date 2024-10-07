import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Button, Grid } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const ShoppingCartQuantity = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', quantity: 1 },
    { id: 2, name: 'Item 2', quantity: 1 },
    { id: 3, name: 'Item 3', quantity: 1 },
  ]);

  const handleIncrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleCheckout = () => {
    console.log('Checkout:', cartItems);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      <Grid container spacing={3}>
        {cartItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body1">Quantity: {item.quantity}</Typography>
                <IconButton
                  color="primary"
                  onClick={() => handleIncrement(item.id)}
                >
                  <Add />
                </IconButton>
                <IconButton
                  color="secondary"
                  onClick={() => handleDecrement(item.id)}
                >
                  <Remove />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckout}
        style={{ marginTop: '20px' }}
      >
        Checkout
      </Button>
    </div>
  );
};

export default ShoppingCartQuantity;

