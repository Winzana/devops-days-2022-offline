import React from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from '@pam/screens/home';

export const Navigator = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};
