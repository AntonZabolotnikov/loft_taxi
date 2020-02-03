import React from 'react';
import PropTypes from 'prop-types';

const Signup = ({ name }) => {
    return (
        <h1>{ name }</h1>
    )
}

Signup.propTypes = {
    name: PropTypes.string
}

export default Signup;