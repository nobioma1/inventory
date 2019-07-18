import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteForever from '@material-ui/icons/DeleteForever';
import LibraryAdd from '@material-ui/icons/LibraryAdd';
import * as routes from '../Routes/routes';
import { removeCategory } from '../../actions/product';

import Box from '@material-ui/core/Box';
import Title from '../Title';
import ProductCard from './ProductCard';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  link: {
    textDecoration: 'none',
    color: 'initial',
  },
}));

const ProductList = ({ categoryProducts, match, history, removeCategory }) => {
  const classes = useStyles();
  const {
    params: { category },
  } = match;

  const deleteCategory = category => {
    removeCategory(category);
    history.push(routes.CATEGORYLIST);
  };

  return (
    <div>
      <Title title={`All ${category} Products`} />
      <Link
        to={{
          pathname: routes.ADDPRODUCT,
          state: {
            category,
          },
        }}
        className={classes.link}
      >
        <Button variant="outlined" color="primary" className={classes.button}>
          <LibraryAdd /> Add New {category}
        </Button>
      </Link>

      <Button
        variant="outlined"
        color="secondary"
        className={classes.button}
        onClick={() => deleteCategory(category)}
      >
        <DeleteForever /> Delete {category}
      </Button>

      <Box display="flex" flexWrap="wrap">
        {categoryProducts.map(product => (
          <ProductCard key={product.id} product={product} history={history} />
        ))}
      </Box>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    firestore: {
      ordered: { products },
    },
  } = state;
  const category = ownProps.match.params.category;
  const categoryProducts = products
    ? products.filter(item => item.category === category)
    : [];
  return {
    categoryProducts,
  };
};

export default connect(
  mapStateToProps,
  { removeCategory },
)(ProductList);
