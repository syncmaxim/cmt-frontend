import api from "./utils";
import * as PATH from './paths';

// auth
export const signInApi = (data) => api.post(PATH.SIGN_IN_PATH, data);
export const signUpApi = (data) => api.post(PATH.SIGN_UP_PATH, data);

// events
export const getEventsApi = () => api.get(PATH.EVENTS_PATH);
export const createEventApi = (data) => api.post(PATH.EVENTS_PATH, data);
