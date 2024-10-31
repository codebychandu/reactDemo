
import React, { useState, useEffect } from 'react';

function BharatDate() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
    
    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
            setCurrentDate(new Date().toLocaleDateString());
        }, 1000);

        return () => clearInterval(timerId);
    }, []); 

    return (
        
        <p>This is the current time:{currentDate} {currentTime} </p>
        
       
    );
    
}

export default BharatDate;