import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { useStyles } from './navBarStyle';
import routes from '../../consts/routes';

const Navbar = props => {
  const { auth, profile } = props;
  const classes = useStyles();
  const navLinks = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );

  return (
    <Container maxWidth="lg">
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link to={routes.home} className={classes.logoName}>
            inTrack
          </Link>
        </Typography>
        {navLinks}
      </Toolbar>
    </Container>
  );
};

const mapStateToProps = ({ firebase }) => {
  return {
    auth: firebase.auth,
    profile: firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
