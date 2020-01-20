import React from 'react';
import './login.css';
import Submit from '../Components/Submit'
import Input from '../Components/Input'

export const Login = ({ setPage }) => {
    function handleClick(e) {
        e.preventDefault();
        setPage("map");
        console.log("Submit form");
    }

    return (
        <section className="login-section">
            <h1 className="login-descript__title">Login</h1>
            <form className="login-form" onSubmit={handleClick}>
                <Input descript="Name*" type="text" setClass="login-form__name"/>
                <Input descript="Pass*" type="password" setClass="login-form__pass"/>
                <Submit forms="Sign in" />
            </form>
        </section>
    )
}