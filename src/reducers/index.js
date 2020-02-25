import { combineReducers } from 'redux';
import listReducer from './pokemonList';
import searchReducer from './searchTerm';
import pokemonReducer from './selectedPokemon';
export default combineReducers({ pokemonList: listReducer, searchTerm: searchReducer, selectedPokemon: pokemonReducer });
