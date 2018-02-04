import React, { Component } from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm

                />
            );
        } else {
            return (
                <div className='ui basic content center aligned segment'>
                <button
                    className='ui basic button icon'
                >
                    <i className='plus icon' />
                </button>
                </div>
            );
        }
    }
}

export default ToggleableTimerForm;