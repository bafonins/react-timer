import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import { isEmptyString } from '../utils/timers';

class TimerForm extends Component {

    static propTypes = {
        closeEditForm: PropTypes.func,
        submitEditForm: PropTypes.func,
        title: PropTypes.string,
        project: PropTypes.string,
        id: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            fields: {
                title: this.props.title || '',
                project: this.props.project || ''
            },
            fieldErrors: {}
        };
    }

    /**
     * Validates values of the form. Returns {@code true} if the form cotnains
     * wrong data and the submit button should be disabled, {@code false} otherwise.
     */
    disableSubmit = () => {
        const title = this.state.fields.title;
        const project = this.state.fields.project;
        const fieldErrors = this.state.fieldErrors;
        const errs = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

        if (!title) return true;
        if (!project) return true;
        if (errs.length) return true;

        return false;
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        this.props.submitEditForm({
            id: this.props.id,
            title: this.state.fields.title,
            project: this.state.fields.project
        });
    }

    onInputChange = (name, value, error) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({
            fields, fieldErrors
        });
    }

    render() {
        const isEdit = this.props.id || false;
        const submitBtnText = isEdit
            ? 'Edit'
            : 'Create';

        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form">
                        <form onSubmit= { this.handleFormSubmit }>
                            <Field 
                                placeholder="Title"
                                name="title"
                                label="Title"
                                value={ this.state.fields.title }
                                onChange= { this.onInputChange }
                                validation= {(val) => { return isEmptyString(val) ? 'Field cannot be empty' : false}}
                            />
                            <Field 
                                placeholder="Project"
                                name="project"
                                label="Project"
                                value={ this.state.fields.project }
                                onChange={ this.onInputChange }
                                validation= {(val) => { return isEmptyString(val) ? 'Field cannot be empty' : false}} 
                            />                                   
                            <div className="ui two bottom">
                                <button 
                                    className={ "ui basic primary button left floated" }
                                    type="submit"
                                    disabled={ this.disableSubmit() }
                                >
                                    { submitBtnText }
                                </button>
                                <button 
                                    className="ui basic negative button right floated" 
                                    onClick={ this.props.closeEditForm }
                                    type="button"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerForm;