import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  // redirect user to login if he is not logged in and tries to access private
  // route
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // redirect signed user to dashboard
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Route
      {...rest} // copy properties from rest
      component={Component}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
