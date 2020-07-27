const defaultState = {
  keadaan: true,
  games: [],
  searchGame: [],
  loading: true,
  detailGame: {},
  loadingInDetailGame: true,
};
const GameReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "MATIKAN_KEADAAN":
      return { ...state, keadaan: false };
    case "NYALAKAN_KEADAAN":
      return { ...state, keadaan: true };
    case "FETCH_DATA":
      return { ...state, games: action.data, loading: false };
    case "GAME_DETAIL":
      return { ...state, detailGame: action.data, loadingInDetailGame: false };
    case "SEARCH_GAME":
      return { ...state, searchGame: action.game };
    default:
      return state;
  }
};
export default GameReducer;
