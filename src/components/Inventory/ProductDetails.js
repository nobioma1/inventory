import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';
import { FaTrash, FaEdit } from 'react-icons/fa';

import routes from '../../consts/routes';
import { removeProduct, updateProduct } from '../../actions/product';
import ProductForm from './ProductForm';

class ProductDetails extends Component {
  state = {
    edit: false,
  };

  removeHandler = id => {
    this.props.removeProduct(id);
    this.props.history.push(routes.home);
  };

  updateHandler = (product) => {
    const id = this.props.match.params.id
    this.props.updateProduct(id, product);
    this.toggleForm()
  };

  toggleForm = () => {
    this.setState(prev => ({ edit: !prev.edit }));
  };

  render() {
    const { product, auth, match } = this.props;

    if (!auth.uid) return <Redirect to={routes.signIn} />;

    if (product) {
      if (this.state.edit) {
        return <ProductForm update={this.updateHandler} product={product} />;
      } else {
        return (
          <div>
            <div>
              <span>{product.name}</span>
              <p>{product.model}</p>
              <p>{product.serial}</p>
              <p>{product.category}</p>
            </div>
            <div>
              <small>
                {moment(product.createdAt.toDate()).format(
                  'dddd, MMMM Do YYYY, h:mm a',
                )}
              </small>
            </div>
            <div>
              <button onClick={this.toggleForm}>
                <FaEdit />
              </button>
              <button onClick={() => this.removeHandler(match.params.id)}>
                <FaTrash />
              </button>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div>
          <p>Loading Product...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const products = state.firestore.data.products;
  const product = products ? products[id] : null;
  return {
    product,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(
    mapStateToProps,
    { removeProduct, updateProduct },
  ),
  firestoreConnect([
    {
      collection: 'products',
    },
  ]),
)(ProductDetails);
