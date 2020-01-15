export const signIn = (user) => {
  return {
    type: 'SIGN_IN',
    payload: user
  }
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  }
};

export const openSuccessSnackBar = (message) => {
  return {
    type: 'SUCCESS_SNACKBAR',
    payload: message
  }
};

export const openErrorSnackBar = (message) => {
  return {
    type: 'ERROR_SNACKBAR',
    payload: message
  }
};

export const closeSnackBar = () => {
  return {
    type: 'CLOSE_SNACKBAR'
  }
};
