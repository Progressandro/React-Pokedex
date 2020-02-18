import { combineReducers } from 'redux';
import listReducer from './pokemonList';
import searchReducer from './searchTerm';

export default combineReducers({ pokemonList: listReducer, searchTerm: searchReducer });
