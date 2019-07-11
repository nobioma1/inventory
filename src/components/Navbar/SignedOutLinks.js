import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../consts/routes';
import { useStyles } from './navBarStyle';

const SignedOutLinks = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavLink className={classes.toolbarLink} to={routes.signup}>Signup</NavLink>
      <NavLink className={classes.toolbarLink} to={routes.signIn}>Sign In</NavLink>
    </React.Fragment>
  );
};

export default SignedOutLinks;
