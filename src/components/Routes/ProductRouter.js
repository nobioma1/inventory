import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as routes from './routes';
import Home from '../Home';
import AddProduct from '../Products/AddProduct';
import CategoryList from '../CategoryList';
import ProductList from '../Products/ProductList';
import UpdateProduct from '../Products/UpdateProduct';
import Search from '../Search';
import ProductDetail from '../Products/ProductDetail';

const ProductRouter = () => {
  return (
    <Switch>
      <Route 
        exact 
        path={routes.HOME} 
        component={Home} 
      />
      <Route 
        path={routes.ADDPRODUCT} 
        component={AddProduct} 
      />
      <Route 
        path={routes.CATEGORYLIST} 
        component={CategoryList} 
      />
      <Route 
        path={routes.SEARCH} 
        component={Search} 
      />
      <Route
        exact
        path={`${routes.DASHBOARD}/:category`}
        component={ProductList}
      />
      <Route
        exact
        path={`${routes.DASHBOARD}/:category/:productId`}
        component={ProductDetail}
      />
      <Route
        exact
        path={`${routes.DASHBOARD}/:category/:productId/edit`}
        component={UpdateProduct}
      />
    </Switch>
  );
};

export default ProductRouter;
