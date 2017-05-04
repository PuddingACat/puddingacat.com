import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}

export default Root;
