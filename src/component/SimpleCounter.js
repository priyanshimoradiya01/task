import React, { useState } from 'react'

function SimpleCounter() {

    const [number, setNumber] = useState(0);

    return (
        <div>
            <div>Number:{number}</div>
            <button className='btn btn-primary' onClick={() => setNumber(number + 1)}>+</button>
            <button className='btn btn-danger' onClick={() => setNumber(number - 1)}>-</button>
        </div>
    )
}

export default SimpleCounter;
