import { combineReducers } from "redux";

import authorizationReducer from "./authorizationReducer";
import snackBarReducer from "./snackBarReducer";
import eventsReducer from "./eventsReducer";
import userReducer from "./userReducer";

const combinedReducers = combineReducers({
  authorization: authorizationReducer,
  snackBar: snackBarReducer,
  events: eventsReducer,
  user: userReducer
});

export default combinedReducers;
