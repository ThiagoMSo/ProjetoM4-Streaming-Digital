import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ value, max }) => {
    const percentage = (value / max) * 100;

    return (
        <div className="progress-bar">
            <div className="progress-bar__fill" style={{ width: `${percentage}%` }}></div>
        </div>
    );
};

const App = () => {
    const [progress, setProgress] = useState(0);
    const maxValue = 248; // 4 minutes and 8 seconds in seconds

    useEffect(() => {
        const timer = setTimeout(() => {
            if (progress < maxValue) {
                setProgress(progress + 1);
            }
        }, 1000);



        return () => {
            clearTimeout(timer);
        };
    }, [progress]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <div>
            <ProgressBar value={progress} max={maxValue} />
            <div className="countdown">{formatTime(progress)}</div>
        </div>
    );
};

export default App;