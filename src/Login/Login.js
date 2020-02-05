import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 300,
      },
    },
  }));

const Login = ({ name, submitLogin }) => {
    const classes = useStyles();

    const style = {
        textAlign: "center"
    };

    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={6} sm={6}>
                <h2 style={ style }>{ name }</h2>
            </Grid>
            <Grid item xs={6} sm={6} style={ style }>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={ submitLogin }>
                    <TextField name="login" id="standard-basic" label="email"/>
                    <TextField name="password" type="password" id="standard-basic_2" label="password"/>
                    <Button type="submit">Sign in</Button>
                </form>
            </Grid>
        </Grid>
    )
}

Login.defaultProps = {
    name: "Test text",
    submitLogin: () => {}
}

Login.propTypes = {
    name: PropTypes.string,
    submitLogin: PropTypes.func
}

export default Login;