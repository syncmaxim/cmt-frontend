import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, TextField } from '@material-ui/core';
import { useLastLocation } from "react-router-last-location";
import { openErrorSnackBar, signIn } from "../../../redux/actions";
import '../index.css';
import { emailValidate } from "../../../utils/helpers";

const Login = props => {
  const dispatch = useDispatch();
  const lastLocation = useLastLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false
  });

  function onLoginSubmit(event) {
    event.preventDefault();

    if (!email || emailValidate(email)) {
      setFormErrors(prevState => {
        dispatch(openErrorSnackBar(`Invalid email address`));
        return {...prevState, email: true }
      });
    } else {
      if (!password) {
        setFormErrors(prevState => {
          dispatch(openErrorSnackBar(`Password field is empty`));
          return {...prevState, password: true }
        });
      }
    }

    if ((email && !formErrors.email) && (password && !formErrors.password)) {
      dispatch(signIn({email: email, password: password}, lastLocation, props))
    }
  }

  return (
    <div className='authorization-container'>
      <form>
        <h2> Log in </h2>
        <div className='authorization-card'>
          <div className='form-field'>
            <TextField error={formErrors.email} name='email' label="Email" onChange={e => {setFormErrors(prevState => ({...prevState, email: false})); setEmail(e.target.value)}} />
          </div>
          <div className='form-field'>
            <TextField error={formErrors.password} name='password' label="Password" type="password" autoComplete="current-password" onChange={e => {setFormErrors(prevState => ({...prevState, password: false})); setPassword(e.target.value)}} />
          </div>
          <div className='authorization-controls'>
            <Button variant="contained" color="primary" onClick={onLoginSubmit}> Log In </Button>
            <div className='signup-link'> Don't have an account? <Link to='/registration'> Sign up </Link> </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
