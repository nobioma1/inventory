import React from 'react';
import { connect } from 'react-redux';

import { createProduct } from '../../actions/product';
import { DASHBOARD } from '../Routes/routes';
import ProductForm from './ProductForm';
import Title from '../Title';

const AddProduct = props => {
  const {
    createProduct,
    history,
    location: { state },
  } = props;
  const category = state ? state.category : null;

  const addProduct = product => {
    if (category) {
      product.category = category;
    }
    createProduct(product).then(res => {
      if (res) {
        history.push(`${DASHBOARD}/${product.category}`);
      }
    });
  };

  return (
    <div>
      <Title title="Add Product" />
      <ProductForm addProduct={addProduct} categoryName={category} />
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { createProduct },
)(AddProduct);
