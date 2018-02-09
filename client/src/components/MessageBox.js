import React from 'react';
import PropTypes from 'prop-types';

const MessageBox = (props) => {
    return (
        <div class="ui negative message mini">
            <i class="close icon"></i>
            <div class="header">
                { props.title }
            </div>
            <p>{ props.message }</p>
        </div>
    );
}

MessageBox.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string
}

export default MessageBox;