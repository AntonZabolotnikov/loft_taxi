import React from 'react';
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

const Login = ({ submitLogin }) => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={4}>
                    <form className={classes.root} noValidate autoComplete="off" onSubmit={ submitLogin }>
                        <TextField name="login" id="standard-basic" label="email"/>
                        <TextField name="password" type="password" id="standard-basic_2" label="password"/>
                        <Button type="submit">Sign in</Button>
                    </form>
            </Grid>
        </Grid>
    )
}

export default Login;