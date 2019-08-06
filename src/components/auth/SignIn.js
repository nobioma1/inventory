import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { signIn } from '../../actions/auth';
import * as routes from '../Routes/routes';
import { useStyles } from './authStyles';
import Header from '../Header';
import FormButton from '../shared/FormButton';
import Link from '../shared/Link';

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
          <FormButton isLoading={isLoading} text="SignIn" />
          <Grid container justify="space-between">
            <Link text="Forgot Password?" to="/" />
            <Link text="Don't Have an Account?" to={routes.SIGNUP} />
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
