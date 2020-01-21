export const signIn = (user) => ({
  type: 'SIGN_IN',
  payload: user
});

export const signOut = () => ({
  type: 'SIGN_OUT'
});

export const openSuccessSnackBar = (message) => ({
  type: 'SUCCESS_SNACKBAR',
  payload: message
});

export const openErrorSnackBar = (message) => ({
  type: 'ERROR_SNACKBAR',
  payload: message
});

export const closeSnackBar = () => ({
  type: 'CLOSE_SNACKBAR'
});
