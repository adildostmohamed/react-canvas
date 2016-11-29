import React from 'react';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

//import the components required
import App from 'components/App';
import PageWrapper1 from 'components/layout/PageWrapper1';
import PageWrapper2 from 'components/layout/PageWrapper2';
import PageWrapper3 from 'components/layout/PageWrapper3';
import PageWrapper4 from 'components/layout/PageWrapper4';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PageWrapper1} />
      <Route path="two" component={PageWrapper2} />
      <Route path="three" component={PageWrapper3} />
      <Route path="four" component={PageWrapper4} />
    </Route>
  </Router>
);

export default routes;
