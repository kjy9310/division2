import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import OpenMenu from '../components/openMenu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../logo.svg';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes, localeControl } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#222' }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <a className="App-link"
            href="https://tomclancy-thedivision.ubisoft.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <img src={logo} className="App-logo" alt="logo" />
          </a>
          </Typography>
          <OpenMenu setLocale={localeControl}/>
          <Typography color="inherit">
          v 0.7<br/>by <font style={{ color: 'magenta' }}>Mak-Ka</font>
          </Typography>
          {/* <Button color="inherit">Login</Button>*/}
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
