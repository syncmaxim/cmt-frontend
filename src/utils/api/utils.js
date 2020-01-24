import axios from 'axios';
import { getAuthToken } from "../helpers/auth";
import store from "../../redux/store";
import { signOut } from "../../redux/actions";

const api = axios.create({
  baseURL: 'http://localhost:4000'
});

api.interceptors.request.use(request => {
  const authToken = getAuthToken();
  request.headers['Authorization'] = `Bearer ${authToken}`;
  return request;
}, error => {
  return Promise.reject(error);
});

api.interceptors.response.use(response => {
  return response;
}, error => {
  if (error.response.status === 403) store.dispatch(signOut());
  return Promise.reject(error);
});

export default api;
