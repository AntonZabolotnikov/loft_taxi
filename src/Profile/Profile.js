import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ name }) => {
    return (
        <h1>{ name }</h1>
    )
}

Profile.defaultProps = {
    name: "Test text"
}

Profile.propTypes = {
    name: PropTypes.string
}

export default Profile;