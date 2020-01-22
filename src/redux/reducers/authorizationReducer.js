import { clearAuthData, getAuthToken, saveAuthToken } from "../../utils/helpers/auth";
import * as TYPE from '../actions/types';

const initialState = getAuthToken();

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.SIGN_IN:
      saveAuthToken(action.payload.token);
      return getAuthToken();
    case TYPE.SIGN_OUT:
      return clearAuthData();
    default:
      return state;
  }
};

export default authorizationReducer;
