import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/Main';
import CategoryPage from './components/CategoryPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CategoryPage} />
  </Route>
);
