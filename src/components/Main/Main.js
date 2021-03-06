import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from "react-redux";
import EventPage from '../EventPage/EventPage';
import Calendar from '../Calendar/Calendar';
import CreateEvent from '../CreateEvent/CreateEvent';
import Login from '../Authorization/Login/Login';
import Registration from '../Authorization/Registration/Registration';
import Profile from '../Profile/Profile';
import { closeSnackBar } from "../../redux/actions/index";

import './index.css';


const Main = (props) => {
  const dispatch = useDispatch();
  const snackBar = useSelector(state => state.snackBar);

  const handleClose = (event, reason) => {
      // TODO: here is the problem connected with autoHideDuration on snackBar:
      //       when the user clicks on close btn func handleClose calls but also
      //       snackbar emits this function after autoHideDuration ends.
      //       This may be caused due to two onClose props(on snackBar and Alert)
      dispatch(closeSnackBar());
  };

  return (
    <div className='main-container'>
      <Switch>
        <Route exact path='/event/:id' component={EventPage} />
        <Route exact path='/' component={Calendar} />
        <PrivateRoute exact path='/createEvent' canActivate={props.isLoggedIn} component={CreateEvent} />
        <PrivateRoute exact path='/profile' canActivate={props.isLoggedIn} component={Profile} />

        <Route exact path='/login' component={Login} />
        <Route exact path='/registration' component={Registration} />
      </Switch>
      <Snackbar open={snackBar.active} autoHideDuration={4000} disableWindowBlurListener={true} onClose={handleClose}>
        <Alert onClose={handleClose} severity={snackBar.status}> {snackBar.message} </Alert>
      </Snackbar>
    </div>
  );
};

const PrivateRoute = ({component: Component, ...rest}) => {
  const { canActivate } = {...rest};

  return (
        <Route {...rest} render={props => canActivate ?
            <Component {...props} />
            :
            <Redirect to='/login' />
          }
        />
  )
};

function Alert(props) {
  return <MuiAlert elevation={4} variant="filled" {...props} />;
}

export default Main;
