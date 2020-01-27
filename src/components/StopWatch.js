import React, { useState } from 'react'

export default function StopWatch() {
    let [isRunning, setIsRunning] = useState(false);
    let [ticking, isTicking] = useState(0);

    const handleStopWatch = () => {
        setInterval(() => {
            ticking += 1;
        }, 1000);
        console.log(ticking);
    }

    const toggleTimer = () => {
        setIsRunning(!isRunning);

        if (!ticking) {
            isTicking(handleStopWatch);   
        } 
        else if (ticking) {
            return;
        }
    }

    return (
        <div className="stopwatch">
            <h2>What it do babeee</h2>
            <span className="stopwatch-time">{0}</span>
            <button onClick={toggleTimer}>{isRunning ? "stop" : "start" }</button>
            <button>Reset</button>
        </div>
        
    )
}
