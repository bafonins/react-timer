import React, { Component } from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends Component {

    render() {
        const timers = this.props.timers || [];
        const timersUI = timers.map(t => {
            return (
                <EditableTimer 
                    id={ t.id }
                    title={ t.title }
                    project={ t.project }
                    elapsed={ t.elapsed }
                    runningSince={ t.runningSince }
                    key={ t.id }
                    submitEditForm={ this.props.submitEditForm }
                />
            );
        });
        
        return (
            <div className="timers">
                { timersUI }
            </div>
        );
    }
}

export default EditableTimerList;