import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper, Button } from '@material-ui/core';
import LiveSearch from 'react-live-search';
import styles from './styles/SearchBox';

const Pokeapi = require('pokeapi-js-wrapper');
const P = new Pokeapi.Pokedex();

function SearchBox() {
  const [searchData, setSearchData] = useState({
    term: '',
    pokemonNames: [{ label: '', value: '' }],
  });

  useEffect(() => {
    async function fetchNames() {
      try {
        let list = (await P.getPokemonsList()).results;
        list = list
          .filter((pokemon) => !pokemon.name.includes('-'))
          .map((pokemon, idx) => ({
            label: pokemon.name,
            value: idx,
          }));
        setSearchData((prev) => ({ ...prev, pokemonNames: list }));
      } catch (error) {
        console.error(error);
      }
    }
    fetchNames();
  }, []);

  const handleChange = (value) => {
    setSearchData({ ...searchData, term: value });
  };

  const searchByName = async () => {
    try {
      const pokemon = await P.getPokemonByName(searchData.term);
      console.log(pokemon);
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
            <Grid
              container
              justify="center"
              alignItems="center"
              item
              xs={8}
              spacing={2}
            >
              <Grid item xs={8}>
                <LiveSearch
                  onChange={handleChange}
                  size="small"
                  id="search-field"
                  style={styles.searchField}
                  value={searchData.term}
                  data={searchData.pokemonNames}
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
