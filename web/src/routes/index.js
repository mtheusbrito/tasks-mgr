import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

// admin
import DashboardAdm from '../pages/Adm/Dashboard';
import LoginAdm from '../pages/Adm/Login';
// import NotFound from '../pages/NotFound';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Dashboard} isPrivate />
        <Route path='/profile' component={Profile} isPrivate />
        <Route path='/login' component={SignIn} />
        <Route path='/register' component={SignUp} />

        <Route path='/adm' exact component={DashboardAdm} isAdmin isPrivate />
        <Route path='/adm/login' component={LoginAdm} isAdmin />

        {/* <Route path='*' component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}
