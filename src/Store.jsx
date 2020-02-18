import React from 'react';
import { createStore } from 'redux';


// Store

// Actions
const updateList = () => ({ type: 'UPDATE_LIST' });
// Reducer
const pokemonList = (state = [{ label: '', value: '' }], action) => {
  switch (action.type) {
    case 'UPDATE_LIST':
      return { ...state, action.payload };
    default:
      return {};
  }
};

let store = createStore(pokemonList);
//Just to display info
store.subscribe(() => console.log(store.getstate()));


// Dispatch
store.dispatch(updateList([{label: 'pikachu', value: 1}]));
