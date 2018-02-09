import React, { Component} from 'react';
import PropTypes from 'prop-types';

class Field extends Component {

    static propTypes = {
        name: PropTypes.string,
        value: PropTypes.string,
        validation: PropTypes.func,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string
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
        return (
            <div>
                <input
                    placeholder={ this.props.placeholder }
                    value={ this.state.value }
                    onChange={ this.onChange } 
                />
                <span style={{ color: 'red'}}>{ this.state.error }</span>
            </div>
        );
    }
}

export default Field;