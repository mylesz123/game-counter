import React, { useState, useEffect } from 'react'

export default function StopWatch() {
    let [isStarted, setIsStarted] = useState(false);
    let [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        return () => clearInterval(interval);
    });

    const tick = () => {
        if (isStarted) setCount(count += 1);
    }

    const reset = () => {
        setCount(count = 0);
    }

    const toggleStartStop = () => {
        // handle changing button state to t & f
        setIsStarted(!isStarted);
    }

    return (
        <div className="stopwatch">
            <h2>What it do babeee</h2>
            <span className="stopwatch-time">{count}</span>
            <button onClick={toggleStartStop}> 
                {isStarted ? "stop" : "start"} 
            </button>
            <button onClick={reset}> Reset </button>
        </div>
        
    )
}
