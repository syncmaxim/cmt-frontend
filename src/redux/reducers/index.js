import { combineReducers } from "redux";

import authorizationReducer from "./authorizationReducer";
import snackBarReducer from "./snackBarReducer";
import eventsReducer from "./eventsReducer";

const combinedReducers = combineReducers({
  authorization: authorizationReducer,
  snackBar: snackBarReducer,
  events: eventsReducer
});

export default combinedReducers;
