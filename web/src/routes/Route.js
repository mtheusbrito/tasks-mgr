import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthLayout from '../pages/layouts/auth';
import DefaultLayout from '../pages/layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;
  if (!signed && isPrivate) {
    return <Redirect to='/login' />;
  }
  if (signed && !isPrivate) {
    return <Redirect to='/' />;
  }
  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    /* eslint-disable react/jsx-props-no-spreading */
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
RouteWrapper.defaultProps = { isPrivate: false };
