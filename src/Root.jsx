import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import AsyncComponent from './AsyncComponent';

const Home = AsyncComponent(() => (
  import('./components/Home').then(module => module.default)
));
const About = AsyncComponent(() => (
  import('./components/About').then(module => module.default)
));

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />

        <Footer />
      </div>
    );
  }
}

export default Root;
