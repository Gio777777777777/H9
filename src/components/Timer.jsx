import React, { useState, useRef } from "react";
import "./styles/Timer.css"; 

const Timer = () => {
    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

    const startTimer = () => {
        if (timerRef.current) return;
        timerRef.current = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    const resetTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTime(0);
    };

    return (
        <div className="timer-container">
            <h1>Time: {time} seconds</h1>
            <div className="timer-buttons">
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;
