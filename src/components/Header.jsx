import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

class NavActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
  }

  openNavDrawer = () => {
    this.setState({
      drawerOpen: true,
    });
  }

  closeNavDrawer = () => {
    this.setState({
      drawerOpen: false,
    });
  }

  render() {
    return (
      <div>
        <nav className="appbar-nav-buttons-container">
          <FlatButton
            label="HOME"
            labelStyle={{ color: '#fff' }}
            containerElement={<Link to="/" />} />
          <FlatButton
            label="ABOUT"
            labelStyle={{ color: '#fff' }}
            containerElement={<Link to="/about" />} />
        </nav>

        <IconButton
          className="appbar-nav-drawer-button"
          onTouchTap={this.openNavDrawer}>
          <MenuIcon color="#fff" />
        </IconButton>
        <Drawer
          className="appbar-nav-drawer"
          disableSwipeToOpen={true}
          width="60%"
          docked={false}
          openSecondary={true}
          open={this.state.drawerOpen}
          onRequestChange={drawerOpen => this.setState({ drawerOpen })} >
          <AppBar
            showMenuIconButton={false}
            title="Pudding A Cat" />
          <MenuItem
            className="appbar-nav-drawer-item"
            onTouchTap={this.closeNavDrawer}
            containerElement={<Link to="/" />} >
            HOME
          </MenuItem>
          <MenuItem
            className="appbar-nav-drawer-item"
            onTouchTap={this.closeNavDrawer}
            containerElement={<Link to="/about" />} >
            ABOUT
          </MenuItem>
        </Drawer>
      </div>
    );
  }
}

const Header = props => (
  <AppBar
    className="page-header"
    showMenuIconButton={false}
    title="Pudding A Cat"
    iconElementRight={<NavActions />} />
);

export default Header;
