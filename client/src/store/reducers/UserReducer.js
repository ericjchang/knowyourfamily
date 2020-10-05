const defaultState = {
  access_token: "",
  loading: true,
  msg: "",
  filteredIndividual: [],
};
const Individuals = (state = defaultState, action) => {
  switch (action.type) {
    case "REGISTER":
      return { ...state, individuals: action.data, loading: false };
    case "LOGIN":
      return { ...state, individuals: action.data, loading: false };
    case "EDIT_USER":
      return { ...state, msg: action.data, loading: false };
    case "GET_USER_BY_ID":
      return { ...state, individual: action.data, loading: false };
    case "SEARCH_USER":
      return { ...state, filteredIndividual: action.data, loading: false };
    default:
      return state;
  }
};
export default Individuals;
