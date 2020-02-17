import React from 'react';
import {
  TextField, Typography, Grid, Paper, Button,
} from '@material-ui/core';
import styles from './styles/SearchBox';

function SearchBox() {
  return (
    <Grid container justify="center">
      <Grid justify="center" alignItems="center" container item xs={8}>
        <Paper style={styles.paper}>
          <Grid container direction="column" item justify="center" alignItems="center" xs={12}>
            <Grid item xs={4}>
              <Typography variant="h6" align="right">Let's Check</Typography>
            </Grid>
            <Grid container justify="center" item xs={4} spacing={2}>
              <Grid item xs={8}>
                <TextField size="small" style={styles.searchField} variant="outlined" helperText="Ex: Gyarados" />
              </Grid>
              <Grid item xs={4}>
                <Button style={styles.searchButton} variant="contained" color="primary">Search</Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SearchBox;
