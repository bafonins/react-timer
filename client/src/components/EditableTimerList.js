import React from 'react';
import EditableTimer from './EditableTimer';

const EditableTimerList = (props) => {
    const timers = props.timers;
    const timersUI = timers.map(t => {
        return (
            <EditableTimer 
                id={ t.id }
                title={ t.title }
                project={ t.project }
                elapsed={ t.elapsed }
                runningSince={ t.runningSince }
                key={ t.id }
                submitEditForm={ props.submitEditForm }
                deleteTimer={ props.deleteTimer }
                startTimer={ props.startTimer }
                pauseTimer={ props.pauseTimer }
            />
        );
    });
    
    return (
        <div className="timers">
            { timersUI }
        </div>
    );
}

export default EditableTimerList;