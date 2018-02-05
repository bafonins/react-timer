import React from 'react';

const TimerButton = ({ isOn }) => {
    if (isOn) {
        return (
            <div className="ui bottom attached orange basic button">
                Pause
            </div>
        );
    } else {
        return (
        <div className="ui bottom attached positive basic button">
            Start
        </div>
        );
    }
}

export default TimerButton;