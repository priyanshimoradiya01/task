import React, { useState } from 'react';
import { TextField, Checkbox, Radio, RadioGroup, FormControlLabel, Select, MenuItem, InputLabel, Button, Slider, Box } from '@mui/material';

const FormHandle = () => {
    const [formValues, setFormValues] = useState({
        text: '',
        checkbox: false,
        radio: '',
        select: '',
        color: '#000000',
        date: '',
        number: 0,
        password: '',
        range: 50,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSliderChange = (event, newValue) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            range: newValue,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data: ', formValues);
    };

    return (
        <Box sx={{justifyContent:"center",display:"flex",alignItems:"center"}}>
            <form onSubmit={handleSubmit}>
            <TextField
                label="Text"
                variant="outlined"
                name="text"
                value={formValues.text}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                sx={{ width: "200px" }}
            />
            <br />

            <FormControlLabel
                control={
                    <Checkbox
                        name="checkbox"
                        checked={formValues.checkbox}
                        onChange={handleInputChange}

                    />
                }
                label="Checkbox"
            />

            <RadioGroup name="radio" value={formValues.radio} onChange={handleInputChange}>
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
            </RadioGroup>

            <InputLabel id="select-label">Select</InputLabel>
            <Select
                labelId="select-label"
                name="select"
                value={formValues.select}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                sx={{ width: "200px" }}
            >
                <br />
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
            </Select>
            <br />
            <TextField
                label="Color"
                type="color"
                name="color"
                value={formValues.color}
                onChange={handleInputChange}
                margin="normal"
                sx={{ width: "200px" }}
            />
            <br />

            <TextField
                label="Date"
                type="date"
                name="date"
                value={formValues.date}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                fullWidth
                margin="normal"
                sx={{ width: "200px" }}
            />

            <br />

            <TextField
                label="Number"
                type="number"
                name="number"
                value={formValues.number}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                sx={{ width: "200px" }}
            />

            <br />

            <TextField
                label="Password"
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
                fullWidth
                margin="normal"
                sx={{ width: "200px" }}
            />
            <br />

            <InputLabel>Range</InputLabel>
            <Slider
                value={formValues.range}
                onChange={handleSliderChange}
                aria-labelledby="range-slider"
                min={0}
                // max={50}
                sx={{ width: "200px" }}
            />

            <br />
            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
        </Box>
    );
};

export default FormHandle;
