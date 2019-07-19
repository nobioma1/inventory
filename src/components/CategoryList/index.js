import React from 'react';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';

import Category from './Category';
import Title from '../Title';
import Empty from '../Empty';

const CategoryList = props => {
  const { categories } = props;
  return (
    <React.Fragment>
      <Title title="Categories" />
      <Box display="flex" flexWrap="wrap">
        {categories && 
          categories.length > 0 ? (
          categories.map(category => (
            <Category key={category} category={category} />
          ))
        ) : (
          <Empty />
        )}
      </Box>
    </React.Fragment>
  );
};

const getUniqueCategories = products => {
  if (products) {
    const categories = products.map(product => product.category);
    return categories.filter((category, index) => {
      return categories.indexOf(category) === index;
    });
  }
};

const mapStateToProps = state => {
  const {
    firestore: {
      ordered: { products },
    },
  } = state;
  const categories = getUniqueCategories(products);
  return {
    categories,
  };
};

export default connect(mapStateToProps)(CategoryList);
