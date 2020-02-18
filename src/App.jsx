import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import { Container } from '@material-ui/core';
import NavBar from './components/NavBar';
import SearchBox from './components/SearchBox';
import Pokemon from './components/Pokemon';
import reducers from './reducers';

const store = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

function App() {
  return (
    <Provider store={store}>
      <Container disableGutters maxWidth={false}>
        <NavBar />
        <SearchBox />
        <Pokemon />
      </Container>
    </Provider>
  );
}

export default App;
