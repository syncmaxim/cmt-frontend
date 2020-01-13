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
      <Route exact path='/'>
        <Redirect to='/calendar' />
      </Route>
      <Route exact path='/calendar'>
        <Calendar/>
      </Route>
      <Route exact path='/createEvent'>
        <CreateEvent/>
      </Route>

      <Route exact path='/login'>
        <Login/>
      </Route>
      <Route exact path='/registration'>
        <Registration/>
      </Route>
    </Switch>
  </div>
);

export default Main;
