import React from 'react';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from '@screens/home';
import { Add } from '@screens/add';

export const Navigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </Router>
  );
};
