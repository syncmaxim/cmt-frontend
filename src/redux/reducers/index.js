import { combineReducers } from 'redux';

import authorizationReducer from './authorizationReducer';
import snackBarReducer from './snackBarReducer';
import eventsReducer from './eventsReducer';
import userReducer from './userReducer';
import profileReducer from './profileReducer';
import preloadReducer from './preloadReducer';


const combinedReducers = combineReducers({
  authorization: authorizationReducer,
  snackBar: snackBarReducer,
  events: eventsReducer,
  user: userReducer,
  profile: profileReducer,
  preloader: preloadReducer
});

export default combinedReducers;
