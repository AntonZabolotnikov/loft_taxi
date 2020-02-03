import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from 'loft-taxi-mui-theme';
import Button from '@material-ui/core/Button';

import './header.css';

const Header = ({ setPage, setLogged }) => {
    const handleClick = page => () => setPage(page);

    function logout() {
        setLogged(false);
        setPage("login");
    }
    
    return (
        <>
            <Logo></Logo>
            <section className="header">
                <Button onClick = {handleClick("profile")} >Profile</Button>
                <Button onClick = {handleClick("map")} >Map</Button>
                <Button onClick = {handleClick("login")} >Login</Button>
                <Button onClick = {handleClick("signup")} >Signup</Button>
                <Button onClick = {logout} >logout</Button>
            </section>
        </>
    );
}

Header.propTypes = {
    setPage: PropTypes.func
}

export default Header;