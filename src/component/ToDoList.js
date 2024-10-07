import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask(''); 
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', textAlign: 'center' }}>
      <TextField
        label="New Task"
        variant="outlined"
        value={task}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        fullWidth
        style={{ marginBottom: '20px' }}
      >
        Add Task
      </Button>

      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={task} />
            <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(index)}>
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
