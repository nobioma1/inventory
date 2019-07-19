import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { signUp } from '../../actions/auth';
import * as routes from '../Routes/routes';
import { useStyles } from './authStyles';
import Header from '../Header';

const SignUp = props => {
  const { authError, signUp, isLoading } = props;
  const classes = useStyles();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    signUp({ firstName, lastName, email, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Header />
      <div className={classes.paper}>
        <Typography component="h1" variant="h6">
          Sign up
        </Typography>
        <div>{authError ? <p>{authError}</p> : null}</div>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="First Name"
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                type="text"
                value={lastName}
                onChange={e => setLastname(e.target.value)}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress
                className={classes.progress}
                color="secondary"
              />
            ) : (
              'Create Account'
            )}
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Link to={routes.SIGNIN} className={classes.link} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
    authError: state.auth.error,
  };
};

export default connect(
  mapStateToProps,
  { signUp },
)(SignUp);
