const initialState = {
  active: false,
  message: ''
};

const snackBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_SNACKBAR':
      return {
        active: true,
        message: action.payload,
        status: 'success'
      };
    case 'ERROR_SNACKBAR':
      return {
        active: true,
        message: action.payload,
        status: 'error'
      };
    case 'CLOSE_SNACKBAR':
      return {
        active: false,
        message: ''
      };
    default:
      return state;
  }
};

export default snackBarReducer;
