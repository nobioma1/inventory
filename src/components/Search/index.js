import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';

import Title from '../Title';

const Search = props => {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container component="main" maxWidth="xs">
      <Title title="Search Inventory" />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        id="searchTerm"
        label="Search"
        name="searchTerm"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </Container>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {},
)(Search);
