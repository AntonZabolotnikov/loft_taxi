import React from 'react';
import './header.css';

export const Header = ({ Page }) => {
    return (
        <section className="header">
            <button onClick = {() => Page("profile")} >Profile</button>
            <button onClick = {() => Page("map")} >Map</button>
            <button onClick = {() => Page("login")} >Login</button>
            <button onClick = {() => Page("signup")} >Signup</button>
        </section>
    );
}