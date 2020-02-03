import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 300,
      },
    },
  }));

const Login = ({ submitLogin }) => {
    const classes = useStyles();

    return (
        <section className="login-section">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={ submitLogin }>
                <TextField name="login" id="standard-basic" label="email"/>
                <TextField name="password" id="standard-basic_2" label="password"/>
                <Button type="submit">Sign in</Button>
            </form>
        </section>
    )
}

export default Login;