import React from 'react';
import PropTypes from 'prop-types';

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

TimerButton.propTypes = {
    isOn: PropTypes.bool,
    startTimer: PropTypes.func,
    pauseTimer: PropTypes.func
}

export default TimerButton;