import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Team from '../pages/Team';
import Player from '../pages/Player';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/team/:team_id" exact component={Team} />
    <Route path="/player/:player_id" exact component={Player} />
  </Switch>
);

export default Routes;
