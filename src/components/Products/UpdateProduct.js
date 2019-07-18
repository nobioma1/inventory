import React from 'react';
import { connect } from 'react-redux';

import { updateProduct } from '../../actions/product';
import ProductForm from './ProductForm';
import Title from '../Title';
import { DASHBOARD } from '../Routes/routes';

const UpdateProduct = props => {
  const {
    updateProduct,
    history,
    productById,
    match: { params },
  } = props;

  const update = product => {
    console.log(product)
    updateProduct(params.productId, product);
    history.push(`${DASHBOARD}/${params.category}`);
  };

  return (
    <div>
      <Title title="Update Product" />
      <ProductForm update={update} productById={productById} />
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
  const productById = products && products.find(item => item.id === productId);
  return { productById };
};

export default connect(
  mapStateToProps,
  { updateProduct },
)(UpdateProduct);
