import { Slider } from "@mui/material";

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
    
    return (
        <div className="settings">
          <h2>Settings</h2>
          <div className="parameter">
            <p>Work duration</p>
            <div className="slider">
                <Slider 
                    aria-label="Work duration"
                    value={25}
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
                    aria-label="Work duration"
                    value={5}
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marksBreak}
                    min={1}
                    max={25}    
                />
            </div>
          </div>
          <button>
            Back
          </button>
        </div>
    )
}

export default Settings;