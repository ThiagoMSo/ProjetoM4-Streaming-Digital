import React from 'react';
import './ProgressBar.css';

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ value, max }) => {
    const percentage = (value / max) * 100;

    return (
        <div className="progress-bar mb-5">
            <div className="progress-bar__fill" style={{ width: `${percentage}%` }}></div>
        </div>
    );
};



export default ProgressBar;