import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { signIn } from '../../actions/auth';
import * as routes from '../Routes/routes';
import { useStyles } from './authStyles';
import Header from '../Header';

const SignIn = props => {
  const classes = useStyles();
  const { authError, signIn, isLoading } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    signIn({ email, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Header />
      <div className={classes.paper}>
        <Typography component="h1" variant="h6">
          Sign in
        </Typography>
        <div>{authError ? <p>{authError}</p> : null}</div>

        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            autoComplete="current-password"
          />

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
              'Sign In'
            )}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link className={classes.link} to="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link className={classes.link} to={routes.SIGNUP} variant="body2">
                Don't have an account?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

SignIn.propTypes = {
  authError: PropTypes.string,
  signIn: PropTypes.func,
  isLoading: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
    authError: state.auth.error,
  };
};

export default connect(
  mapStateToProps,
  { signIn },
)(SignIn);
