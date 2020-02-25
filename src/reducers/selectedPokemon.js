const selectedPokemon = (state = [{ title: '', image: '' }], action) => {
  switch (action.type) {
    case 'UPDATE_POKEMON':
      return action.payload;
    default:
      return state;
  }
};

export default selectedPokemon;
