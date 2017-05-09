import React from 'react';

import GitHubMark from '../assets/image/GitHub-Mark-Light-64px.png';

const Footer = props => (
  <footer className="page-footer">
    <p className="footer-text">Hand crafted with love by SEAN & LILLIAN</p>
    <a
      href="//github.com/Puuuudding/puddingacat.com"
      target="_blank">
      <img className="footer-github-icon" src={GitHubMark} />
    </a>
  </footer>
);

export default Footer;
