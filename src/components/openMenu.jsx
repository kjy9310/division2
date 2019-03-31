import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LanguageIcon from '@material-ui/icons/Language';

class OpenMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  changeLocale = (locale) => {
    const { setLocale } = this.props;
    setLocale(locale);
    this.handleClose();
  }

  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <IconButton aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick} color="inherit" aria-label="Menu">
          <LanguageIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => { this.changeLocale('en'); }}>English</MenuItem>
          <MenuItem onClick={() => { this.changeLocale('ko'); }}>조선어</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default OpenMenu;
