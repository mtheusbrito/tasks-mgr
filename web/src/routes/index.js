import { Switch } from 'react-router-dom';
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
    <Switch>
      <Route path='/' exact component={Dashboard} isPrivate />
      <Route path='/meuperfil' component={Profile} isPrivate />
      <Route path='/login' component={SignIn} />
      <Route path='/register' component={SignUp} />

      <Route path='/adm' exact component={DashboardAdm} isAdmin isPrivate />
      <Route path='/adm/login' component={LoginAdm} isAdmin />

      {/* <Route path='*' component={NotFound} /> */}
    </Switch>
  );
}
