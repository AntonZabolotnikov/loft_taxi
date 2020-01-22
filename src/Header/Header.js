import React from 'react';
import './header.css';

export const Header = ({ page }) => {
    const PAGE = {
        profile: () => page("profile"),
        map: () => page("map"),
        login: () => page("login"),
        signup: () => page("signup")
    };

    return (
        <section className="header">
            <button onClick = {PAGE.profile} >Profile</button>
            <button onClick = {PAGE.map} >Map</button>
            <button onClick = {PAGE.login} >Login</button>
            <button onClick = {PAGE.signup} >Signup</button>
        </section>
    );
}