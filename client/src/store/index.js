import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import FavoriteReducer from "./reducers/FavoriteReducer";
import GameReducer from "./reducers/GameReducer";
const reducers = combineReducers({
  FavoriteReducer,
  GameReducer,
});
const store = createStore(reducers, applyMiddleware(thunk));
export default store;
