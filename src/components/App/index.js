import React from '../../../node_modules/react';
import { BrowserRouter as Router, Route } from '../../../node_modules/react-router-dom';
import { Container } from '../../../node_modules/semantic-ui-react';

import routes from '../../consts/routes';
import Login from '../Login';
import NavBar from '../NavBar';
import SignUp from '../SignUp';
import AddInventory from '../AddInventory';
import Home from '../Home';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Container text style={{ marginTop: '4em' }}>
        <Route path={routes.login} component={Login} />
        <Route path={routes.signup} component={SignUp} />
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.addInventory} component={AddInventory} />
      </Container>
    </Router>
  );
};

export default App;
