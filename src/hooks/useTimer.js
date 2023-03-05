import { useState, useEffect } from 'react';
import { getFormatedTime } from '../utils'


function useTimer (workDuration, breakDuration) {

    const [ seconds, setSeconds ] = useState(workDuration*60);
    const [ isRunning, setRunning ] = useState(false);
    const [ isBreak, setBreak ] = useState(false);

    const startTimer = () => setRunning(true);
    const pauseTimer = () => setRunning(false);
    const resetTimer = () => {
        setRunning(false);
        setBreak(false);
        setSeconds(workDuration*60);
    }

    const switchMode = (isBreak) => {
        setBreak(isBreak => !isBreak);
        setRunning(false);
        let nextRange = isBreak ? workDuration * 60 : breakDuration *60;
        setSeconds(nextRange);
    }

    useEffect(() => {
        let interval = setInterval(() => {
            if (isRunning) {
                if (seconds === 0) {
                    switchMode(isBreak);
                } else {
                    setSeconds(seconds => seconds - 1);
                }
            }
            
        }, 1000);
        return () => clearInterval(interval);
      }, [seconds, isRunning])

    let totalSeconds = isBreak ? breakDuration*60 : workDuration*60;
    let currentTime = getFormatedTime(seconds);
    let progressPercent = (seconds/totalSeconds) * 100;
    let displayMode = isBreak ? "Break" : "Work";
    
    document.title = isBreak ? "Break: " + currentTime : "Work: " + currentTime;

    return {
        currentTime,
        progressPercent,
        isRunning,
        displayMode,
        startTimer,
        pauseTimer,
        resetTimer
    }
}

export default useTimer;