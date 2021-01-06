import { Switch } from 'react-router-dom';
import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Route from './Route';
// import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Dashboard} isPrivate />
      <Route path='/profile' component={Profile} isPrivate />
      <Route path='/login' component={SignIn} />
      <Route path='/register' component={SignUp} />

      {/* <Route path='/' component={NotFound} /> */}
    </Switch>
  );
}
