const defaultState = {
  family: [],
  loading: true,
  familyDetail: {},
  msg: "",
  filteredFamily: [],
};
const Individuals = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_FAMILY":
      return { ...state, family: action.data, loading: false };
    case "ADD_FAMILY":
      return { ...state, family: action.data, loading: false };
    case "DELETE_FAMILY":
      return { ...state, msg: action.data, loading: false };
    case "EDIT_FAMILY":
      return { ...state, msg: action.data, loading: false };
    case "GET_FAMILY_BY_ID":
      return { ...state, familyDetail: action.data, loading: false };
    case "SEARCH_FAMILY":
      return { ...state, filteredFamily: action.data, loading: false };
    default:
      return state;
  }
};
export default Individuals;
