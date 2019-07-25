import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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

AddProduct.propTypes = {
  createProduct: PropTypes.func,
  history: PropTypes.shape({ shape: PropTypes.string }),
  location: PropTypes.shape({ push: PropTypes.func }),
};

export default connect(
  null,
  { createProduct },
)(AddProduct);
