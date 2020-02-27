const defaultPokemon = {
  name: 'bulbasaur',
  data: { name: 'bulbasaur', id: 1, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
};

export default (state = defaultPokemon, action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED':
      return action.payload;
    default:
      return state;
  }
};
