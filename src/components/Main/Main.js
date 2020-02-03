import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "react-redux";
import EventPage from '../EventPage/EventPage';
import Calendar from "../Calendar/Calendar";
import CreateEvent from "../CreateEvent/CreateEvent";
import Login from "../Authorization/Login/Login";
import Registration from "../Authorization/Registration/Registration";
import Profile from "../Profile/Profile";
import { closeSnackBar } from "../../redux/actions";

import './index.css';


const Main = (props) => {
  const dispatch = useDispatch();

  const snackBar = useSelector(state => state.snackBar);
  const userData = useSelector(state => state.user);

  const handleClose = (event, reason) => dispatch(closeSnackBar());

  return (
    <div className='main-container'>
      <Switch>
        <Route exact path='/event/:id' component={EventPage} />
        <Route exact path='/' component={Calendar} />
        <PrivateRoute exact path='/createEvent' canActivate={props.isLoggedIn} component={CreateEvent} />
        <PrivateRoute exact path='/profile/:id' canActivate={props.isLoggedIn} component={Profile} /> // TODO: MATCH USERID WITH PARAMID

        <Route exact path='/login' component={Login} />
        <Route exact path='/registration' component={Registration} />
      </Switch>
      <Snackbar open={snackBar.active} autoHideDuration={4000} onClose={handleClose}>
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
