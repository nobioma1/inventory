import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

import { useStyles } from '../auth/authStyles';

const ProductForm = props => {
  const classes = useStyles();
  const { update, addProduct, categoryName, productById, isLoading } = props;

  const [product, setProduct] = useState({
    name: '',
    model: '',
    serial: '',
    category: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    if (productById) {
      setProduct(prev => ({
        ...prev,
        ...productById,
        updatedAt: new Date(),
      }));
    }
  }, [productById]);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, model, serial, category } = product;
    const formIsValid =
      name.trim() && model.trim() && serial.trim() && category.trim();
    if (formIsValid) {
      setError('');
      return chooseFormAction();
    }
    return setError('All Form Fields are Required');
  };

  const chooseFormAction = () => {
    if (!props.update) {
      addProduct(product);
    } else {
      update(product);
    }
  };

  const inputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        {error && <p>{error}</p>}
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Product Name"
          name="name"
          autoComplete="productName"
          onChange={inputChange}
          value={product.name}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="model"
          label="Product Model"
          name="model"
          autoComplete="model"
          onChange={inputChange}
          value={product.model}
        />
        {!categoryName && (
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="category"
            label="Product Category"
            name="category"
            autoComplete="category"
            onChange={inputChange}
            value={product.category}
          />
        )}
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="serial"
          label="Product Serial"
          name="serial"
          autoComplete="serial"
          onChange={inputChange}
          value={product.serial}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={isLoading}
        >
          {update
            ? 'Save Changes'
            : categoryName
            ? `Add New to ${categoryName}`
            : 'Add New'}
        </Button>
      </form>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.products.isLoading,
  };
};

export default connect(
  mapStateToProps,
  {},
)(ProductForm);
