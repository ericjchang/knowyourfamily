const defaultState = {
  individuals: [],
  loading: true,
  individual: {},
  msg: "",
  filteredIndividual: [],
};
const Individuals = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, individuals: action.data, loading: false };
    case "ADD_INDIVIDUAL":
      return { ...state, individuals: action.data, loading: false };
    case "DELETE_INDIVIDUAL":
      return { ...state, msg: action.data, loading: false };
    case "EDIT_INDIVIDUAL":
      return { ...state, msg: action.data, loading: false };
    case "GET_INDIVIDUAL_BY_ID":
      return { ...state, individual: action.data, loading: false };
    case "SEARCH_INDIVIDUAL":
      return { ...state, filteredIndividual: action.data, loading: false };
    default:
      return state;
  }
};
export default Individuals;
