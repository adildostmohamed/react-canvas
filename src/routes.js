import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//import the components required
import App from 'components/App';

const routes = (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={App} />
    </Route>
  </Router>
);

export default routes;
