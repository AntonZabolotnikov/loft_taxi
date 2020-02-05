import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from 'loft-taxi-mui-theme';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './header.css';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const Header = ({ setPage, setLogged }) => {
    const handleClick = page => () => setPage(page);
    const classes = useStyles();

    function logout() {
        setLogged(false);
        setPage("login");
    }
    
    return (
        <>
            <Logo></Logo>
            <section className="header">
                <Button variant="contained" color="primary" onClick = {handleClick("profile")} >Profile</Button>
                <Button variant="contained" color="primary" onClick = {handleClick("map")} >Map</Button>
                <Button variant="contained" color="primary" onClick = {handleClick("signup")} >Signup</Button>
                <Button variant="outlined" color="default" className={classes.button} onClick = {logout} >logout</Button>
            </section>
        </>
    );
}

Header.propTypes = {
    setPage: PropTypes.func
}

export default Header;