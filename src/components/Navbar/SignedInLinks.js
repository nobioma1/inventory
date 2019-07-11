import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { signOut } from '../../actions/auth';
import routes from '../../consts/routes';
import { useStyles } from './navBarStyle';

const SignedInLinks = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <NavLink className={classes.toolbarLink} to={routes.addProduct}>
        Add Product
      </NavLink>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <div className={classes.dropdown}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <Button onClick={handleClick} className={classes.initials}>
              {props.profile.initials}
            </Button>
            {open ? (
              <Paper className={classes.paper}>
                <Link
                  to=""
                  className={classes.dropdownItems}
                  onClick={props.signOut}
                >
                  Log Out
                </Link>
              </Paper>
            ) : null}
          </div>
        </ClickAwayListener>
      </div>
    </React.Fragment>
  );
};

export default connect(
  null,
  { signOut },
)(SignedInLinks);
