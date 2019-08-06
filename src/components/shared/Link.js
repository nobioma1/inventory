import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: '#3f51b5',
  },
}));

const Link = ({ text, to }) => {
  const classes = useStyles();

  return (
    <Grid item>
      <RouterLink className={classes.link} to={to} variant="body2">
        {text}
      </RouterLink>
    </Grid>
  );
};

export default Link;
