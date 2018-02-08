import React, { Component } from 'react';
import TimerForm from './TimerForm';
import PropTypes from 'prop-types';

class ToggleableTimerForm extends Component {

    static propTypes = {
        submitEditForm: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    openEditForm = () => {
        this.setState({ isOpen: true });
    }

    closeEditForm = () => {
        this.setState({ isOpen: false });
    }

    submitEditForm = (timer) => {
        this.props.submitEditForm(timer);
        this.setState({ isOpen: false });
    }

    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    closeEditForm={ this.closeEditForm }
                    submitEditForm={ this.submitEditForm }
                    title={ this.props.title }
                    project={ this.props.project }
                />
            );
        } else {
            return (
                <div className="ui basic content center aligned segment">
                <button
                    onClick={ this.openEditForm }
                    className="ui basic button icon"
                >
                    <i className="plus icon" />
                </button>
                </div>
            );
        }
    }
}

export default ToggleableTimerForm;