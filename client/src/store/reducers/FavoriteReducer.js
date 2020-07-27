const defaultState = {
  favGame: [],
};
const FavoriteReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return { ...state, favGame: state.favGame.concat(action.newFavGame) };
    default:
      return state;
  }
};
export default FavoriteReducer;
