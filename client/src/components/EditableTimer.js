import React, { Component } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';
import PropTypes from 'prop-types';

class EditableTimer extends Component {

    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        project: PropTypes.string,
        elapsed: PropTypes.number,
        runningSince: PropTypes.number,
        submitEditForm: PropTypes.func,
        deleteTimer: PropTypes.func,
        startTimer: PropTypes.func,
        pauseTimer: PropTypes.func
    }

    constructor(props) {
        super(props);

        this.state = {
            isEditFormOpen: false
        };
    }

    openEditForm = () => {
        this.setState({ isEditFormOpen: true });
    }

    closeEditForm = () => {
        this.setState({ isEditFormOpen: false });
    }

    submitEditForm = (timer) => {
        this.props.submitEditForm(timer);
        this.setState({ isEditFormOpen: false });
    }

    render() {
        if (this.state.isEditFormOpen) {
            return (
                <TimerForm 
                    id={ this.props.id }
                    title={ this.props.title }
                    project={ this.props.project }
                    submitEditForm={ this.submitEditForm }
                    closeEditForm={ this.closeEditForm }
                />
            );
        } else {
            return (
                <Timer 
                    id={ this.props.id }
                    title={ this.props.title }
                    project={ this.props.project }
                    elapsed={ this.props.elapsed }
                    runningSince={ this.props.runningSince }
                    openEditForm={ this.openEditForm }
                    deleteTimer={ this.props.deleteTimer }
                    startTimer={ this.props.startTimer }
                    pauseTimer={ this.props.pauseTimer }
                />
            );
        }
    }
}

export default EditableTimer;