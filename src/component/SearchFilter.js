
import React, { useState, useEffect } from 'react';
import { TextField, List, ListItem, ListItemText, Container } from '@mui/material';


const data = [
  'Apple',
  'Banana',
  'Orange',
  'Grapes',
  'Pineapple',
  'Strawberry',
  'Watermelon',
  'Blueberry',
  'Peach',
  'Mango'
];

const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data); 
  const [debouncedQuery, setDebouncedQuery] = useState(query); 


  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  useEffect(() => {
    const result = data.filter((item) =>
      item.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
    setFilteredData(result);
  }, [debouncedQuery]);

  return (
    <Container style={{ marginTop: '50px' }}>
      <TextField
        variant="outlined"
        fullWidth
        label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a fruit..."
      />

      <List style={{ marginTop: '20px' }}>
        {filteredData.length ? (
          filteredData.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No results found" />
          </ListItem>
        )}
      </List>
    </Container>
  );
};

export default SearchFilter;
