import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Calendar from "../Calendar/Calendar";
import CreateEvent from "../CreateEvent/CreateEvent";
import Login from "../Authorization/Login/Login";
import Registration from "../Authorization/Registration/Registration";

import './index.css';

const Main = (props) => (
  <div className='main-container'>
    <Switch>
      <Route exact path='/' component={Calendar} />
      <PrivateRoute exact path='/createEvent' canActivate={props.isLoggedIn} component={CreateEvent} />

      <Route exact path='/login' component={Login} />
      <Route exact path='/registration' component={Registration} />
    </Switch>
  </div>
);

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

export default Main;
