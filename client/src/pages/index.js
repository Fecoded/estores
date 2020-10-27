import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './auth/Login';
import Register from './auth/Register';
import HomePage from './home/homePage';

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </Switch>
  </Fragment>
);

export default Routes;
