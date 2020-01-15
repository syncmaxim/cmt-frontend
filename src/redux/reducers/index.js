import { combineReducers } from "redux";

import authorizationReducer from "./authorizationReducer";
import snackBarReducer from "./snackBarReducer";

const combinedReducers = combineReducers({
  isLoggedIn: authorizationReducer,
  openSnackBar: snackBarReducer
});

export default combinedReducers;
