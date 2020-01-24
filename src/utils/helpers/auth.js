export const saveAuthToken = (authToken) => localStorage.setItem('AUTH_TOKEN', authToken);
export const getAuthToken = () => localStorage.getItem('AUTH_TOKEN');

export const getIsAuthTokenExists = () => ({ isLoggedIn: !!localStorage.getItem('AUTH_TOKEN') });

export const clearAuthData = () => {
  localStorage.clear();
  return { isLoggedIn: false }
};
