import React, { Component } from 'react';

class TimerForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title || '',
            project: this.props.project || ''
        };
    }

    render() {
        return (
            <div className="ui centered card">
                <div className="content">
                    <div className="ui form">
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
                            <button className="ui basic primary button">
                                Submit
                            </button>
                            <button className="ui basic negative button" onClick={ this.props.closeEditForm }>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerForm;