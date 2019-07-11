import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import Recent from './Recent';
import ProductList from '../Inventory/ProductList';
import routes from '../../consts/routes';

const Home = props => {
  const { products, auth } = props;
  if (!auth.uid) return <Redirect to={routes.signIn} />;

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.firestore.ordered.products,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'products' }]),
)(Home);
