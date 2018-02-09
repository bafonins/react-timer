import React, { Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Field extends Component {

    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
        validation: PropTypes.func,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        label: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            value: props.value,
            error: false
        };
    }

    componentWillReceiveProps(upd) {
        this.setState({
            value: upd.value
        });
    }

    onChange = (e) => {
        const name = this.props.name;
        const value = e.target.value;
        
        let error = false;
        if (this.props.validation) {
            error = this.props.validation(value);
        }

        this.setState({ value, error });
        this.props.onChange(name, value, error);
    }

    render() {
        const inputClasses = classNames({
            'field': true,
            'error': this.state.error
        });

        return (
            <div className={ inputClasses }>
                <label htmlFor={ this.props.name }>
                    { this.props.label }
                </label>
                <input
                    type="text"
                    placeholder={ this.props.placeholder }
                    value={ this.state.value }
                    onChange={ this.onChange } 
                    name={ this.props.name }
                />
                <span style={{ color: 'red'}}>{ this.state.error }</span>
            </div>
        );
    }
}

export default Field;