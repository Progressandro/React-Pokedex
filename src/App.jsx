import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import NavBar from './components/NavBar';
import SearchBox from './components/SearchBox';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <Container disableGutters maxWidth={false}>
      <NavBar />
      <SearchBox />
      {/* <Pokemon /> */}
    </Container>
  );
}

export default App;
