import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AgencyPage from './components/agency/AgencyPage';
import rangePage from './components/range/rangePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="configureHelpfulLocations" component={AgencyPage} />
    <Route path="range" component={rangePage} />
  </Route>
);
