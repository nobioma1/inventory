import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Navbar from './Navbar';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import AddProduct from './Inventory/AddProduct';
import ProductDetails from './Inventory/ProductDetails';
import Home from './Home';
import routes from '../consts/routes';

class App extends Component {
  render() {
    return (
      <Router>
        <CssBaseline />
        <Navbar />
        <Container maxWidth="md">
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={`${routes.product}/:id`} component={ProductDetails} />
            <Route path={routes.signIn} component={SignIn} />
            <Route path={routes.signup} component={SignUp} />
            <Route path={routes.addProduct} component={AddProduct} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
