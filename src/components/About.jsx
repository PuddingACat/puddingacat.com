import React from 'react';
import Paper from 'material-ui/Paper';

class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        <Paper className="about-container">
          <article>
            <h1>About Us</h1>
            <p>Hello, thank you for visiting our website.</p>
          </article>
        </Paper>
      </div>
    );
  }
}

export default About;
