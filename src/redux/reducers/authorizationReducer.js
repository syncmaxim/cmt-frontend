import {clearAuthData, getIsAuthTokenExists, saveAuthToken, saveUserId} from '../../utils/helpers/auth';
import * as TYPE from '../actions/types';

const initialState = getIsAuthTokenExists();

const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.SIGN_IN:
      saveAuthToken(action.payload.token);
      saveUserId(action.payload.id);
      return getIsAuthTokenExists();
    case TYPE.SIGN_OUT:
      return clearAuthData();
    default:
      return state;
  }
};

export default authorizationReducer;
