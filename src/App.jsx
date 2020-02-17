import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import NavBar from './components/NavBar';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <Container disableGutters maxWidth={false}>
      <NavBar />
      <SearchBox />
    </Container>
  );
}

export default App;
