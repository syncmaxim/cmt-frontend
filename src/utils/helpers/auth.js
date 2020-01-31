export const saveAuthToken = (authToken) => localStorage.setItem('AUTH_TOKEN', authToken);
export const getAuthToken = () => localStorage.getItem('AUTH_TOKEN');

export const saveUserId = (id) => localStorage.setItem('USER', id);
export const getUserId = () => localStorage.getItem('USER');

export const getIsAuthTokenExists = () => ({ isLoggedIn: !!localStorage.getItem('AUTH_TOKEN') && !!localStorage.getItem('USER') });

export const clearAuthData = () => {
  localStorage.clear();
  return { isLoggedIn: false }
};
