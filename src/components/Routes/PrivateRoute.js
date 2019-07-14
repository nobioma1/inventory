import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import routes from './routes';

const PrivateRoute = props => {
  const { auth, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props => {
        if (!auth.uid) {
          return <Redirect to={routes.signIn} />;
        } 
        
        return <Component {...props} />;
      }}
    />
  );
};


const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
