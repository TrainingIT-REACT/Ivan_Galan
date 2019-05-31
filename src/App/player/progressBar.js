import React from 'react';
import style from './player.module.css';

const ProgressBar = ({currentTime = 0, totalTime = 0}) => {
    return (
        <div className={["progress", style.bar].join(' ')}>
            <div className="progress-bar" role="progressbar" style={{width: String(currentTime * 100 / totalTime)+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    );
}

export default ProgressBar;
