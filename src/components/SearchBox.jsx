import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import Autocomplete from 'react-autocomplete';
import updateSearch from '../actions/updateSearch';
import updateList from '../actions/updateList';
import updateSelected from '../actions/updateSelected';

const Pokeapi = require('pokeapi-js-wrapper');

const P = new Pokeapi.Pokedex();

export default function SearchBox() {
  const searchTerm = useSelector((state) => state.searchTerm);
  const pokemonList = useSelector((state) => state.pokemonList);
  // const selectedPokemon = useSelector((state) => state.selectedPokemon);
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
        // eslint-disable-next-line no-console
        console.error(error);
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
      console.error('API call error:', error);
    }
  }

  const renderResult = (item, highlighter) => (
    <div
      key={item.value}
      style={{
        backgroundColor: highlighter ? '#eee' : 'white',
        cursor: 'pointer',
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
            style: {
              height: 20,
              padding: 10,
              borderColor: 'lightgray',
              '&hover': {
                borderColor: 'transparent',
              },
            },
            placeholder: 'Ex: Gyarados',
          }}
          wrapperStyle={{ zIndex: 2 }}
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
