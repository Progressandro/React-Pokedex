import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';
import styles from './styles/NavBar';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={styles.title}>
          Pokédex
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
