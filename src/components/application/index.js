import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from 'components/home';

const Application = () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
);

export default Application;
