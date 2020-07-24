import React, { useState } from 'react'
// import axios from 'axios'

export default () => {
    const [title] = useState('Top Games 2020')
    
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
    
};
