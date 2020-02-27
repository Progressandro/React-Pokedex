import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import styles from './styles/NavBar';

function NavBar() {
  return (
    <AppBar position="static" style={styles.container}>
      <Toolbar style={styles.navigationBar}>
        <Typography variant="h6" style={styles.title}>
          Pokédex
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
