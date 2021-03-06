import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
    return (
        <div className="ui segment">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading</div>
            </div>
            { props.children }
        </div>
    );
}

Loader.propTypes = {
    children: PropTypes.element.isRequired
}

export default Loader;