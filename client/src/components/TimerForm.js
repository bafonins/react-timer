import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TimerForm extends Component {

    static propTypes = {
        closeEditForm: PropTypes.func,
        submitEditForm: PropTypes.func,
        title: PropTypes.string,
        project: PropTypes.string,
        id: PropTypes.string
    }

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title || '',
            project: this.props.project || ''
        };
    }

    handleFormSubmit = () => {
        this.props.submitEditForm({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project
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
                        <form onSubmit={ (e) => { e.preventDefault(); }}>
                            <div className="field">
                                <label>Title</label>
                                <input 
                                    type="text" 
                                    value={ this.state.title }
                                    onChange={ (e) => { this.setState({ title: e.target.value });}}
                                />
                            </div>
                            <div className="field">
                                <label>Project</label>
                                <input 
                                    type="text"
                                    value={ this.state.project }
                                    onChange={ (e) => { this.setState({ project: e.target.value });}}
                                />
                            </div>
                            <div className="ui two bottom">
                                <button 
                                    className="ui basic primary button left floated" 
                                    type="submit"
                                    onClick={ () => {this.handleFormSubmit()} }>
                                    { submitBtnText }
                                </button>
                                <button className="ui basic negative button right floated" onClick={ this.props.closeEditForm }>
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