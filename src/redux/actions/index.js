import * as TYPE from './types';
import {
    createEventApi,
    getEventApi,
    getEventsApi,
    signInApi,
    signUpApi,
    attendEventApi,
    cancelEventApi,
    getUserInfoApi, changeUserPasswordApi, changeUserEmailApi
} from '../../utils/api/requests';
import { parseDateToCalendar } from '../../utils/helpers';
import {saveAuthToken} from "../../utils/helpers/auth";

// Auth actions

export const signIn = (data, lastLocation, props) => dispatch => {
  signInApi(data)
    .then(response => {
      dispatch({
          type: TYPE.SIGN_IN,
          payload: response.data
        });
        dispatch(getUserInfo());
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
      dispatch(getUserInfo());
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

export const createEvent = (data, props) => dispatch => { // TODO: ADD RESPONSE FROM SERVER
  createEventApi(data)
    .then(response => {
      dispatch({type: TYPE.CREATE_EVENT});
      dispatch(openSuccessSnackBar('Successfully added'));
      props.history.push('/');
    })
    .catch(error => {
      dispatch(openErrorSnackBar(error.response.data.message))
    });
};

export const attendEvent = (id) => dispatch => {
    attendEventApi(id)
        .then(response => {
            dispatch({type: TYPE.ATTEND_EVENT, payload: response.data});
            dispatch(openSuccessSnackBar('You was marked as an attendee'));
        })
        .catch(error => {
            dispatch(openErrorSnackBar(error.response.data.message))
        })
};

export const cancelAttendEvent = (id) => dispatch => {
    cancelEventApi(id)
        .then(response => {
            dispatch({type: TYPE.CANCEL_ATTEND_EVENT, payload: response.data});
            dispatch(openSuccessSnackBar('You successfully canceled your attendance :('));
        })
        .catch(error => {
            dispatch(openErrorSnackBar(error.response.data.message))
        })
};

// User actions

export const getUserInfo = () => dispatch => {
    getUserInfoApi()
        .then(response => {
            dispatch({type: TYPE.GET_USER_INFO, payload: response.data});
        })
        .catch(error => {
            dispatch(openErrorSnackBar(error.response.data.message))
        })
};

// Profile actions

export const changeUserPassword = (data, handleClick) => dispatch => {
    changeUserPasswordApi(data)
        .then(response => {
            dispatch({type: TYPE.CHANGE_PASSWORD, payload: response.data});
            dispatch(openSuccessSnackBar(response.data.message));
            handleClick();
        })
        .catch(error => {
            dispatch(openErrorSnackBar(error.response.data.message))
        })
};

export const changeUserEmail = (data, handleClick) => dispatch => {
    changeUserEmailApi(data)
        .then(response => {
            dispatch({type: TYPE.CHANGE_EMAIL, payload: response.data});
            dispatch(openSuccessSnackBar(response.data.message));
            saveAuthToken(response.data.token);
            dispatch(getUserInfo());
            handleClick();
        })
        .catch(error => {
            dispatch(openErrorSnackBar(error.response.data.message))
        })
};
