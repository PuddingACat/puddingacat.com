import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Root from './Root';
import './main.less';

injectTapEventPlugin();

const App = () => (
  <Router>
    <MuiThemeProvider>
      <Root />
    </MuiThemeProvider>
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
