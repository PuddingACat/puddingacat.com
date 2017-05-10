import React from 'react';

import ArrowDownIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <div className="home-title-img">
          <ArrowDownIcon className="home-title-more-icon" />
        </div>
      </div>
    );
  }
}

export default Home;
