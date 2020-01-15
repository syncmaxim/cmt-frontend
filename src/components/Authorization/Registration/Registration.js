import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import '../index.css';
import { openErrorSnackBar, openSuccessSnackBar, signIn } from "../../../redux/actions";

const Registration = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isPasswordsMatches, setIsPasswordsMatches] = useState(false);
  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
    repeatPassword: false
  });

  useEffect(() => {
    if ((password && repeatPassword) && (password === repeatPassword)) {
      setIsPasswordsMatches(true);
    } else {
      setIsPasswordsMatches(false);
    }
  }, [password, repeatPassword]);

  function onRegisterSubmit(event) {
    event.preventDefault();

    if (!email) {
      setFormErrors(prevState => {
        dispatch(openErrorSnackBar(`There is no email`));
        return {...prevState, email: true }
      });
    } else {
      if (!isPasswordsMatches) {
        setFormErrors(prevState => {
          dispatch(openErrorSnackBar(`Passwords doesn't match`));
          return {...prevState, password: true, repeatPassword: true }
        });
      }
    }

    if (!formErrors.email && isPasswordsMatches) {
      axios.post(`/auth/register`, {email: email, password: password})
        .then(response => {
          dispatch(signIn(response.data));
          history.goBack();
          dispatch(openSuccessSnackBar('Successfully registered'));
        })
        .catch(error => {
          dispatch(openErrorSnackBar(error.response.data.message));
        });
    }
  }

  return (
    <div className='authorization-container'>
      <form>
        <h2> Sign up </h2>
        <div className='authorization-card'>
          <div className='form-field'>
            <TextField error={formErrors.email} name='email' label="Email" type='email' onChange={e => {setFormErrors(prevState => ({...prevState, email: false})); setEmail(e.target.value)}} />
          </div>
          <div className='form-field'>
            <TextField error={formErrors.password} name='password' label="Password" type="password" autoComplete="current-password" onChange={e => {setFormErrors(prevState => ({...prevState, password: false})); setPassword(e.target.value)}} />
          </div>
          <div className='form-field'>
            <TextField error={formErrors.repeatPassword} name='repeat-password' label="Repeat password" type="password" autoComplete="current-password" onChange={e => {setFormErrors(prevState => ({...prevState, repeatPassword: false})); setRepeatPassword(e.target.value)}}/>
          </div>
          <div className='authorization-controls'>
            <Button variant="contained" color="primary" onClick={onRegisterSubmit}> Sign Up </Button>
            <div className='signup-link'> Already have an account? <Link to='/login'> Sign in </Link> </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
