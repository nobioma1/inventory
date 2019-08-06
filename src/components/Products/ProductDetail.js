import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { DASHBOARD } from '../Routes/routes';
import { removeProduct, updateProduct } from '../../actions/product';
import SerialsList from '../shared/SerialsList';
import ConfirmDialog from '../shared/ConfirmDialog';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const ProductDetail = props => {
  const classes = useStyles();
  const { product, removeProduct, history } = props;

  const removeHandler = id => {
    removeProduct(id).then(res => {
      if (res) {
        history.push(`${DASHBOARD}/${product.category}`);
      }
    });
  };

  return (
    <div>
      {product && (
        <Container component="main" maxWidth="sm">
          <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
              {product.name}
            </Typography>
            <Typography component="p">
              <u>Category:</u> {product.category}
            </Typography>
            <Typography component="p">
              <u>Model:</u> {product.model}
            </Typography>
            <Typography component="p">
              <u>Description:</u> {product.description}
            </Typography>
            <Typography component="p">
              {moment(product.createdAt.toDate()).format(
                'MMMM Do YYYY, h:mm a',
              )}
            </Typography>
            <Grid container alignItems="center">
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={() =>
                  history.push(
                    `${DASHBOARD}/${product.category}/${product.id}/edit`,
                  )
                }
              >
                Edit
              </Button>
              <ConfirmDialog confirmAction={() => removeHandler(product.id)} />
            </Grid>

            <SerialsList serials={product.serials} />
          </Paper>
        </Container>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    firestore: {
      ordered: { products },
    },
  } = state;
  const productId = ownProps.match.params.productId;
  const product = products && products.find(item => item.id === productId);
  return { product };
};

export default connect(
  mapStateToProps,
  { removeProduct, updateProduct },
)(ProductDetail);
