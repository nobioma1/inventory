import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    width: 300,
  },
  paper: {
    padding: theme.spacing(2),
    maxWidth: 300,
  },
}));

const ProductSummary = ({ product }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography gutterBottom variant="h6">
                  {product.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {product.model}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {product.category}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {moment(product.createdAt.toDate()).fromNow()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProductSummary;
