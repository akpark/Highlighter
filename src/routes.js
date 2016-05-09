import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './components/wrapper';

export default (
  <Route path='/index.html' component={App}>
    <IndexRoute component={App} />
    <Route path="/tags/:name" />
  </Route>
)
