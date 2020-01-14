function isUserLogged() {
  return !!localStorage.getItem('AUTH_TOKEN')
}

const initialState = isUserLogged();

const isLoggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      localStorage.setItem('AUTH_TOKEN', action.payload.token);
      return isUserLogged();
    case 'SIGN_OUT':
      localStorage.clear();
      return isUserLogged();
    default:
      return initialState;
  }
};

export default isLoggedReducer;
