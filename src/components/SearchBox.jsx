import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import Autocomplete from 'react-autocomplete';
import updateSearch from '../actions/updateSearch';
import updateList from '../actions/updateList';
import updateSelected from '../actions/updateSelected';
import styles from './styles/SearchBox';

const Pokeapi = require('pokeapi-js-wrapper');

const P = new Pokeapi.Pokedex();

export default function SearchBox() {
  const searchTerm = useSelector((state) => state.searchTerm);
  const pokemonList = useSelector((state) => state.pokemonList);
  const dispatchList = useDispatch();
  const dispatchTerm = useDispatch();
  const dispatchSelected = useDispatch();
  // Initial request for pokemon
  useEffect(() => {
    async function fetchNames() {
      try {
        let list = (await P.getPokemonsList()).results;
        list = list
          .filter((pokemon) => !pokemon.name.includes('-'))
          .map((pokemon) => ({
            label: pokemon.name,
            value: pokemon.name,
          }));
        dispatchList(updateList(list));
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchNames();
  }, [dispatchList]);

  // Update search term
  const handleChange = (event) => {
    dispatchTerm(updateSearch(event.target.value));
  };

  const fetchPokemon = async (value) => {
    try {
      dispatchTerm(updateSearch(value));
      const result = await P.getPokemonByName(value);
      if (result) {
        const pokemon = {
          name: result.name,
          image: result.sprites.front_default,
          id: result.id,
        };
        dispatchSelected(updateSelected({ name: value, data: pokemon }));
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const renderResult = (item, highlighted) => (
    <div
      key={item.value}
      style={{
        ...styles.result,
        backgroundColor: highlighted ? '#eee' : 'white',
      }}
    >
      {item.label}
    </div>
  );

  return (
    <Grid container alignItems="center" direction="column">
      <Grid item container xs={4} justify="center">
        <Typography variant="h4" align="center">
          Let&apos;s check!
        </Typography>
      </Grid>
      <Grid item container xs={4} justify="center">
        <Autocomplete
          inputProps={{
            style: styles.searchField,
            placeholder: 'Ex: Gyarados',
          }}
          wrapperStyle={styles.searchFieldWrapper}
          getItemValue={(item) => item.label}
          items={pokemonList}
          shouldItemRender={(item, value) => {
            return (
              value && item.label.toLowerCase().includes(value.toLowerCase())
            );
          }}
          renderItem={renderResult}
          value={searchTerm}
          onChange={handleChange}
          onSelect={fetchPokemon}
        />
      </Grid>
    </Grid>
  );
}
