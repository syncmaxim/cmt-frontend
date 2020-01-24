import { clearAuthData, getIsAuthTokenExists, saveAuthToken } from "../../utils/helpers/auth";
import * as TYPE from '../actions/types';

const initialState = getIsAuthTokenExists();

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.SIGN_IN:
      saveAuthToken(action.payload.token);
      return getIsAuthTokenExists();
    case TYPE.SIGN_OUT:
      return clearAuthData();
    default:
      return state;
  }
};

export default authorizationReducer;
