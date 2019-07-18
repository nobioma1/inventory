import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import {HOME} from './routes';

const AuthRoute = props => {
  const { auth, component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props => {
        if (auth.uid) {
          return <Redirect to={HOME} />;
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

export default connect(mapStateToProps)(AuthRoute);
