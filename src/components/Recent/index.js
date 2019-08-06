import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProductsTable from '../shared/ProductsTable';

const Recent = props => {
  return (
    <Grid item xs={12}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Recent Entries
      </Typography>
      <ProductsTable products={props.products} />
    </Grid>
  );
};

Recent.propTypes = {
  products: PropTypes.array,
};


const mapStateToProps = state => {
  const {
    firestore: {
      ordered: { products },
    },
  } = state;
  return {
    products,
  };
};

export default connect(mapStateToProps)(Recent);
