import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, TextField } from '@material-ui/core';
import { openErrorSnackBar, openSuccessSnackBar, signIn } from "../../../redux/actions";
import '../index.css';
import { signInApi } from "../../../utils/api/requests";

const Login = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false
  });

  const emailValidate = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);

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
      signInApi({email: email, password: password})
        .then(response => {
          dispatch(signIn(response.data));
          history.goBack();
          dispatch(openSuccessSnackBar('Successfully logged in'));
        })
        .catch(error => dispatch(openErrorSnackBar(error.response.data.message)))
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
