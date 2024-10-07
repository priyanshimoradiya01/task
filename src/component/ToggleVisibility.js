
import React, { useState } from 'react';

const ToggleVisibility = () => {

    // const [name,setName]=useState([])

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const validatePassword = (value) => {
        const uppercasePattern = /[A-Z]/;
        const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;

        if (!uppercasePattern.test(value)) {
            setError('Password must contain at least one uppercase letter.');
        } else if (!specialCharacterPattern.test(value)) {
            setError('Password must contain at least one special character.');
        } else if (value.length < 8) {
            setError('Password must be at least 8 characters long.');
        } else {
            setError('');
        }
    };


    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value);
    };

    return (
        <div>

            {/* <div>
                <div>name:{name}</div>
                <button className='btn btn-primary' onClick={() => setName("priyanshi")}>show</button>
                <button className='btn btn-danger' onClick={() => setName("")}>hide</button>
            </div> */}

            <label htmlFor="password">Password:</label>
            <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
            />
            <button onClick={togglePasswordVisibility}>
                {showPassword ? 'Hide' : 'Show'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default ToggleVisibility;
