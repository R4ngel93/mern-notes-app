import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from './protectRoutes.js';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (
      isLogin() ?
        <Component {...props} />
        : <Redirect to="/exception" />
    )} />
  );
}

export default PrivateRoute;