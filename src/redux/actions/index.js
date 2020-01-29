import * as TYPE from "./types";
import {createEventApi, getEventApi, getEventsApi, signInApi, signUpApi} from "../../utils/api/requests";
import { parseDateToCalendar } from "../../utils/helpers";

// Auth actions

export const signIn = (data, lastLocation, props) => dispatch => {
  signInApi(data)
    .then(response => {
      dispatch({
          type: TYPE.SIGN_IN,
          payload: response.data
        });
      if (lastLocation) {
        (lastLocation.pathname === '/registration' || lastLocation.pathname === '/login') ? props.history.push('/') : props.history.push(lastLocation.pathname);
      } else {
        props.history.push('/');
      }
      dispatch(openSuccessSnackBar('Successfully logged in'));
    })
    .catch(error => dispatch(openErrorSnackBar(error.response.data.message)))
};

export const signUp = (data, lastLocation, props) => dispatch => {
  signUpApi(data)
    .then(response => {
      dispatch({
        type: TYPE.SIGN_IN,
        payload: response.data
      });
      if (lastLocation) {
        (lastLocation.pathname === '/registration' || lastLocation.pathname === '/login') ? props.history.push('/') : props.history.push(lastLocation.pathname);
      } else {
        props.history.push('/');
      }
      dispatch(openSuccessSnackBar('Successfully registered'));
    })
    .catch(error => dispatch(openErrorSnackBar(error.response.data.message)))
};

export const signOut = () => ({
  type: TYPE.SIGN_OUT
});

// Snackbar actions

export const openSuccessSnackBar = (message) => ({
  type: TYPE.SUCCESS_SNACKBAR,
  payload: message
});

export const openErrorSnackBar = (message) => ({
  type: TYPE.ERROR_SNACKBAR,
  payload: message
});

export const closeSnackBar = () => ({
  type: TYPE.CLOSE_SNACKBAR
});

// Events actions

export const getEvents = () => dispatch => {
  getEventsApi()
    .then(response => dispatch({type: TYPE.GET_EVENTS, payload: parseDateToCalendar(response.data)}))
    .catch(error => dispatch(openErrorSnackBar(error.response.data.message)));
};

export const getEvent = (id) => dispatch => {
  getEventApi(id)
      .then(response => dispatch({type: TYPE.GET_EVENT, payload: response.data}))
      .catch(error => dispatch(openErrorSnackBar(error.response.data.message)))
};

export const createEvent = (data) => dispatch => {
  createEventApi(data)
    .then(response => {
      dispatch({type: TYPE.CREATE_EVENT});
      dispatch(openSuccessSnackBar('Successfully added'));
    })
    .catch(error => {
      dispatch(openErrorSnackBar(error.response.data.message))
    });
};
