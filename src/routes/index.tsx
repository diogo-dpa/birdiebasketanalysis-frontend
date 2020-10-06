import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Team from '../pages/Team';
import Player from '../pages/Player';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/team" exact component={Team} />
    <Route path="/player" exact component={Player} />
  </Switch>
);

export default Routes;
