import { CircularProgress } from "@mui/material";

function Timer () {

    return (
        <div className="timer">
            <div className="timer-progress">
            <CircularProgress 
                size={400} 
                thickness={4}
                value={75}
                variant={'determinate'}
            />
            </div>
            <div className="timer-count">
            21:43
            </div>
        </div>
    )
}

export default Timer;