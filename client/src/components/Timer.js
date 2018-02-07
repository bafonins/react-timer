import React, { Component } from 'react';
import { getElapsedTimeString } from '../utils/timers';
import TimerButton from './TimerButton';
import PropTypes from 'prop-types';

class Timer extends Component {

    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        project: PropTypes.string,
        elapsed: PropTypes.number,
        runningSince: PropTypes.number,
        openEditForm: PropTypes.func,
        deleteTimer: PropTypes.func,
        startTimer: PropTypes.func,
        pauseTimer: PropTypes.func
    }

    startTimer = () => {
        this.props.startTimer(this.props.id);
    }

    pauseTimer = () => {
        this.props.pauseTimer(this.props.id);
    }

    componentDidMount() {
        this.intervalUpdateID = setInterval(() => this.forceUpdate(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalUpdateID);
    }
    
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
                <TimerButton
                    isOn={ !!this.props.runningSince } 
                    startTimer={ this.startTimer }
                    pauseTimer={ this.pauseTimer }    
                />
            </div>
        );
    }
}

export default Timer;