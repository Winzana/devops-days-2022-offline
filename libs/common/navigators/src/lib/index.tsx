import React from 'react';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from '@screens';

export const Navigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
      </Routes>
    </Router>
  );
};
