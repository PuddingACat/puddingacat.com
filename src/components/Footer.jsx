import React from 'react';
import PropTypes from 'prop-types';

import PuddingIcon from '../assets/favicon.png';
import GitHubIcon from '../assets/image/GitHub-Mark-Light-64px.png';

const Footer = ({ location }) => {
  const showGitHub = location.pathname === '/about';
  return (
    <footer className="page-footer">
      <p className="footer-text">Hand crafted with love by SEAN & LILLIAN</p>
      <img className="footer-icon footer-pudding-icon" src={PuddingIcon} />
      {showGitHub &&
        <a
          href="//github.com/Puuuudding/puddingacat.com"
          target="_blank">
          <img className="footer-icon footer-github-icon" src={GitHubIcon} />
      </a>}
    </footer>
  );
};

Footer.propTypes = {
  location: PropTypes.object,
};

export default Footer;
