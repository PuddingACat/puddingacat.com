import React from 'react';

import Header from './components/Header';
import HomePage from './components/HomePage';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default Root;
