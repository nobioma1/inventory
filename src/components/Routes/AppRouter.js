import React from 'react';
import { Switch } from 'react-router-dom';

import * as routes from './routes';
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import Dashboard from '../Dashboard';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';

const AppRouter = () => {
  return (
    <Switch>
      <AuthRoute exact path={routes.SIGNIN} component={SignIn} />
      <AuthRoute path={routes.SIGNUP} component={SignUp} />
      <PrivateRoute path={routes.DASHBOARD} component={Dashboard} />
      {/* <Route render={() => <Redirect to={routes.SIGNIN} />} /> */}
    </Switch>
  );
};

export default AppRouter;
