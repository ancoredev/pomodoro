import { useState, useEffect, useRef } from 'react';


function useTimer( workDuration, breakDuration) {

    const [ isPaused, setPaused ] = useState(true);
    const [ mode, setMode ] = useState("break");
    const [ secondsLeft, setSecondsLeft ] = useState(0);

    const timerRef = useRef({ isPaused, mode, secondsLeft });

    const initTimer = () => {
        setSecondsLeft(workDuration * 60);
    }

    const switchMode = () => {
        const nextMode = timerRef.current.mode === 'work' ? 'break' : 'work';
        const nextSeconds = nextMode === 'work' ? workDuration * 60 : breakDuration * 60;

        setMode(nextMode);
        timerRef.current.mode = nextMode;

        setSecondsLeft(nextSeconds);
        timerRef.current.secondsLeft = nextSeconds;
    }

    function tick() {
        timerRef.current.secondsLeft = timerRef.current.secondsLeft - 1;
        setSecondsLeft(timerRef.current.secondsLeft);
    }

    const togglePause = () => {
        setPaused(!isPaused);
        timerRef.current.isPaused = !timerRef.current.isPaused;
    }

    useEffect(() => {
        initTimer();
        const interval = setInterval(() => {
            if (timerRef.current.isPaused) {
                return;
            } 
            if (timerRef.current.secondsLeft === 0) {
                return switchMode();
            }
            tick();
        }, 1000);
        return () => clearInterval(interval);
    }, [breakDuration, workDuration]);

    const totalSeconds = mode === 'work' ? 
        workDuration*60 : 
        breakDuration*60;

    return {
        secondsLeft,
        totalSeconds,
        isPaused,
        togglePause
    }
}

export default useTimer;