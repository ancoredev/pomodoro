import { Slider } from "@mui/material";

import { useContext } from "react";
import SettingsContext from "../SettingsContext";

const marksWork = [
    {
        value: 5,
        label: "5 min"
    },
    {
        value: 25,
        label: "25 min"
    },
    {
        value: 60,
        label: "60 min"
    }
];

const marksBreak = [
    {
        value: 1,
        label: "1 min"
    },
    {
        value: 5,
        label: "5 min"
    },
    {
        value: 25,
        label: "25 min"
    }
];


function Settings () {
    const settings = useContext(SettingsContext);

    return (
        <div className="settings">
          <h2>Settings</h2>
          <div className="parameter">
            <p>Work duration</p>
            <div className="slider">
                <Slider 
                    aria-label="Work duration"
                    value={settings.workDuration}
                    onChange={event => settings.setWorkDuration(event.target.value)}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marksWork}
                    min={5}
                    max={60}    
                />
            </div>
          </div>
          <div className="parameter">
            <p>Break duration</p>
            <div className="slider">
                <Slider 
                    aria-label="Break duration"
                    value={settings.breakDuration}
                    onChange={event => settings.setBreakDuration(event.target.value)}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marksBreak}
                    min={1}
                    max={25}    
                />
            </div>
          </div>
          <button onClick={() => settings.setSettingsOpen(false)}>
            Back
          </button>
        </div>
    )
}

export default Settings;