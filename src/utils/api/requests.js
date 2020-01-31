import api from "./utils";
import * as PATH from './paths';

// auth
export const signInApi = (data) => api.post(PATH.SIGN_IN_PATH, data);
export const signUpApi = (data) => api.post(PATH.SIGN_UP_PATH, data);

// events
export const getEventsApi = () => api.get(PATH.EVENTS_PATH);
export const createEventApi = (data) => api.post(PATH.EVENTS_PATH, data);
export const getEventApi = (id) => api.get(`${PATH.EVENTS_PATH}/${id}`);
export const attendEventApi = (id) => api.put(`${PATH.EVENTS_PATH}/attend/${id}`);
export const cancelEventApi = (id) => api.put(`${PATH.EVENTS_PATH}/attend/cancel/${id}`);

// user

export const getUserInfoApi = () => api.get(`${PATH.USERS_PATH}/user-info`);
