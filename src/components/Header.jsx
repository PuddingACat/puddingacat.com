import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const navButtons = (
  <div>
    <nav className="appbar-nav-buttons-container">
      <FlatButton label="HOME" labelStyle={{ color: '#fff' }} href="#" />
      <FlatButton label="ABOUT" labelStyle={{ color: '#fff' }} href="#" />
    </nav>
    <IconMenu
      className="appbar-nav-icon-menu"
      iconButtonElement={<IconButton><MoreVertIcon color="#fff" /></IconButton>}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      targetOrigin={{ vertical: 'top', horizontal: 'right' }} >
      <MenuItem primaryText="HOME" />
      <MenuItem primaryText="ABOUT" />
    </IconMenu>
  </div>
);

const Header = props => (
  <AppBar
    className="page-header"
    showMenuIconButton={false}
    title="Pudding A Cat"
    iconElementRight={navButtons} />
);

export default Header;
