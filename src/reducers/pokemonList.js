const pokemonList = (state = [{ label: '', value: '' }], action) => {
  switch (action.type) {
    case 'UPDATE_LIST':
      return action.payload;
    default:
      return state;
  }
};

export default pokemonList;
