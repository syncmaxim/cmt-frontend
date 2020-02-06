import axios from 'axios';
import { getAuthToken } from "../helpers/auth";
import store from "../../redux/store";
import {setLoading, setUnloading, signOut} from "../../redux/actions";

const api = axios.create({
  baseURL: 'http://localhost:4000'
});

api.interceptors.request.use(request => {
  store.dispatch(setLoading());
  const authToken = getAuthToken();
  request.headers['Authorization'] = `Bearer ${authToken}`;
  return request;
}, error => {
  store.dispatch(setUnloading());
  return Promise.reject(error);
});

api.interceptors.response.use(response => {
  store.dispatch(setUnloading());
  return response;
}, error => {
  store.dispatch(setUnloading());
  if (error.response.status === 403) store.dispatch(signOut());
  return Promise.reject(error);
});

export default api;
