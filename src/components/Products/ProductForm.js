import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { useStyles } from '../auth/authStyles';
import FormButton from '../shared/FormButton';
import SerialsList from '../shared/SerialsList';

const ProductForm = props => {
  const classes = useStyles();
  const { update, addProduct, categoryName, productById, isLoading } = props;

  const [serial, setSerial] = useState('');
  const [product, setProduct] = useState({
    name: '',
    model: '',
    serials: [],
    category: '',
    description: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    if (categoryName) {
      setProduct(prev => ({
        ...prev,
        category: categoryName,
      }));
    }
    if (productById) {
      setProduct(prev => ({
        ...prev,
        ...productById,
        updatedAt: new Date(),
      }));
    }
  }, [categoryName, productById]);

  const handleSubmit = e => {
    e.preventDefault();
    const { name, model, category } = product;
    const formIsValid = name.trim() && model.trim() && category.trim();
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

  const addSerial = () => {
    if (serial.length > 2) {
      setSerial('');
      setProduct(prev => ({
        ...prev,
        serials: [...prev.serials, serial],
      }));
    }
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
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="description"
          label="Description"
          name="description"
          onChange={inputChange}
          value={product.description}
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
          value={serial}
          onChange={e => setSerial(e.target.value)}
        />
        <Grid container justify="flex-end">
          <Button
            size="small"
            variant="outlined"
            color="primary"
            onClick={addSerial}
          >
            Add Serial
          </Button>
        </Grid>

        <SerialsList serials={product.serials} />

        <FormButton
          isLoading={isLoading}
          text={
            update
              ? 'Save Changes'
              : categoryName
              ? `Add New to ${categoryName}`
              : 'Add New'
          }
        />
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
