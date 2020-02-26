export default (state = { name: '', data: {} }, action) => {
  switch (action.type) {
    case 'UPDATE_SELECTED':
      return action.payload;
    default:
      return state;
  }
};
