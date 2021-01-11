import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthLayout from '../pages/layouts/auth';
import DefaultLayout from '../pages/layouts/default';

import DashboardLayout from '../pages/layouts/adm/dashboardLayout';
import MainLayout from '../pages/layouts/adm/mainLayout';

import store from '../store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  isAdmin,
  ...rest
}) {
  const { signed } = store.getState().auth.signed;
  window.console.log(signed);
  let Layout = DefaultLayout;
  if (isAdmin) {
    Layout = signed ? DashboardLayout : MainLayout;
  } else {
    Layout = signed ? DefaultLayout : AuthLayout;
  }
  if (!signed && isPrivate) {
    return isAdmin ? <Redirect to='/adm/login' /> : <Redirect to='/login' />;
  }
  if (signed && !isPrivate) {
    return isAdmin ? <Redirect to='/adm' /> : <Redirect to='/' />;
  }
  /* eslint-disable react/jsx-props-no-spreading */
  return (
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
  isAdmin: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
RouteWrapper.defaultProps = {
  isPrivate: false,
  isAdmin: false,
};
