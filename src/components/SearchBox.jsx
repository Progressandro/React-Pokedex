import React, { useState } from 'react';
import { TextField, Typography, Grid, Paper, Button } from '@material-ui/core';
import JSONRequest from '../utils/requests';
import styles from './styles/SearchBox';

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchByName = async () => {
    try {
      const data = await JSONRequest(
        `https://pokeapi.co/api/v2/pokemon/${searchTerm}/`,
      );
      console.log(data);
    } catch (error) {
      console.error('Error while searching by name: ', error);
    }
  };

  return (
    <Grid container justify="center">
      <Grid justify="center" alignItems="center" container item xs={8}>
        <Paper style={styles.paper}>
          <Grid
            container
            direction="column"
            item
            justify="center"
            alignItems="center"
            xs={12}
          >
            <Grid item xs={4}>
              <Typography variant="h6" align="right">
                Let&apos;s Check
              </Typography>
            </Grid>
            <Grid container justify="center" item xs={4} spacing={2}>
              <Grid item xs={8}>
                <TextField
                  onChange={handleChange}
                  size="small"
                  id="search-field"
                  style={styles.searchField}
                  variant="standard"
                  helperText="Ex: Gyarados"
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  onClick={searchByName}
                  style={styles.searchButton}
                  variant="contained"
                  color="primary"
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SearchBox;
