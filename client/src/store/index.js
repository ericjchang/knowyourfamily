import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import FamilyReducer from "./reducers/FamilyReducer";
import IndividualReducer from "./reducers/IndividualReducer";
import UserReducer from "./reducers/UserReducer";

const reducers = combineReducers({
  FamilyReducer,
  IndividualReducer,
  UserReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
