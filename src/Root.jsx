import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import Header from './components/Header';

class Root extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Header}>
          <IndexRoute getComponent={(nextState, cb) => (
            import('./components/Home').then(module => cb(null, module.default))
          )} />
          <Route path="about" getComponent={(nextState, cb) => (
            import('./components/About').then(module => cb(null, module.default))
          )} />
        </Route>
      </Router>
    );
  }
}

export default Root;
