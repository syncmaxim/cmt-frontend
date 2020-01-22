import React, { useEffect, useState } from "react";
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLastLocation } from "react-router-last-location";
import '../index.css';
import { openErrorSnackBar, signUp } from "../../../redux/actions";
import { emailValidate } from "../../../utils/helpers";

const Registration = props => {
  const dispatch = useDispatch();
  const lastLocation = useLastLocation();
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
    ((password && repeatPassword) && (password === repeatPassword)) ? setIsPasswordsMatches(true) : setIsPasswordsMatches(false);
  }, [password, repeatPassword]);

  function onRegisterSubmit(event) {
    event.preventDefault();

    if (!email || emailValidate(email)) {
      setFormErrors(prevState => {
        dispatch(openErrorSnackBar(`Invalid email address`));
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
      dispatch(signUp({email: email, password: password}, lastLocation, props));
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
