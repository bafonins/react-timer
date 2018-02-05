import React, { Component } from 'react';
import { getElapsedTimeString } from '../utils/timers';

class Timer extends Component {
    
    render() {
        const elapsedVal = getElapsedTimeString({
            elapsed: this.props.elapsed,
            runningSince: this.props.runningSince
        });

        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="header">
                        { this.props.title }
                    </div>
                    <div className="meta">
                        { this.props.project }
                    </div>
                    <div className="center aligned description">
                        <h2>
                            { elapsedVal }
                        </h2>
                    </div>
                    <div className="extra content">
                        <span 
                            className="right floated trash icon"
                            onClick={ () => { this.props.deleteTimer(this.props.id) }}
                            >
                            <i className="trash icon" />
                        </span>
                        <span 
                            className="right floated edit icon"
                            onClick={ () => {this.props.openEditForm() } }>
                            <i className="edit icon" />
                        </span>
                    </div>
                </div>
                <div className="ui bottom attached green basic button">
                    Start
                </div>
            </div>
        );
    }
}

export default Timer;