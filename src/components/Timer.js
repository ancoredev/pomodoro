import { CircularProgress } from "@mui/material";

import { useContext } from 'react';

import SettingsContext from "../SettingsContext";
import useTimer from './../hooks/useTimer';

import ButtonSettings from './../ui/ButtonSettings';
import ButtonPause from "../ui/ButtonPause";
import ButtonStart from "../ui/ButtonStart";
import ButtonStop from "../ui/ButtonStop";


function Timer () {
    const settings = useContext(SettingsContext);

    const { 
      currentTime, 
      progressPercent, 
      isRunning, 
      displayMode,
      startTimer, 
      pauseTimer,
      resetTimer
    } = useTimer(settings.workDuration, settings.breakDuration);
    
    return (
        <div className="pomodoro">
        <div className="timer">
          <div className="timer-progress">
          <CircularProgress 
            size={400} 
            thickness={4}
            value={progressPercent}
            variant={'determinate'}
          />
          </div>
          <div className="timer-count">
              {currentTime}
          </div>
        </div>

        <div className="controls">
          <ButtonSettings className="btn-circled btn-settings" onClick={() => settings.setSettingsOpen(true)}/>   
          {
            isRunning ?
            <ButtonPause className="btn-circled btn-major" onClick = {() => pauseTimer()} /> :
            <ButtonStart className="btn-circled btn-major" onClick = {() => startTimer()} />
          }
          <ButtonStop className="btn-circled" onClick= {() => resetTimer()} />         
        </div>
        
      </div>
    )
}

export default Timer;