import React from 'react';

const TimerButton = ({ isOn, startTimer, pauseTimer }) => {
    if (isOn) {
        return (
            <button 
                className="ui bottom attached yellow basic button"
                onClick={ () => { pauseTimer(); }}    
            >
                Pause
            </button>
        );
    } else {
        return (
            <button 
                className="ui bottom attached positive basic button"
                onClick={ () => { startTimer(); }}    
            >
                Start
            </button>
        );
    }
}

export default TimerButton;