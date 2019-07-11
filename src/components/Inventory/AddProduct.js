import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { createProduct } from '../../actions/product';
import routes from '../../consts/routes';
import ProductForm from './ProductForm';

const AddProduct = props => {
  const { auth, createProduct, history } = props;

  if (!auth.uid) return <Redirect to={routes.signIn} />;

  const addProduct = (product) => {
    createProduct(product);
    history.push(routes.home);
  }
  
  return (
    <div>
      <h5>Add New Product</h5>
      <ProductForm addProduct={addProduct} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(
  mapStateToProps,
  { createProduct },
)(AddProduct);
