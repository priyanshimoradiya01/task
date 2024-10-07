import React, { useEffect, useState } from 'react';
import { Typography, CircularProgress, List, ListItem, ListItemText, Container } from '@mui/material';

const FetchDataFromAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers(); 
  }, []); 

  if (loading) {
    return <CircularProgress />; 
  }

  if (error) {
    return <Typography color="error">{`Error: ${error}`}</Typography>; 
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Users List
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FetchDataFromAPI;
