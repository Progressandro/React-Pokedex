import React, { useEffect } from 'react';
import { Typography, Grid, Paper, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import LiveSearch from 'react-live-search';
import styles from './styles/SearchBox';
import updateSearch from '../actions/updateSearch';
import updateList from '../actions/updateList';

const Pokeapi = require('pokeapi-js-wrapper');

const P = new Pokeapi.Pokedex();

function SearchBox() {
  const searchTerm = useSelector((state) => state.searchTerm);
  const pokemonList = useSelector((state) => state.pokemonList);
  const dispatchList = useDispatch();
  const dispatchTerm = useDispatch();
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
        dispatchList(updateList(list));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
    fetchNames();
  }, [dispatchList]);

  const handleChange = (value) => {
    dispatchTerm(updateSearch(value));
  };

  const searchByName = async () => {
    try {
      const pokemon = await P.getPokemonByName(searchTerm);
      console.log(pokemon);
    } catch (error) {
      // eslint-disable-next-line no-console
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
                  value={searchTerm}
                  data={pokemonList}
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
