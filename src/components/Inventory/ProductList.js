import React from 'react';
import ProductSummary from './ProductSummary';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>All Products</h2>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {products &&
          products.map(product => {
            return (
              <Link
                style={{ textDecoration: 'none' }}
                to={`/product/${product.id}`}
                key={product.id}
              >
                <ProductSummary product={product} />
              </Link>
            );
          })}
      </Grid>
    </div>
  );
};

export default ProductList;
