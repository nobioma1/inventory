import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: 50,
  },
}));

const FormButton = ({ isLoading, text }) => {
  const classes = useStyles();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
      disabled={isLoading}
    >
      {isLoading ? <CircularProgress color="secondary" /> : text}
    </Button>
  );
};

export default FormButton;
