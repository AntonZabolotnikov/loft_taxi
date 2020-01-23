import React from 'react';
import './header.css';

export const Header = ({ setPage }) => {
    const handleClick = page => () => setPage(page);

    return (
        <section className="header">
            <button onClick = {handleClick("profile")} >Profile</button>
            <button onClick = {handleClick("map")} >Map</button>
            <button onClick = {handleClick("login")} >Login</button>
            <button onClick = {handleClick("signup")} >Signup</button>
        </section>
    );
}