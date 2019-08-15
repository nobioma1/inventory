import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Fuse from 'fuse.js';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Title from '../Title';
import ProductsTable from '../shared/ProductsTable';

const Search = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const fuseOptions = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 50,
    maxPatternLength: 12,
    minMatchCharLength: 3,
    keys: ['name', 'category', 'serials', 'model'],
  };

  const fuse = new Fuse(products, fuseOptions);
  const data = searchTerm ? fuse.search(searchTerm).reverse() : [];

  return (
    <Container component="main" maxWidth="md">
      <Title title="Search Inventory" />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="searchTerm"
        label="Search"
        name="searchTerm"
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <Box display="flex" flexwrap="wrap">
        {data.length > 0 
          ? (
          <ProductsTable products={data} />
        ) : searchTerm.length > 0 && data.length < 1 
          ? (
          <Typography variant="body2" color="secondary" component="p">
            {`No Item "${searchTerm}" found`} 
          </Typography>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            Enter a search (product name, serial, model, category)
          </Typography>
        )}
      </Box>
    </Container>
  );
};

Search.propTypes = {
  products: PropTypes.array,
};

const mapStateToProps = ({
  firestore: {
    ordered: { products },
  },
}) => ({ products });

export default connect(
  mapStateToProps,
  {},
)(Search);
