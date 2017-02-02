import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Heroes from './heroes/Heroes';
import Hero from './hero/Hero';

export default function createRoutes(history: any) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="hero/(:id)" component={Hero} />
        <IndexRoute component={Heroes} />
      </Route>
    </Router>
  )
}
