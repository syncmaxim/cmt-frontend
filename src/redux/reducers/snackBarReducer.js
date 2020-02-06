import * as TYPE from '../actions/types';

const initialState = {
  active: false,
  message: ''
};

const snackBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE.SUCCESS_SNACKBAR:
      return {
        active: true,
        message: action.payload,
        status: 'success'
      };
    case TYPE.ERROR_SNACKBAR:
      return {
        active: true,
        message: action.payload,
        status: 'error'
      };
    case TYPE.CLOSE_SNACKBAR:
      return initialState;
    default:
      return state;
  }
};

export default snackBarReducer;
