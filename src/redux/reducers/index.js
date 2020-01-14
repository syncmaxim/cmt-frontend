import { combineReducers } from "redux";

import isLoggedReducer from "./isLogged";

const combinedReducers = combineReducers({
  isLoggedIn: isLoggedReducer
});

export default combinedReducers;
